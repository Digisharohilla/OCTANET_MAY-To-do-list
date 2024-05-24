document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const newTaskInput = document.getElementById('new-task');
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    taskList.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('delete-task')) {
            deleteTask(target.parentElement);
        }
    });

    function addTask(text) {
        const newTaskItem = document.createElement('li');
        newTaskItem.classList.add('task-item');

        const taskText = document.createElement('span');
        taskText.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task');
        deleteButton.textContent = 'Delete';

        newTaskItem.appendChild(taskText);
        newTaskItem.appendChild(deleteButton);
        taskList.appendChild(newTaskItem);
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
