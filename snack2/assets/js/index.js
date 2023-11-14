const output = document.getElementById("output");

for (let i = 0; i < 6 ; i++) {
    const li = document.createElement("li");
    li.textContent = i;

    if(i % 2 == 0) {
        li.className = "text-green";
    } else {
        li.className = "text-yellow"
    }
    output.append(li);
}