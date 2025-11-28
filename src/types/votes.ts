interface Votes {
  good: 0;
  neutral: 0;
  bad: 0;
}

type VoteType = "good" | "neutral" | "bad";

export type { Votes, VoteType };
