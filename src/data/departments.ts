export interface Department {
  readonly stage: "WIN" | "GROW" | "BUILD" | "SEND";
  readonly number: string;
  readonly name: string;
  readonly mandate: string;
  readonly offices: readonly string[];
  readonly summary: string;
}

// Source: HUIOS TRANSFORMATION MISSION client brief.
export const departments = [
  {
    stage: "WIN",
    number: "01",
    name: "Evangelism & Outreach Department",
    mandate: "To reach unbelievers, introduce people to Christ, and bring them into the Kingdom.",
    offices: [
      "Evangelism",
      "Missions & Community Outreach",
      "New Converts Care",
      "Media & Digital Evangelism",
    ],
    summary: "Primary responsibilities include evangelistic campaigns, community transformation, missions, follow-up, and digital evangelism.",
  },
  {
    stage: "GROW",
    number: "02",
    name: "Discipleship & Training Department",
    mandate: "To transform believers into mature sons and disciples of Christ.",
    offices: [
      "Foundations & New Believers",
      "School of Discipleship",
      "Cell Ministry",
      "Children & Youth Development",
      "Spiritual Growth & Maturity",
    ],
    summary: "This department oversees discipleship pathways, doctrinal instruction, cell groups, and spiritual formation.",
  },
  {
    stage: "BUILD",
    number: "03",
    name: "Ministry Operations & Administration",
    mandate: "To build the systems, structures, and resources that sustain ministry effectiveness.",
    offices: [
      "Administration",
      "Finance & Stewardship",
      "Human Resources & Volunteers",
      "Facilities & Logistics",
      "Communications & Public Relations",
    ],
    summary: "BUILD provides the operational backbone that enables the ministry to function with excellence.",
  },
  {
    stage: "SEND",
    number: "04",
    name: "Leadership, Deployment & Missions",
    mandate: "To identify, train, release, and multiply kingdom leaders.",
    offices: [
      "Leadership Development",
      "Ministry Deployment",
      "Apostolic Missions",
      "Leadership Assessment",
    ],
    summary: "SEND equips believers for leadership, ministry placement, church planting, and apostolic assignments.",
  },
] as const satisfies readonly Department[];
