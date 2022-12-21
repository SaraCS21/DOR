const colorSwitch = document.querySelectorAll('.switch input[type="checkbox"]');
const arrayColorSwitch = [...colorSwitch];

const logo = document.querySelector("#logo");
const img = document.querySelector("#img1");

function cambiaTema(ev){
    if(ev.target.checked){
        document.documentElement.setAttribute('tema', 'light');
        logo.src = "./img/logo_dark.png";
        img.src = "./img/img1_dark.png";
    } else {
        document.documentElement.setAttribute('tema', 'dark');
        logo.src = "./img/logo.png";
        img.src = "./img/img1.png";
    }
}

arrayColorSwitch.forEach(element => element.addEventListener('change', cambiaTema));