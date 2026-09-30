"""Generate abstract demo imagery for the preview build.

These are NOT client photographs. They are procedurally drawn light-and-haze
scenes in the brand palette, used only when PUBLIC_DEMO=true, so the layout can
be judged with imagery in place. Replace them with approved Huios photography.

Usage: python3 scripts/generate-demo-images.py   (needs Pillow and numpy)
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

OUT = Path(__file__).resolve().parent.parent / "public" / "demo"
INK = np.array([11, 10, 9], dtype=float)
PALETTE = [
    np.array([239, 73, 24], dtype=float),   # ember
    np.array([244, 197, 29], dtype=float),  # flame
    np.array([183, 80, 38], dtype=float),   # burnt
    np.array([246, 241, 232], dtype=float), # ivory
]


def crowd(width, height, rng, horizon):
    """Soft silhouettes of a gathered congregation, backlit, along the lower edge."""
    mask = Image.new("L", (width, height), 0)
    draw = ImageDraw.Draw(mask)
    rows = 4
    for row in range(rows):
        depth = row / (rows - 1)
        base_y = height * (horizon + depth * (1 - horizon) * 0.7)
        size = width * (0.018 + depth * 0.03)
        x = -size
        while x < width + size:
            head_x = x + rng.uniform(-0.3, 0.3) * size
            head_y = base_y + rng.uniform(-0.25, 0.25) * size
            draw.ellipse([head_x - size * 0.42, head_y - size * 0.55, head_x + size * 0.42, head_y + size * 0.5], fill=255)
            draw.ellipse([head_x - size * 1.15, head_y + size * 0.35, head_x + size * 1.15, head_y + size * 3.5], fill=255)
            if rng.random() < 0.06:  # a raised hand
                draw.polygon([(head_x + size * 0.5, head_y + size * 0.6), (head_x + size * 0.85, head_y - size * 1.8),
                              (head_x + size * 1.1, head_y - size * 1.75), (head_x + size * 0.85, head_y + size * 0.8)], fill=255)
            x += size * rng.uniform(1.5, 2.1)
    return np.asarray(mask.filter(ImageFilter.GaussianBlur(radius=width / 700)), dtype=float) / 255


def scene(name, width, height, seed, orbs=26, beams=3, focus=(0.7, 0.4), warmth=1.0, horizon=None):
    rng = np.random.default_rng(seed)
    y, x = np.mgrid[0:height, 0:width].astype(float)
    x /= width
    y /= height

    # Deep base with a warm glow around the focal point.
    fx, fy = focus
    glow = np.exp(-(((x - fx) * 1.4) ** 2 + ((y - fy) * 1.9) ** 2) * 3.2)
    img = INK[None, None, :] + glow[..., None] * np.array([70, 28, 12]) * warmth

    # Stage beams: soft diagonal shafts of light falling from above.
    for _ in range(beams):
        cx = rng.uniform(0.15, 0.95)
        tilt = rng.uniform(-0.35, 0.35)
        width_b = rng.uniform(0.03, 0.08)
        d = np.abs((x - cx) - tilt * y)
        shaft = np.exp(-(d / width_b) ** 2) * (1 - y) ** 1.4 * rng.uniform(0.18, 0.32)
        img += shaft[..., None] * np.array([246, 214, 170])

    base = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))

    # Bokeh: out-of-focus lights, larger and softer towards the focal area.
    layer = np.zeros((height, width, 3))
    for _ in range(orbs):
        ox = np.clip(rng.normal(fx, 0.25), 0, 1)
        oy = np.clip(rng.normal(fy, 0.22), 0, 1)
        r = rng.uniform(0.006, 0.03) * width
        color = PALETTE[rng.choice(4, p=[0.2, 0.25, 0.35, 0.2])]
        strength = rng.uniform(0.08, 0.32)
        dist = np.sqrt((x * width - ox * width) ** 2 + (y * height - oy * height) ** 2)
        disc = np.clip((r - dist) / (r * 0.18), 0, 1)
        layer += disc[..., None] * color * strength
    bokeh = Image.fromarray(np.clip(layer, 0, 255).astype(np.uint8)).filter(
        ImageFilter.GaussianBlur(radius=width / 180)
    )

    out = np.asarray(base, dtype=float) + np.asarray(bokeh, dtype=float) * 0.8
    out = out.clip(0, 255)
    haze = Image.fromarray(out.astype(np.uint8)).filter(ImageFilter.GaussianBlur(radius=width / 900))
    out = np.asarray(haze, dtype=float)

    if horizon is not None:
        people = crowd(width, height, rng, horizon)
        out = out * (1 - people[..., None] * 0.93) + people[..., None] * INK * 0.9

    # Film grain and vignette for a photographic finish.
    out += rng.normal(0, 5.5, out.shape)
    vignette = 1 - 0.55 * (((x - 0.5) * 1.3) ** 2 + ((y - 0.5) * 1.5) ** 2)
    out *= np.clip(vignette, 0.35, 1)[..., None]

    final = Image.fromarray(out.clip(0, 255).astype(np.uint8))
    final.save(OUT / f"{name}.webp", quality=80, method=6)
    final.save(OUT / f"{name}.jpg", quality=78, optimize=True, progressive=True)


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    scene("hero", 2400, 1350, seed=7, orbs=30, beams=4, focus=(0.72, 0.38), horizon=0.72)
    scene("hero-mobile", 900, 1600, seed=11, orbs=18, beams=2, focus=(0.6, 0.35), horizon=0.78)
    scene("gathering", 2000, 940, seed=3, orbs=30, beams=3, focus=(0.5, 0.4), warmth=1.2, horizon=0.66)
    scene("page", 2400, 1200, seed=21, orbs=18, beams=3, focus=(0.82, 0.3), warmth=0.8)
    for index, seed in enumerate([31, 42, 53, 64, 75, 86], start=1):
        scene(f"program-{index:02d}", 1200, 800, seed=seed, orbs=20, beams=2,
              focus=(0.3 + 0.08 * index, 0.4), horizon=0.68 if index % 2 else None)
    for index, seed in enumerate([101, 202, 303, 404], start=1):
        scene(f"media-{index:02d}", 960, 540, seed=seed, orbs=16, beams=2, focus=(0.55, 0.4),
              horizon=0.7 if index % 2 == 0 else None)
