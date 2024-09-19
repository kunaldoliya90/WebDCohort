let ctr = 0;

function addingTodo() {
  let inputValue = document.getElementById("inpField");
  let content = inputValue.value;

    let newElement = document.createElement("div");
    newElement.setAttribute("id", ctr);
    if (content !== "") {
      newElement.innerHTML = `<div style = "padding-top: 5px"> ${content} <button onClick="deleteTodo(${ctr})"
      style="background-color: blue; color: white; border-radius: 5px; padding: 10px 20px margin: 5px;"
      > delete </button> </div>`;
    }
    document.getElementById("mainBody").appendChild(newElement);

//   let divEl = document.createElement("div");
//   let textEl = document.createElement("span");
//   let buttonEl = document.createElement("button");
//   textEl.innerHTML = content;
//   buttonEl.innerHTML = "Delete";
//   divEl.appendChild(textEl);
//   divEl.appendChild(buttonEl);
//   document.getElementById("mainBody").appendChild(divEl);
//   buttonEl.setAttribute("onClick", deleteTodo());

  ctr += 1;
}

function deleteTodo(ctr) {
  let element = document.getElementById(ctr);
  if (element) {
    document.getElementById("mainBody").removeChild(element);
  }
}
