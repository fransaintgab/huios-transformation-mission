export interface TransformationStage {
  readonly id: "win" | "grow" | "build" | "send";
  readonly number: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
}

export const transformationPipeline = [
  {
    id: "win",
    number: "01",
    title: "WIN",
    subtitle: "Evangelism & Outreach",
    description: "Evangelism and outreach begin the journey of intentional discipleship.",
  },
  {
    id: "grow",
    number: "02",
    title: "GROW",
    subtitle: "Discipleship & Spiritual Formation",
    description: "Biblical teaching, worship, prayer, and mentoring form believers toward maturity in Christ.",
  },
  {
    id: "build",
    number: "03",
    title: "BUILD",
    subtitle: "Leadership Development & Ministry Training",
    description: "Leadership training and mentoring equip believers to serve faithfully and develop leadership capacity.",
  },
  {
    id: "send",
    number: "04",
    title: "SEND",
    subtitle: "Ministry, Missions & Societal Influence",
    description: "Mature believers are deployed through ministry and missions to influence families, churches, communities, institutions, and nations.",
  },
] as const satisfies readonly TransformationStage[];
