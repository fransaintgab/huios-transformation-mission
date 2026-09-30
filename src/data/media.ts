interface MediaCategory {
  readonly number: string;
  readonly name: string;
}

// Source: HUIOS TRANSFORMATION MISSION client brief.
export const mediaCategories: readonly MediaCategory[] = [
  { number: "01", name: "Sermons" },
  { number: "02", name: "Worship Sessions" },
  { number: "03", name: "Articles" },
  { number: "04", name: "Devotionals" },
  { number: "05", name: "Podcasts" },
  { number: "06", name: "Conference Messages" },
  { number: "07", name: "Photo Gallery" },
  { number: "08", name: "Livestreams" },
];
