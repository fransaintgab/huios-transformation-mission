interface ContactCategory {
  readonly number: string;
  readonly label: string;
}

// Source: HUIOS TRANSFORMATION MISSION client brief.
export const contactCategories: readonly ContactCategory[] = [
  { number: "01", label: "Prayer Requests" },
  { number: "02", label: "Partnership" },
  { number: "03", label: "Visit a Gathering" },
  { number: "04", label: "Volunteer Registration" },
  { number: "05", label: "General Enquiries" },
];

export interface ContactChannel {
  readonly label: string;
  readonly value: string;
  readonly href?: string;
}

/**
 * Official contact channels (email, phone, address, social). None have been
 * supplied by the client yet, so this stays empty until they are confirmed.
 */
export const contactChannels: readonly ContactChannel[] = [];
