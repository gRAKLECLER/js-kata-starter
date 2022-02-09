interface MCQ {
  id: string;
  poolOfQuestions: Question[];
}

interface Question {
  id: string;
  label: string;
  choices: Choice[];
  type: "SINGLE_CHOICE_QUESTION" | "MULTIPLE_CHOICES_QUESTION";
}

interface Choice {
  id: string;
  label: string;
  isValid: boolean;
}