export type Option = {
    id: number;
    label: string;
  };
  
  export type QuestionProps = {
    id?: string;
    label: string;
    category: string;
    options: Option[];
    answers: number[];
    docs: string[];
    avg_score: number;
    nb_answers: number;
  };
  
  export class Question {
    public constructor(
      public readonly id: string,
      /** The question */
      public label: string,
      public category: string,
      /** Possible answers */
      public options: Option[],
      /** The correct answers ids */
      public answers: number[],
      /** The links to the learning part of the project */
      public docs: string[],
      public avg_score: number,
      public nb_answers: number
    ) {}
  
    static create(props: QuestionProps): Question {
      const question = new Question(
        props.id,
        props.label,
        props.category,
        props.options,
        props.answers,
        props.docs,
        props.avg_score,
        props.nb_answers
      );
      return question;
    }
  }
  