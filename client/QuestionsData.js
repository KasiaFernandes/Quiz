let QuestionsData = [
    {
        id: 1,
        question: "Which of the following browsers was the first to support JavaScript?",
        category: "javascript",
        answers: [
            {
                answer: "Microsoft Internet Explorer 2.0 beta",
                correct: false
            },
            {
                answer: "Netscape Navigator 2.0 beta",
                correct: true
            },
            {
                answer: "Opera 2.0 beta",
                correct: false
            }
        ]
    },
    {
        id: 2,
        question: "Which company first implemented the JavaScript language?",
        category: "javascript",
        answers: [
            {
                answer: "Netscape Communications Corp.",
                correct: true
            },
            {
                answer: "Microsoft Corp.",
                correct: false
            },
            {
                answer: "Sun Microsystems Corp.",
                correct: false
            }
        ]
    },
    {
        id: 3,
        question: "The JavaScript International Standard is called",
        category: "javascript",
        answers: [
            {
                answer: "ECMA-262 Standard",
                correct: true
            },
            {
                answer: "JavaScript 1.3 Standard",
                correct: false
            },
            {
                answer: "ISO-262 Standard",
                correct: false
            }
        ]
    },
    {
        id: 4,
        question: "The original name of JavaScript was",
        category: "javascript",
        answers: [
            {
                answer: "JavaScript",
                correct: false
            },
            {
                answer: "LiveScript",
                correct: true
            },
            {
                answer: "ECMAScript",
                correct: false
            }
        ]
    },
    {
        id: 5,
        question: "What is the result of '1'--'1'?",
        category: "javascript",
        answers: [
            {
                answer: "2",
                correct: true
            },
            {
                answer: "0",
                correct: false
            },
            {
                answer: " '11' ",
                correct: false
            }
        ]
    },
    {
        id: 6,
        question: "In your JavaScript code, how do you find out which character occurs at a given position in a string?",
        category: "javascript",
        answers: [
            {
                answer: "String()",
                correct: false
            },
            {
                answer: "Stringlength()",
                correct: false
            },
            {
                answer: "CharAt()",
                correct: true
            }
        ]
    },
    {
        id: 7,
        question: "How do you prompt users with messages, at the same time requesting user input?",
        category: "javascript",
        answers: [
            {
                answer: "Alert",
                correct: false
            },
            {
                answer: "Prompt",
                correct: true
            },
            {
                answer: "Confirm",
                correct: false
            }
        ]
    },
    {
        id: 8,
        question: "new Array(5).toString() - What is the result?",
        category: "javascript",
        answers: [
            {
                answer: "[]",
                correct: false
            },
            {
                answer: " '[]' ",
                correct: false
            },
            {
                answer: " '...' ",
                correct: true
            }
        ]
    },
    {
        id: 9,
        question: "(true + false) > 2 + true; What is the result?",
        category: "javascript",
        answers: [
            {
                answer: "true",
                correct: false
            },
            {
                answer: "false",
                correct: true
            },
            {
                answer: "NaN",
                correct: false
            }
        ]
    },
    {
        id: 10,
        question: "What statement supplies the value of the function?",
        category: "javascript",
        answers: [
            {
                answer: "return",
                correct: true
            },
            {
                answer: "cancel",
                correct: false
            },
            {
                answer: "continue",
                correct: false
            }
        ]
    },
    {
        id: 11,
        question: "What is the correct CSS syntax for making all the <span> elements bold?",
        category: "css",
        answers: [
            {
                answer: "span {text-size:bold}",
                correct: false
            },
            {
                answer: "span {font-weight:bold}",
                correct: true
            },
            {
                answer: "<span style='font-size:bold'>",
                correct: false
            }
        ]
    },
    {
        id: 12,
        question: "In the following code snippet, what value is given the left margin: margin: 5px 10px 3px 8px;",
        category: "css",
        answers: [
            {
                answer: "3px",
                correct: false
            },
            {
                answer: "8px",
                correct: true
            },
            {
                answer: "10px",
                correct: false
            }
        ]
    },
    {
        id: 13,
        question: "How do you add a comment in a CSS file?",
        category: "css",
        answers: [
            {
                answer: "// this is a comment ",
                correct: false
            },
            {
                answer: "/* this is a comment */",
                correct: true
            },
            {
                answer: "// this is a comment //",
                correct: false
            }
        ]
    },
    {
        id: 14,
        question: "What property is used to change the text color of an element?",
        category: "css",
        answers: [
            {
                answer: "font-color:",
                correct: false
            },
            {
                answer: "color:",
                correct: true
            },
            {
                answer: "textcolor:",
                correct: false
            }
        ]
    },
    {
        id: 15,
        question: "The # symbol specifies that the selector is?",
        category: "css",
        answers: [
            {
                answer: "class",
                correct: false
            },
            {
                answer: "id",
                correct: true
            },
            {
                answer: "tag",
                correct: false
            }
        ]
    },
    {
        id: 16,
        question: "Which of the following would be used to create an ID called header which has a width of 750px, a height of 30px and the color of the text is black?",
        category: "css",
        answers: [
            {
                answer: ".header { height: 30px; width: 750px; colour: black; }",
                correct: false
            },
            {
                answer: "#header { height: 30px; width: 750px; color: black; }",
                correct: true
            },
            {
                answer: "#header { height: 30px; width: 750px; text: black; }",
                correct: false
            }
        ]
    },
    {
        id: 17,
        question: "Which snippet of CSS is commonly used to center a website horizontally?",
        category: "css",
        answers: [
            {
                answer: "margin: center;",
                correct: false
            },
            {
                answer: "margin: 0 auto;",
                correct: true
            },
            {
                answer: "margin: auto 0;",
                correct: false
            }
        ]
    },
    {
        id: 18,
        question: "How do you make a list not display bullet points?",
        category: "css",
        answers: [
            {
                answer: "list-style-type: no-bullet",
                correct: false
            },
            {
                answer: "list-style-type: none",
                correct: true
            },
            {
                answer: "list: none",
                correct: false
            }
        ]
    },
    {
        id: 19,
        question: "How do you make each word in a text start with a capital letter?",
        category: "css",
        answers: [
            {
                answer: "text-transform:uppercase",
                correct: false
            },
            {
                answer: "text-transform:capitalize",
                correct: true
            },
            {
                answer: "text:capitalize",
                correct: false
            }
        ]
    },
    {
        id: 20,
        question: "How do you insert padding so that it is: 10 pixels at the top, 15 pixels at the bottom, 5 pixels at the right, 10 pixels to the left?",
        category: "css",
        answers: [
            {
                answer: "padding:10px 15px 5px 10px;",
                correct: false
            },
            {
                answer: "padding:10px 5px 15px 10px;",
                correct: true
            },
            {
                answer: "padding:10px 5px 10px 15px;",
                correct: false
            }
        ]
    }
]

export default QuestionsData