const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Handling form submission
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (todoInput.value.trim() !== '') {
        addTask(todoInput.value);
        todoInput.value = '';
    }
});

// Adding tasks to the list
function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    addDeleteButton(li);
    todoList.appendChild(li);
}

// Function to add a delete button to each task
function addDeleteButton(li) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(deleteButton);
}
