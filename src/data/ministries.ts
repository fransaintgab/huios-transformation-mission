export interface Ministry {
  readonly number: string;
  readonly name: string;
}

// Source: HUIOS TRANSFORMATION MISSION client brief.
export const ministries = [
  { number: "01", name: "Transformation Worshippers" },
  { number: "02", name: "Prayer Ministry" },
  { number: "03", name: "School of Discipleship" },
  { number: "04", name: "Leadership Development" },
  { number: "05", name: "Missions & Outreach" },
  { number: "06", name: "Media Ministry" },
  { number: "07", name: "Cell Ministry" },
  { number: "08", name: "Children's Ministry" },
  { number: "09", name: "Youth Ministry" },
] as const satisfies readonly Ministry[];

export const cellMinistry = {
  statement: "Every department connects through the Cell Ministry, where believers receive pastoral care, discipleship, accountability, and leadership development.",
  roles: [
    "Cell Overseers",
    "Coordinators",
    "Leaders",
    "Assistant Leaders",
    "Secretaries",
    "Care Officers",
  ],
} as const;
