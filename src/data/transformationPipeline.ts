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
    subtitle: "Evangelism & Outreach Department",
    description: "Reach people with the Gospel.",
  },
  {
    id: "grow",
    number: "02",
    title: "GROW",
    subtitle: "Discipleship & Training Department",
    description: "Establish believers through discipleship.",
  },
  {
    id: "build",
    number: "03",
    title: "BUILD",
    subtitle: "Ministry Operations & Administration",
    description: "Develop systems, structures, and ministry excellence.",
  },
  {
    id: "send",
    number: "04",
    title: "SEND",
    subtitle: "Leadership, Deployment & Missions",
    description: "Deploy mature believers into leadership, ministry, and missions.",
  },
] as const satisfies readonly TransformationStage[];
