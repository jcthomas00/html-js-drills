// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector("#name");
  nameElement.innerText = "Jacob";
}

function addFavoriteThings() {
  console.log("Called addFavoriteThings()");
  let favoriteThings = document.querySelector("#favthings");
  console.log(favoriteThings);
  let favArray = ['Tamarindo', 'Anime', 'Meg Thee Stallion'];
  favoriteThings.innerHTML = favArray.map(item=>`<li>${item}</li>`).join('');

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
}

function replaceImage() {
  console.log("Called replaceImage()");
  let image = document.querySelector("#picture");
  console.log(image);
  image.setAttribute("src", "pic.jpg");
  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp
}

function changeCodeStatus() {
  console.log("Called changeCodeStatus()");
  document.querySelector('#codestatus').innerText = 'I loves to code!!';
  // codeStatus.innerHTML=`<img src="doge.gif" alt="My Doge">`;
  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image

}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector("#show-info-button");

// Do something when showInfoButton is clicke
showInfoButton.addEventListener("click", function () {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector("#information-form");

// Do something when form is submitted
informationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.
  //var nameValue = document.getElementById("fname").value;

  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values

  let formInfo = Object.fromEntries(new FormData(event.target));
  console.log(formInfo.codercheck);
  if(formInfo !== {}){
    document.querySelector("#firstname").innerHTML = formInfo.fname;
    document.querySelector("#lastname").innerHTML = formInfo.lname;
    document.querySelector("#chosencar").innerHTML = formInfo.cars;
    document.querySelector("#icecreamstatus").innerHTML = formInfo.icecream
    
      let checkList = document.createElement('ul');
      if(formInfo.humancheck === ''){
        let check1  = document.createElement('li')
        check1.innerText = 'Human';
        checkList.appendChild(check1)
      }
      if(formInfo.codercheck === ''){
        let check1  = document.createElement('li');
        check1.innerText = 'Coder';
        checkList.appendChild(check1)
      }
      document.querySelector("#checks").appendChild(checkList);

  }
});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector("#console-log-button");


// Log something when that button is clicked
consoleLogButton.addEventListener("click", function () {
  console.log("Aloha");
});

let makeBlueButton = document.querySelector("#make-blue-button");
makeBlueButton.addEventListener("click", function () {

  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
  document.querySelector('#colorText').setAttribute("style","color:blue")

});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addEventListener("keydown", function (event) {
  
  if(event.key == 'r'){
    document.querySelector('#colorText').setAttribute("style","color:red")
  }
  // This is called whenever a user pressed any key.
  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere
  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */
let toDoListForm = document.querySelector(".form");
let taskArray = ['I need to do something!'];
// Do something when form is submitted
toDoListForm.addEventListener("submit", function (event) {
  event.preventDefault();
  taskArray.push(document.querySelector('#todo').value)
  
  document.querySelector('#todos').innerHTML = taskArray.map(val => `<li>${val}</li>`).join('')
  
});

// Your code goes here

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */
let i = 0;
setInterval(()=>{
  i++;
  document.querySelector('#seconds').innerHTML = i;
},1000)
// Your code goes here

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here

//window.alert(selObj);
document.body.addEventListener('mouseup', (e)=>{
  var selection = window.getSelection().toString();
  if(selection !== ''){
    alert(selection)
  }
  console.log("selection: ",selection)
})