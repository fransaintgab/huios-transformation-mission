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
  { label: "Media", href: "/media" },
  { label: "Get Involved", href: "/get-involved" },
] as const satisfies readonly NavigationLink[];

export const missionLink = {
  label: "Join the Mission",
  href: primaryNavigation[5].href,
} as const satisfies NavigationLink;

export const mediaLink = primaryNavigation[4];

export const footerNavigation = [
  {
    title: "Explore",
    links: primaryNavigation.slice(0, 4),
  },
  {
    title: "Connect",
    links: [
      { label: "Join a Cell", href: "/get-involved/join-a-cell/" },
      { label: "Volunteer", href: "/get-involved/volunteer/" },
      { label: "Partnership", href: "/get-involved/partnership/" },
      { label: "Prayer Request", href: "/get-involved/prayer-request/" },
    ],
  },
  {
    title: "Media",
    links: [
      { label: "HUIOS TV", href: "/media/huios-tv/" },
      { label: "Sermons", href: "/media/sermons/" },
      { label: "Podcasts", href: "/media/podcasts/" },
      { label: "Livestream", href: "/media/livestream/" },
    ],
  },
] as const satisfies readonly FooterLinkGroup[];
