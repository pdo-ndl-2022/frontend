export type Qcm = {
  id: string;
  title: string;
  category: string;
};

export type Option = {
  id: number;
  label: string;
};

export type Question = {
  id: string;
  label: string;
  category: string;
  options: Option[];
  answers: number[];
  docs: string[];
  avg_score: number;
  nb_answers: number;
};

export type User = {
  email: string;
  picture: string;
  given_name: string;
  score: number;
};
