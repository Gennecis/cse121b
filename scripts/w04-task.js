/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Pascal Ebuka Okezie",
    photo: "images/profile.jpg",
    favoriteFoods:["Rice and Chicken Stew", "Suya", "Fried Rice", "Chicken", "Beef", "Yam and egg sauce"],
    hobbies: ["Cooking", "Reading", "Travelling"],
    placesLived: [],

};
    

/* Populate Profile Object with placesLive objects */

myProfile["placesLived"] = {
    place: "Lagos, Nigeria",
    length: "1 year"
}


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile["name"];
/* Photo with attributes */
document.querySelector("img").setAttribute("src", myProfile["photo"]);
doocument.querySelector("img").setAttribute("alt", "Profile Image");
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
    });
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
    });
/* Places Lived DataList */
const placesLived = myProfile["placesLived"];
const dl = document.querySelector('#places-lived');

for (const key in placesLived) {
  const dt = document.createElement('dt');
  dt.textContent = key;
  dl.appendChild(dt);

  const dd = document.createElement('dd');
  dd.textContent = placesLived[key];
  dl.appendChild(dd);
}

