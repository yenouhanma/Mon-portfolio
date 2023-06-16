document.addEventListener('DOMContentLoaded', function () {
    var taskInput = document.getElementById ('task-input');
    var addTaskBtn = document.getElementById ('add-task-btn');
    var taskList = document.getElementById ('task-list');

    addTaskBtn.addEventListener('click', function () {
        var taskText = taskInput.value.trim();
        if (taskText !== '') {
            var taskItem = document.createElement('li');
            taskItem.style.marginTop = "5px";
            taskItem.className = 'task-item';
            taskItem.innerHTML = '<input type="checkbox" class="task-checkbox"><span class="task-text">' + taskText + '</span><button class="delete-btn">Delete</button>';
            taskList.appendChild(taskItem);
            taskInput.value = '';

            var deleteBtn = taskItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function () {
                taskItem.remove();
            });

            var taskCheckbox = taskItem.querySelector('.task-checkbox');
            taskCheckbox.addEventListener('change', function () {
                if (taskCheckbox.checked) {
                    taskItem.classList.add('completed');
                } else {
                    taskItem.classList.remove('completed');
                }
            });
        }
    });
});
