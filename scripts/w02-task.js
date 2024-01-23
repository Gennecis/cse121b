/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let FullName = "Pascal Ebuka Okezie";
let currentYear = "2024";
let profilePicture = "images/profile.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${FullName}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${profilePicture}`);


/* Step 5 - Array */
let favFood = ["Rice and Chicken Stew", "Suya", "Fried Rice", "Chicken", "Beef", "Yam and egg sauce"];
let singlefavFood = "African Salad";
foodElement.textContent = favFood;
favFood.push(singlefavFood);
foodElement.innerHTML += `<br>${favFood}`;
favFood.splice(0,1);
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;



