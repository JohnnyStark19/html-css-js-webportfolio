'use strict';

const likebtn = document.querySelector('#likebtn');
const dislikebtn = document.querySelector('#dislikebtn');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

likebtn.addEventListener('click', () => {
  input1.value = parseInt(input1.value) + 1;
});

dislikebtn.addEventListener('click', () => {
  input2.value = parseInt(input2.value) + 1;
});

let tot = input1 + input2;

document.getElementById('output').innerHTML = tot;
