// get every blank
// const inputList = document.querySelectorAll("input");
const inputConfirmPWD = document.querySelector("#confirmPassword");
const inputPWD = document.querySelector("#password");

// click the submit button
const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", confirmPWD);

// check every pattern of blank
function confirmPWD() {
    // for (input of inputList) {
        //     if (input.value == ""){
            //         input.style["border"] = "1px solid red";
            //     }
            // } 
            
            // if (inputConfirmPWD.value != inputPWD.value) {
                //     inputConfirmPWD["border"] = "1px solid red";
                // }
}

function OnInput (event) {
    if (inputPWD.value != event.target.value) {
        inputConfirmPWD.style["border"] = "1px solid red";
    }else {
        inputConfirmPWD.style["border"] = "1px solid";
    }
}

