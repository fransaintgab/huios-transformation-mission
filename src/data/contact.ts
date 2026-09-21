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
