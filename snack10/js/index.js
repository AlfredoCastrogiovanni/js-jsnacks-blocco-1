
const wrapper = document.getElementById("wrapper");

const h1 = document.createElement("h1");
h1.textContent = Math.floor(Math.random() * 1000);
wrapper.append(h1);

const button = document.createElement("button");
button.textContent = "+3";
wrapper.append(button);

button.addEventListener("click", function() {
    h1.textContent = parseInt(h1.textContent) + 3;
});