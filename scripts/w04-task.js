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

myProfile.placesLived.push(
    {place: "lagos", length: "5 years"},
    {place: "Abeokuta", length: "3 years"},
    {place: "Sango", length: "1 year"}
);

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").innerText = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(function(food) {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    document.getElementById("favorite-foods").appendChild(listItem);
});

/* Hobbies List */
myProfile.hobbies.forEach(function(hobby) {
    let listItem = document.createElement("li");
    listItem.textContent = hobby;
    document.getElementById("hobbies").appendChild(listItem);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(function(placeInfo) {
    
    let dtElement = document.createElement("dt");
    
    dtElement.textContent = placeInfo.place;
    
    
    let ddElement = document.createElement("dd");
    
    ddElement.textContent = placeInfo.length;
    
    document.getElementById("places-lived").appendChild(dtElement);
    document.getElementById("places-lived").appendChild(ddElement);
});

