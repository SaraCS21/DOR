const result = document.querySelector("#num");
result.innerHTML = "";

const operation = document.querySelector("#operation");

const numNode = document.querySelectorAll(".number")
const numArray = [...numNode];

function insertNum(numArray){
    numArray.forEach(num => {
        num.addEventListener("click", e => {
            let element = e.target;

            result.innerHTML += element.value;
        });
    });
}

insertNum(numArray);

