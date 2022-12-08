'use strict';

let addBtn = document.getElementById('add');
let removeBtn = document.getElementById('remove');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addBtn.addEventListener('click', function() {
  var paragraph = document.createElement('p')
  paragraph.classList.add('paragraph-styling')
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
  })
});

removeBtn.addEventListener('click', function () {
    paragraph.addEventListener('dlbclick', function(){
        toDoContainer.removeChild(paragraph);
      })
});

document.getElementById('add').onclick = () => {
const add = document.getElementById('add').value;
  if (add.value === '') {
    document.getElementById('output').innerHTML = 'Text box cant be blank';
  }
};
