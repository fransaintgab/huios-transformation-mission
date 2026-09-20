export interface Department {
  readonly stage: "WIN" | "GROW" | "BUILD" | "SEND";
  readonly number: string;
  readonly name: string;
  readonly mandate: string;
  readonly offices: readonly string[];
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
  },
] as const satisfies readonly Department[];
