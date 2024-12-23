const inputBox = document.getElementById('input-box');
const addBtn = document.querySelector('.input-container button');
const listContainer = document.querySelector('.list-container');

addBtn.addEventListener('click', (e) => {
  if (inputBox.value === '') {
    alert('You need to type something.');
  } else {
    const li = document.createElement('li');
    const delBtn = document.createElement('img');
    li.innerText = inputBox.value;
    delBtn.setAttribute('src', 'assets/image/close-outline.svg');
    listContainer.appendChild(li);
    li.appendChild(delBtn);
  }
  inputBox.value = '';
  saveTask();
});
listContainer.addEventListener('click', (e) => {
  if (e.target.tagName == 'LI') {
    e.target.classList.toggle('checked');
  } else if (e.target.tagName == 'IMG') {
    e.target.parentElement.remove();
  }
  saveTask();
});

function saveTask() {
  localStorage.setItem('tasks', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('tasks');
}

showTask();
