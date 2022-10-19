/**
    Funcion que nos genera un alert de Bootstrap
    @return Componente Alert de Boostrap
**/
const createBootsrapAlert = message => {
    const alert = document.createElement("div");
    const pAlert = document.createElement("p");
    const btnAlert = document.createElement("button");
    
    alert.classList = "alert alert-success alert-dismissible fade show";
    alert.role = "alert";
    alert.tabIndex = -1;
    
    pAlert.textContent = message;
    
    btnAlert.classList = "btn-close";
    btnAlert.dataset.bsDismiss = "alert";
    btnAlert.ariaLabel = "Close";
    
    alert.append(pAlert, btnAlert);
    return alert;
}
    
const nodeLoginModal = document.querySelectorAll("#loginModal .input-group");
const loginModal = [...nodeLoginModal];

const posAlertLogin = document.querySelector("#loginModal .modal-body");

const nodeRegisterModal = document.querySelectorAll("#registroModal .row input");
const registerModal = [...nodeRegisterModal];

const posAlertRegister = document.querySelector("#registroModal .modal-body");

// insertAlert(loginModal, posAlertLogin);
// insertAlert(registerModal, posAlertRegister);

/** 
    Función que inserta/elimina un alert dependiendo del elemento seleccionado
    @arrayModal le pasamos el array de inputs dentro del modal
    @posAlert le pasamos la posición a partir de donde queremos colocar el alert
**/
function insertAlert(arrayModal, posAlert){
    arrayModal.forEach(modal => {
        modal.addEventListener("click", e => {
            const element = e.target;
        
            if(element.nodeName === "INPUT") {
                const exist = document.querySelector(".alert");
        
                if(exist) {
                    posAlert.removeChild(exist);
                };
                
                const alert = createBootsrapAlert(`Has pulsado en el elemento ${element.ariaLabel}.`);
                posAlert.insertAdjacentElement("afterbegin", alert);
            }
        });
    })
}

/** 
    Función que inserta/elimina un alert dependiendo del elemento seleccionado
    @e le pasamos el evento para que se ejecute
    @elementModal le pasamos la posición a partir de donde queremos colocar el alert
**/
function insertAlertDelegation(e, elementModal, modal){
    const element = e.target;

    if(element.nodeName === "INPUT") {
        const exist = document.querySelector(`#${modal} .alert`);

        if(exist) {
            elementModal.removeChild(exist);
        };
        
        const alert = createBootsrapAlert(`Has pulsado en el elemento ${element.ariaLabel}.`);
        elementModal.insertAdjacentElement("afterbegin", alert);

        // Indicamos que, después de 2500 milisegundos, se elimine el alert
        setTimeout(() => {
            if(alert.isConnected){
                elementModal.removeChild(alert);
            }
        }, 3000);
    }
}

posAlertLogin.addEventListener("click", e => (insertAlertDelegation(e, posAlertLogin, "loginModal")));
posAlertRegister.addEventListener("click", e => (insertAlertDelegation(e, posAlertRegister, "registroModal")));

const btnLogin = document.querySelector("#loginModal .btn-success");

function errors(arrayModal, btnLogin){
    fail = 0;

    arrayModal.forEach(modal => {
        const p = document.querySelector(`#${modal.id} p`);
        const input = document.querySelector(`#${modal.id} input`);

        if ((/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(input.value)) && input.id === "email"){
            modal.classList.add("is-valid");
            p.style.display = "none";

        } else if (input.id === "contraseña" && input.value.length > 10){
            modal.classList.add("is-valid");
            p.style.display = "none";

        } else {
            modal.classList.add("is-invalid");
            p.style.display = "block";
            fail++;
        }
    })

    if (fail === 0){
        btnLogin.setAttribute("data-bs-dismiss", "modal");
    }
};

const nodeLoginErrors = document.querySelectorAll("#loginModal .content");
const loginErrors = [...nodeLoginErrors];

btnLogin.addEventListener("click", () => errors(loginErrors, btnLogin))