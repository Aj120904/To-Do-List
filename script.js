const inputBox = document.getElementById('input-box');
const addBtn = document.querySelector('.input-container button');
const listContainer = document.querySelector('.list-container');

function toDoList() {
  return {
    addTask: function () {
      if (inputBox.value === '') {
        alert('You need to type something!');
      } else {
        const li = document.createElement('li');
        const checkbox = document.createElement('span');
        const text = document.createElement('span');
        const del = document.createElement('img');
        checkbox.className = 'checkbox';
        text.className = 'text';
        text.innerText = inputBox.value;
        del.className = 'delete';
        del.src = 'assets/image/close-outline.svg';
        listContainer.appendChild(li);
        li.append(checkbox, text, del);
        inputBox.value = '';
      }
      this.saveTask();
    },
    doneTask: function (e) {
      if (
        e.target.tagName === 'SPAN' &&
        e.target.classList.contains('checkbox')
      ) {
        e.target.classList.toggle('checked');
      }
      this.saveTask();
    },
    deleteTask: function (e) {
      if (e.target.tagName === 'IMG' && e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
      }
      this.saveTask();
    },
    saveTask: function () {
      localStorage.setItem('task', listContainer.innerHTML);
    },
    showTask: function () {
      listContainer.innerHTML = localStorage.getItem('task');
    },
  };
}
const toDo = toDoList();

addBtn.addEventListener('click', () => {
  toDo.addTask();
});
listContainer.addEventListener('click', (e) => {
  toDo.doneTask(e);
  toDo.deleteTask(e);
});
toDo.showTask();
