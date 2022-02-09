interface Respondant{
    id: string;
}

interface Quiz {
    id: string;
    mcqId: string;
    subsetOfQuestions: Question[];
}

interface Answer {
    id: string;
    respondantId: string;
    quizzId: string;
    questionId: string[]; // ref context/model
    choicesIds: string[]; // ref context/model
}