document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-btn');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function () {
        const taskText = inputField.value.trim();
        if (taskText) {
            addTask(taskText);
            inputField.value = '';
            inputField.focus();
        }
    });

    function addTask(text) {
        const listItem = document.createElement('li');
        listItem.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        listItem.addEventListener('click', function () {
            listItem.classList.toggle('completed');
        });

        todoList.appendChild(listItem);
    }
});
