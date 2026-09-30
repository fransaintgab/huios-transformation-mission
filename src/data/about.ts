interface LeadershipOffice {
  readonly title: string;
  readonly description: string;
}

// Source: HUIOS TRANSFORMATION MISSION client brief.
export const identity = {
  name: "Huios Transformation Mission",
  formerName: "Apostolic Transformation Mission",
  descriptor: "An Interdenominational Discipling Network",
  statement: "Raising Mature Sons to Reveal Christ and Transform Nations",
  purpose: "We exist to see believers transformed into the image of Christ through intentional discipleship, apostolic teaching, prayer, worship, leadership development, and kingdom deployment.",
  network: "Huios Transformation Mission is more than a ministry—it is a discipling network committed to raising mature sons who influence every sphere of society for the Kingdom of God.",
} as const;

export const whoWeAre = [
  "Huios Transformation Mission (formerly Apostolic Transformation Mission) is an interdenominational discipling network committed to raising mature believers who accurately represent Christ in every generation.",
  "We believe that transformation is God's method for fulfilling His eternal purpose. Therefore, our emphasis is not merely on church attendance but on discipleship, spiritual formation, leadership multiplication, and apostolic deployment.",
  "Through biblical teaching, worship, prayer, mentoring, conferences, retreats, missions, and leadership training, we equip believers to become mature sons who influence families, churches, communities, institutions, and nations.",
] as const;

// Taken word for word from the third Who We Are paragraph.
export const equipping = {
  means: [
    "Biblical teaching",
    "Worship",
    "Prayer",
    "Mentoring",
    "Conferences",
    "Retreats",
    "Missions",
    "Leadership training",
  ],
  spheres: ["Families", "Churches", "Communities", "Institutions", "Nations"],
} as const;

export const philosophy = {
  statement: "Transformation precedes manifestation.",
  body: "Our focus is not merely gathering crowds but building disciples. Every believer is called to mature into sonship, serve faithfully, develop leadership capacity, and ultimately become a kingdom influence.",
} as const;

export const model = {
  introduction: "The ministry operates through a clear Kingdom growth pathway:",
  cycle: "This ministry model creates a continuous cycle of evangelism, discipleship, leadership development, and apostolic multiplication.",
} as const;

export const leadership = [
  {
    title: "Apostolic Council",
    description: "Provides spiritual oversight, doctrinal guidance, strategic direction, and leadership accountability for the mission.",
  },
  {
    title: "Founder / Lead Apostle",
    description: "The vision bearer responsible for apostolic leadership, spiritual oversight, and overall direction of the ministry.",
  },
] as const satisfies readonly LeadershipOffice[];
