interface ParticipationPathway {
  readonly number: string;
  readonly label: string;
}

// Source: HUIOS TRANSFORMATION MISSION client brief.
export const participationPathways: readonly ParticipationPathway[] = [
  { number: "01", label: "Join a Cell" },
  { number: "02", label: "Become a Volunteer" },
  { number: "03", label: "Serve in a Department" },
  { number: "04", label: "Attend Conferences" },
  { number: "05", label: "Become a Ministry Partner" },
  { number: "06", label: "Support Missions" },
  { number: "07", label: "Enroll in Discipleship Training" },
];
