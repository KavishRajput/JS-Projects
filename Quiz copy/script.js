let array = [
    {
        id: 1,
        question: "What is the smallest header in HTML by default?",
        Options: ["h1", "h2", "h4", "h6"],
        answer: "h6"
    },
    {
        id: 2,
        question: "How to create an unordered list in HTML?",
        Options: ["<ul>", "<ol>", "<li>", "None of the above"],
        answer: "<ul>"
    },
    {
        id: 3,
        question: "Which of the following attribute is used to provide a unique name to an element?",
        Options: ["class", "type", "id", "None of the above"],
        answer: "id"
    },
    {
        id: 4,
        question: "Which of the following tag is used to insert a line-break in HTML?",
        Options: ["<a>", "<br>", "<pre>", "<b>"],
        answer: "<br>"
    },
    {
        id: 5,
        question: "Which of the following tag is used to define options in a drop-down selection list?",
        Options: ["<select>", "<list>", "<option>", "<dropdown>"],
        answer: "<option>"
    }
];


let full_display = document.querySelector(".display");
full_display.classList.add("display");

// Color full_display
let input = document.getElementById("color");
input.addEventListener("input", function () {
    full_display.style.backgroundColor = input.value;
});


// Handle color change for list items
let input1 = document.getElementById("color1");
input1.addEventListener("input", function () {
    let listBoxes = document.querySelectorAll(".list_box");
    listBoxes.forEach(box => {
        box.style.backgroundColor = input1.value;
    });
});


function quizbox() {
    for (let i = 0; i < array.length; i++) {
        let display = document.querySelector(".display");
        
        let main = document.createElement("div");
        main.classList.add("main");
        
        let question_box = document.createElement("div");
        question_box.classList.add("question_box");

        let serial = document.createElement("span");
        serial.textContent = array[i].id + ". ";
        serial.classList.add("serial");

        let question = document.createElement("span");
        question.textContent = array[i].question;
        question.classList.add("question");

        let br1 = document.createElement("br");

        // Create radio buttons and labels dynamically
        let options = array[i].Options;
        let listBoxes = [];

        for (let j = 0; j < options.length; j++) {
            let list_box = document.createElement("div");
            list_box.classList.add("list_box");

            let radio = document.createElement("input");
            radio.classList.add("list");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "option" + array[i].id);
            radio.setAttribute("id", options[j] + array[i].id);
            radio.setAttribute("value", options[j]);

            let radio_label = document.createElement("label");
            radio_label.textContent = options[j];
            radio_label.setAttribute("for", options[j] + array[i].id);
            radio_label.classList.add("list_label");

            list_box.append(radio, radio_label);
            listBoxes.push(list_box);

            // Handle radio button selection
            radio.addEventListener("input", () => checkAnswer(i, radio));
        }

        display.append(main);
        main.append(question_box, br1, ...listBoxes);
        question_box.append(serial, question);
    }

}

quizbox();


//Submit Button
let submit=document.createElement("button");
submit.textContent="Submit";
submit.classList.add("submit");
submit.addEventListener("click", ()=>{
 alert(`Your Score is ${correct_answer} out of ${array.length}`);
});
full_display.append(submit);




let correct_answer = 0;
let incorrect_answer = 0;

function checkAnswer(index_value, selected_option) {
    const question = array[index_value];
    const isCorrect = selected_option.value === question.answer;

    if (isCorrect) {
        selected_option.parentElement.classList.add("right");
        correct_answer++;
    } else {
        selected_option.parentElement.classList.add("wrong");
        incorrect_answer++;
    }
}