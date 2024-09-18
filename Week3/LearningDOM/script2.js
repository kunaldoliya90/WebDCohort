let ctr = 0;

function addTodo() {
    const inp = document.getElementById("inp");
    const val = inp.value.trim();
    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", ctr);
    newDivEl.innerHTML = `<div>${val}</div><button onclick='deleteTodo(${ctr})'>delete</button>`;
    
    document.getElementById("Body").appendChild(newDivEl);
    inp.value = "";
    ctr++;
}

function deleteTodo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.parentNode.removeChild(element); // Correctly remove the element
    }
}