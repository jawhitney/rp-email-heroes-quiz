export class Answer {
    answer: string;
    isCorrect: boolean;
}

export class Questions {
    question: string;
    answers: Answer[]
}

export class Results {
    correctHeadline: string;
    correct: string;
    incorrectHeadline: string;
    incorrect: string;
}

export class ResultResources {
    image: string;
    label: string;
    url: string;
    title: string;
}

export class Quiz {
    questions: Questions[];
    results: Results;
    resultsResources: ResultResources[];
}

export class Hero {
    id: number;
    name: string;
    image: string;
    description: string;
    socialMessage: string;
    logo: string;
    logoAlt: string;
    colorScheme: string;
    questionHeadline: string;
    quiz: Quiz;
}
