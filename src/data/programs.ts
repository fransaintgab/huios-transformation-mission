export interface Program {
  readonly number: string;
  readonly name: string;
  readonly description: string;
}

// Source: HUIOS TRANSFORMATION MISSION client brief.
export const programs = [
  {
    number: "01",
    name: "Annual Retreat",
    description: "A yearly gathering focused on spiritual renewal, consecration, deep teaching, prayer, worship, and prophetic direction for the ministry. It serves as a time of alignment with God's vision for the coming season.",
  },
  {
    number: "02",
    name: "Mid-Year Retreat",
    description: "A strategic retreat for spiritual refreshing, evaluation, and recalibration. Participants receive biblical instruction, engage in corporate prayer, and renew their commitment to personal and ministry growth.",
  },
  {
    number: "03",
    name: "Sons of Oil Conference",
    description: "The ministry's leadership and impartation conference, designed to raise spiritually mature believers through apostolic teaching, prophetic ministry, leadership development, and impartation. It equips participants to function effectively in their divine calling.",
  },
  {
    number: "04",
    name: "Singles Summit",
    description: "A conference dedicated to preparing single believers for purposeful living, godly relationships, emotional maturity, and Christ-centered marriage through biblical teaching and practical discipleship.",
  },
  {
    number: "05",
    name: "Global Altar Project",
    description: "A weekly online gathering that unites believers across locations for worship, apostolic teaching, prayer, and spiritual formation. The Global Altar Project exists to cultivate a consistent rhythm of encounter with God and strengthen believers through the ministry of the Word.",
  },
  {
    number: "06",
    name: "Morphosis Encounter",
    description: "A transformational encounter designed to facilitate deep spiritual renewal through worship, prayer, prophetic ministry, and biblical teaching. The emphasis is on inward transformation that produces outward conformity to the image of Christ.",
  },
] as const satisfies readonly Program[];
