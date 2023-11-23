
//declare btn variable
let btn1 = document.querySelector('[data-btn1]')
let btn2 = document.querySelector('[data-btn2]')

//declare display variable
let display = document.querySelector('[data-display]')

//set array
let booleanArray = [true, false, true, false, true, true, false, false,true];

// Count the number of true values in the array
let count = booleanArray.filter(value => value === true).length;

//add event listner to btn to add function
btn1.addEventListener('click',function(){
    display.value = count
})


btn2.addEventListener('click', function(){
    display.value= ''
})


