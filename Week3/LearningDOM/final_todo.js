let ctr = 0;

function addToDo() {
    const inputEl = document.getElementById("inp");
    const value = inputEl.value.trim();
    if (value === "") return; // Prevent adding empty tasks

    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", ctr);
    newDivEl.classList.add("todo-item");

    newDivEl.innerHTML = `
        <div class="task-text">${value}</div>
        <div>
            <button class='edit-btn' onclick='editTodo(${ctr})'>Edit</button>
            <button class='delete-btn' onclick='deleteTodo(${ctr})'>Delete</button>
        </div>
    `;

    document.getElementById("todoList").appendChild(newDivEl); // Append the new task to the todo list
    inputEl.value = ""; // Clear the input
    ctr++;
}

function deleteTodo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.parentNode.removeChild(element); // Remove the task from the DOM
    }
}

function editTodo(id) {
    const element = document.getElementById(id);
    if (element) {
        const taskText = element.querySelector('.task-text');
        const currentText = taskText.innerText;

        // Create an input field for editing
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = currentText;
        editInput.classList.add("edit-input");
        
        // Replace the task text with the input field
        taskText.innerHTML = ""; // Clear current text
        taskText.appendChild(editInput);

        // Create and append the Save button
        const saveButton = document.createElement("button");
        saveButton.classList.add('save-btn');
        saveButton.innerText = "Save";
        saveButton.onclick = function() {
            const newValue = editInput.value.trim();
            if (newValue === "") return; // Prevent empty task
            taskText.innerText = newValue; // Update the task text
            
            // Remove the Save button after saving
            saveButton.remove(); // Remove the save button
        };
        taskText.appendChild(saveButton);
    }
}
