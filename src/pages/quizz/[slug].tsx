import { Button, Card, styled, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { StretchedBox } from "../../components/stretched-box.component";
import { Qcm } from "./qcm.entity";
import { Question } from "./question.entity";

const QuizzSlug = () => {
  const Root = styled("div")(({ theme }) => ({
    padding: theme.spacing(4, 2),
    width: "100%",
  }));

  // const auth = useAuth();
  // const handleClick = () => {
  //   getQuiz(auth)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const router = useRouter();
  const { slug } = router.query;
  
  const qcm = new Qcm();
  qcm.title = "Quizz 1";
  
  /* type QuestionProps = {
    id?: string;
    label: string;
    category: string;
    options: Option[];
    answers: number[];
    docs: string[];
    avg_score: number;
    nb_answers: number;
  } */

  const questions = [
    Question.create({
      id: "1",
      label: "Question 1",
      category: "cat1",
      options: [
        { label: "Option 1", id: 1 },
        { label: "Option 2", id: 2 },
        { label: "Option 3", id: 3 },
        { label: "Option 4", id: 4 },
      ],
      answers: [1],
      docs: [],
      avg_score: 0,
      nb_answers: 0,
  }),
  Question.create({
    id: "2",
    label: "Question 2",
    category: "cat1",
    options: [
      { label: "Option 1", id: 1 },
      { label: "Option 2", id: 2 },
      { label: "Option 3", id: 3 },
      { label: "Option 4", id: 4 },
    ],
    answers: [1],
    docs: [],
    avg_score: 0,
    nb_answers: 0,
}),
  ];

  type Answer = {
    questionId: string;
    optionId: number;
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [anwsed, setAnwsed] = useState(false);
  // stop quiz if no more questions
  const [isFinished, setIsFinished] = useState(false);

  return (
    <Root>
      <StretchedBox>
        {/* A quizz contains questions.
            A question has 4 propositions and a text.
            After awnsering a question, the user can see the correct answer.
            After awnsering a question, user can click Next to go to the next question.
        */}
        <Typography variant="h1">{qcm.title}</Typography>
        {!isFinished && questions[currentQuestion] && (<Typography variant="h2">{questions[currentQuestion].label}</Typography>)}
        {!isFinished && questions[currentQuestion] && questions[currentQuestion].options.map((option) => (
          <Card key={option.id} onClick={() => {
            setAnswers([...answers, { questionId: questions[currentQuestion].id, optionId: option.id }]);
            setCurrentQuestion(currentQuestion + 1);
            setAnwsed(true);
            if (currentQuestion === questions.length - 1) {
              setIsFinished(true);
            }
          }}>
            {option.label}
          </Card>
        ))}
        {anwsed && questions[currentQuestion] && (
          <Typography variant="p">Correct answer: {questions[currentQuestion].answers ?? questions[currentQuestion].answers.join(', ')}</Typography>
        )}
          {anwsed && !isFinished && (
        <Button onClick={() => {setCurrentQuestion(currentQuestion + 1);setAnwsed(false)}}>Suivant</Button>
        )}
        {isFinished && (
          <Typography variant="h3">Quiz terminé</Typography>
        )}
        </StretchedBox>
    </Root>
  );
};

export default QuizzSlug;
