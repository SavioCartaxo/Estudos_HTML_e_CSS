const title = document.getElementById("title");
const taskInput = document.getElementById("task_input");
const addButton = document.getElementById("add_button");
const taskList = document.getElementById("task_list");

addButton.addEventListener("click", () => {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Digite uma task.");
    }
    const li = document.createElement("li");

    
    li.textContent = taskText;

    taskList.appendChild(li);

    taskInput.value = "";
});