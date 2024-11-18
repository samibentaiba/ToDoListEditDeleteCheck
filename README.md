# To-Do List App

A simple to-do list web application built using HTML, CSS, and JavaScript. This app allows users to add, complete, edit, and delete tasks, while saving the data in the browser's localStorage to persist the list across sessions.

## Features:
- **Add tasks**: Users can add new tasks to the list.
- **Mark tasks as complete**: Tasks can be checked as complete or incomplete.
- **Edit tasks**: Users can edit the content of existing tasks.
- **Delete tasks**: Tasks can be deleted from the list.
- **Persistent data**: Tasks are stored in `localStorage`, ensuring the list persists even after the browser is closed or refreshed.

## Technologies:
- **HTML5**: Structure of the web page.
- **CSS3**: Styling and layout using Flexbox for task management.
- **JavaScript**: Logic for adding, editing, marking, and deleting tasks. Utilizes the `localStorage` API for task persistence.

## Features in Detail:
- **Task Addition**: You can add tasks by typing them into the input field and pressing the "Add Task" button.
- **Mark as Complete**: Click the checkbox next to a task to mark it as complete. Completed tasks will be displayed with a strikethrough.
- **Edit Task**: You can edit any task by clicking the "Edit" button next to the task. This turns the task into an input field where you can change its text, then click "Save" to save the new task content.
- **Delete Task**: Tasks can be deleted by clicking the "Delete" button next to them. This will remove the task from both the UI and `localStorage`.
- **Persistent Storage**: Tasks are saved in the browser's `localStorage`, so when the user returns to the app, their tasks are still available.

## Setup:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
