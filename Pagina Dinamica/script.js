document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function createTask(taskText) {
        const newTaskItem = document.createElement('li');
        newTaskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="task-actions">
                </br>
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Excluir</button>
                <button class="complete-btn">Concluir</button>
            </span>
        `;
        taskList.appendChild(newTaskItem);
    }

    addTaskBtn.addEventListener('click', function() {
        const newTaskText = taskInput.value.trim();
        if (newTaskText !== '') {
            createTask(newTaskText);
            taskInput.value = '';
        } else {
            alert('Por favor, digite uma tarefa válida.');
        }
    });

    taskList.addEventListener('click', function(event) {
        const target = event.target;
        const taskItem = target.closest('li');
    
        if (target.classList.contains('edit-btn')) {
            const taskText = taskItem.querySelector('.task-text').textContent;
            const newText = prompt('Editar Tarefa:', taskText);
            if (newText !== null) {
                taskItem.querySelector('.task-text').textContent = newText;
            }
        } else if (target.classList.contains('delete-btn')) {
            if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
                taskItem.remove();
            }
        } else if (target.classList.contains('complete-btn')) {
            taskItem.classList.toggle('completed');
            const taskText = taskItem.querySelector('.task-text');
            if (taskItem.classList.contains('completed')) {
                taskText.style.textDecoration = 'line-through';
            } else {
                taskText.style.textDecoration = 'none';
            }
        }
    });
});
