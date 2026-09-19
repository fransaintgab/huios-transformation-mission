interface VisionMission {
  readonly vision: string;
  readonly mission: {
    readonly statement: string;
    readonly pillars: readonly string[];
  };
}

// Source: HUIOS TRANSFORMATION MISSION client brief.
export const visionMission = {
  vision: "To raise mature sons who reveal Christ, transform society, and advance the Kingdom of God throughout the nations.",
  mission: {
    statement: "To disciple believers into spiritual maturity through:",
    pillars: [
      "Apostolic doctrine",
      "Prayer and worship",
      "Kingdom leadership development",
      "Intentional discipleship",
      "Evangelism and missions",
      "Church strengthening",
      "Leadership multiplication",
      "Kingdom partnerships",
    ],
  },
} as const satisfies VisionMission;
