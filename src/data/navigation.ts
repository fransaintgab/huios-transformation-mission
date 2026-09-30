export interface NavigationLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterLinkGroup {
  readonly title: string;
  readonly links: readonly NavigationLink[];
}

export const primaryNavigation = [
  { label: "About", href: "/about/" },
  { label: "Our Model", href: "/our-model/" },
  { label: "Ministries", href: "/ministries/" },
  { label: "Programs", href: "/programs/" },
  { label: "Media", href: "/media/" },
  { label: "Get Involved", href: "/get-involved/" },
] as const satisfies readonly NavigationLink[];

export const missionLink = {
  label: "Join the Mission",
  href: primaryNavigation[5].href,
} as const satisfies NavigationLink;

export const mediaLink = primaryNavigation[4];

export const contactLink = {
  label: "Contact",
  href: "/contact/",
} as const satisfies NavigationLink;

/** Reading order of the inner pages; each page closes by pointing to the next one. */
export const pageSequence = [
  ...primaryNavigation,
  contactLink,
] as const satisfies readonly NavigationLink[];

export const footerNavigation = [
  {
    title: "Explore",
    links: primaryNavigation.slice(0, 4),
  },
  {
    title: "Connect",
    links: [
      { label: "Join a Cell", href: "/get-involved/#join-a-cell" },
      { label: "Volunteer", href: "/get-involved/#become-a-volunteer" },
      { label: "Partnership", href: "/get-involved/#become-a-ministry-partner" },
      { label: "Prayer Request", href: "/contact/#prayer-requests" },
      contactLink,
    ],
  },
  {
    title: "Media",
    links: [
      { label: "HUIOS TV", href: "/media/" },
      { label: "Sermons", href: "/media/#sermons" },
      { label: "Podcasts", href: "/media/#podcasts" },
      { label: "Livestream", href: "/media/#livestreams" },
    ],
  },
] as const satisfies readonly FooterLinkGroup[];

/** The page that follows `href` in the reading order, or home after the last page. */
export function nextPageAfter(href: string): NavigationLink {
  const index = pageSequence.findIndex((link) => link.href === href);
  return pageSequence[index + 1] ?? { label: "Home", href: "/" };
}
