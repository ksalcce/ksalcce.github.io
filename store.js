const STORE = {
    questions: [
      {
        question: "What is Javascript ?",
        options: [
          "JavaScript is to program the behavior of web pages", 
          "JavaScript is to to specify the layout of web pages", 
          "JavaScript is to to define the content of web pages", 
          "JavaScript is something cool to run"
        ],
        answer: "JavaScript is to program the behavior of web pages"
      },
      
      {
        question: "What does DOM stand for ?",
        options: [
          "Document Object Model",
          "Do our Math", 
          "Document Ojective Model",
          "Dominic Oscar Method"
        ],
        answer: "Document Object Model"
      },
      
      {
        question: "How do you write 'Hello World' in an alert box?",
        options: [
          "msgBox('Hello World');", 
          "alertBox('Hello World');", 
          "msg('Hello World');", 
          "alert('Hello World');"
        ],
        answer: "alert('Hello World');"
      },
      
      {
        question: "Which of the following function of String object combines the text of two strings and returns a new string?	", 
        options: [
          "add()",
         "merge()", 
         "concat()", 
         "append()"
         ],
        answer: "concat()"
      },
  
       {
        question: "Which of the following is not a reserved word in JavaScript?", 
        options: [
          "interface",
         "throws", 
         " program", 
         " short"
         ],
        answer: " program"
      },
      
      
    ],
    currentQuestion: 0,
    score: 0
  };