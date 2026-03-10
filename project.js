'use strict';

const food = ['Burger', 'Pizza', 'Ramen', 'Nasi Goreng', 'Pasta'];

const button = document.querySelector('.button');
const buttonList = document.querySelector('.button-list');
const display = document.querySelector('.display');
const buttonRandom = document.querySelector('.button-random');
const input = document.querySelector('.food-input');
const list = document.querySelector('.list');
const h1 = document.querySelector('.h1');

button.addEventListener('click', function () {
  const newFood = input.value;
  // if (newFood === '') {
  //   alert('Please Enter Food Name!');
  // }

  //Short Circuiting
  // newFood || alert('Please Enter Food Name!');
  //Best approach
  if (newFood === '') {
    return alert('Please Enter Food Name!');
  }
  newFood &&
    food.push(newFood) &&
    alert(`${newFood} has been added to the list`);

  !list.classList.contains('hidden') && list.classList.add('hidden');
  h1.classList.contains('hidden') && h1.classList.remove('hidden');

  input.value = '';
});

//Log All food individually
buttonList.addEventListener('click', function () {
  list.textContent = ' Food List';
  for (const [no, item] of food.entries()) {
    const li = document.createElement('li');
    li.textContent = `${no + 1}.   ${item}`;
    list.appendChild(li);
  }
  const clear = document.createElement('button');
  clear.textContent = 'Clear';
  list.appendChild(clear);
  clear.addEventListener('click', function () {
    h1.classList.remove('hidden');
    list.textContent = '';
  });
  h1.classList.add('hidden');
  list.classList.remove('hidden');
});

//Pick a random food
buttonRandom.addEventListener('click', function () {
  const randomFood = Math.trunc(Math.random() * food.length);
  console.log(`Today's food suggestion: ${food[randomFood]}`);
  display.textContent = `Today's food suggestion: ${food[randomFood]}`;
});
