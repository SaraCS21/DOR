import { values } from "./values.js"

const body = document.querySelector("body");

body.addEventListener("click", e => {
    const element = e.target;

    if (element.className === "navNumber"){
        const active = document.querySelector("#active");
        active.id = "";
        element.id = "active";

        if (element.textContent == 1){
            const inputs = document.querySelectorAll(".form1 input");
            const arrInputs = [...inputs];

            arrInputs.forEach(input => {
                console.log(input.value)

                values["name"] = input.name === "name" ? input.value : "";
            });

            console.log(values);

        } else if (element.textContent == 2){


        } else if (element.textContent == 3){


        } else if (element.textContent == 4){


        }

        
    }
})