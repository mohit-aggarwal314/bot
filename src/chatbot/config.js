import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
          {
            question: "What is Hoisting?",
            answer: "JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.",
          }
        ],
      },
    },
    {
      widgetName: "pythonQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is Python?",
            answer:
              "Python is a high-level, interpreted, general-purpose programming language. Being a general-purpose language, it can be used to build almost any type of application with the right tools/libraries. Additionally, python supports objects, modules, threads, exception-handling, and automatic memory management which help in modelling real-world problems and building applications to solve these problems.",
            id: 1,
          },
          {
            question: "What is __init__?",
            answer:
              "__init__ is a contructor method in Python and is automatically called to allocate memory when a new object/instance is created. All classes have a __init__ method associated with them. It helps in distinguishing methods and attributes of a class from local variables.",
          },
        ],
      },
    },
  ],
};

export default config;
