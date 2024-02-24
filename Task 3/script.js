document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');
    const completedCount = document.getElementById('completedCount');

    let todos = [];
    let todoIdCounter = 0;

    addButton.addEventListener('click', function () {
        const text = todoInput.value.trim();
        if (text !== '') {
            const todo = { id: todoIdCounter++, text: text, completed: false };
            todos.push(todo);
            renderTodoList();
            todoInput.value = '';
        }
    });

    function renderTodoList() {
        todoList.innerHTML = '';
        todos.forEach(function (todo) {
            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';
            li.innerHTML = `
        <span class="${todo.completed ? 'completed-text' : ''}">
          ${todo.text}
        </span>
        <div>
          <button data-id="${todo.id}" class="completeButton">${todo.completed ? 'Undo' : 'Completed'}</button>
          <button data-id="${todo.id}" class="deleteButton">Delete</button>
        </div>
      `;
            todoList.appendChild(li);
        });
        updateCompletedCount();
    }

    todoList.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('completeButton')) {
            const id = parseInt(target.getAttribute('data-id'));
            const todo = todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                renderTodoList();
            }
        } else if (target.classList.contains('deleteButton')) {
            const id = parseInt(target.getAttribute('data-id'));
            todos = todos.filter(todo => todo.id !== id);
            renderTodoList();
        }
    });

    function updateCompletedCount() {
        const completedTodos = todos.filter(todo => todo.completed);
        completedCount.textContent = `Completed Count: ${completedTodos.length}`;
    }
});
