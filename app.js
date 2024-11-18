// app.js

document.addEventListener('DOMContentLoaded', loadTasks);

const taskInput = document.querySelector('#new-task');
const addButton = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');

// Add task
addButton.addEventListener('click', function() {
  if (taskInput.value.trim() !== '') {
    const task = createTaskElement(taskInput.value);
    taskList.appendChild(task);
    saveTaskToLocalStorage(taskInput.value);
    taskInput.value = '';  // clear the input
  }
});

// Create task element
function createTaskElement(taskContent) {
  const li = document.createElement('li');
  li.classList.add('task-item'); // Add class for styling with Flexbox
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  const span = document.createElement('span');
  span.textContent = taskContent;
  
  const buttonsDiv = document.createElement('div'); // Wrap Edit and Delete buttons in a div
  buttonsDiv.classList.add('buttons-container'); // Class for the button container

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  
  // Mark task as complete
  checkbox.addEventListener('change', function() {
    span.classList.toggle('completed');
  });
  
  // Edit task
  editButton.addEventListener('click', function() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.value = span.textContent;
    li.insertBefore(newInput, span);
    li.removeChild(span); // Remove the original span
    
    editButton.textContent = 'Save';
    
    editButton.removeEventListener('click', arguments.callee); // Remove current listener
    editButton.addEventListener('click', function() {
      span.textContent = newInput.value; // Update the span with the new value
      li.insertBefore(span, newInput);  // Re-insert the span back into the list item
      li.removeChild(newInput); // Remove the input field
      
      editButton.textContent = 'Edit';  // Change the button text back to "Edit"
      
      updateTaskInLocalStorage(taskContent, newInput.value);  // Update task in localStorage
    });
  });

  // Delete task
  deleteButton.addEventListener('click', function() {
    li.remove();
    removeTaskFromLocalStorage(taskContent);
  });

  // Append buttons to the buttons div
  buttonsDiv.appendChild(editButton);
  buttonsDiv.appendChild(deleteButton);
  
  // Append elements to li
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(buttonsDiv); // Append the buttons container to the li

  return li;
}

// Save task to localStorage
function saveTaskToLocalStorage(taskContent) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(taskContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(taskContent => {
    const task = createTaskElement(taskContent);
    taskList.appendChild(task);
  });
}

// Remove task from localStorage
function removeTaskFromLocalStorage(taskContent) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task !== taskContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Update task in localStorage after editing
function updateTaskInLocalStorage(oldTaskContent, newTaskContent) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.map(task => task === oldTaskContent ? newTaskContent : task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
``
