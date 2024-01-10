document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.querySelector('#new-task-description');
    const task = taskInput.value;
    if (task === '') {
      alert('Please enter a task!');
      return;
    }
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  });
  
});
