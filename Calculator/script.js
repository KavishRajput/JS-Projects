// Enter Value in Input Box
let buttons = document.querySelectorAll(".bttn");
buttons.forEach(button => {
    button.onclick = function () {
        let val = button.value;
        document.querySelector(".display").value += val;
    };
});

// Solve Equation
let solve = document.querySelector(".btn20");
solve.onclick = function () {
    let equation = document.querySelector(".display").value;

                                                                                                                        // //Replace^ by**-Done
                                                                                                                        //         for(let i=0;i<equation.length;i++){
                                                                                                                        //             equation=equation.replace("^","**")
                                                                                                                        //         }
                                                                                                                        //         let solution=eval(equation);
                                                                                                                        //         document.querySelector(".display").value=solution;
                                                                                                                        //     } 

// Replace '^' with '**' for exponentiation
    equation = equation.replace(/\^/g, "**");
    let solution = eval(equation);
    document.querySelector(".display").value = solution;
};

// Clear
let C = document.querySelector(".btn17");
C.onclick = function () {
    document.querySelector(".display").value = "0";
};

                                                                                                                         // //BackSpace-Done
                                                                                                                         // let X=document.querySelector(".btn1");
                                                                                                                         // X.onclick=function(){
                                                                                                                         //     let equation=document.querySelector(".display").value;
                                                                                                                         //     if(equation==""){
                                                                                                                         //         document.querySelector(".display").value=0;
                                                                                                                         //     }
                                                                                                                         //     else if (equation==0){
                                                                                                                         //         document.querySelector(".display").value=0;
                                                                                                                         //     }
                                                                                                                         //     else{
                                                                                                                         //         let new_equation= equation.substr(0, equation.length - 1);
                                                                                                                         //         document.querySelector(".display").value=new_equation;
                                                                                                                         //     }
                                                                                                                         // }

// BackSpace
let X = document.querySelector(".btn1");
X.onclick = function () {
    let equation = document.querySelector(".display").value;
    if (equation === "" || equation === "0") {
        document.querySelector(".display").value = "0";
    } else {
        let new_equation = equation.slice(0, -1);
        document.querySelector(".display").value = new_equation || "0";
    }
};

// Zero Button - Avoid Multiple Zeros
let zero = document.querySelector(".btn18");
zero.onclick = function () {
    let equation = document.querySelector(".display").value;
    if (equation === "0" || equation === "") {
        document.querySelector(".display").value = "0";
    } else {
        document.querySelector(".display").value += "0";
    }
};

// Num - Remove Leading Zero
let num = document.querySelectorAll(".num");
num.forEach(numButton => {
    numButton.onclick = function () {
        let equation = document.querySelector(".display").value;
        if (equation === "0") {
            document.querySelector(".display").value = numButton.value;
        } else if (equation === "") {
            document.querySelector(".display").value = numButton.value;
        } else {
            document.querySelector(".display").value += numButton.value;
        }
    };
});

//Operator First
let Fir=document.querySelectorAll(".fir");
let equation = document.querySelector(".display").value;
if(equation==0){
    Fir.onclick=function(){
        document.querySelector(".display").value="0"+Fir.value;
    }
}
