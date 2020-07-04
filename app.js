const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
//const select = document.querySelector('select');


let seli = document.createElement("SELECT");
var myParent = document.body;

//Create array of options to be added
var array = ["Volvo","Saab","Mercades","Audi"];

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";
myParent.appendChild(selectList);

//Create and append the options

const clearBt =  document.querySelector('.clear-tasks');
const card_ =  document.querySelector('.card');
const h5_ =  document.querySelector('h5');


function runEvent1(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

card_.addEventListener('mousemove',runEvent1);



var option = document.createElement("option");
option.text = "Kiwi";
seli.add(option);
document.querySelector('ul').appendChild(seli);

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}