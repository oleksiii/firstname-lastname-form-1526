// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fname">,
// <input type="text" id="email">
// <textarea id="details"></textarea>

let fm = document.querySelector('form');
let fn = document.getElementById('fname');
let em = document.getElementById('email');
let msg = document.getElementById('message');
let sb = document.querySelector('submit');

// store regular expression for email
let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// Declare variable that will color message feedback/errors
// let fb = document.querySelector('.feedback');
// let err = document.querySelector('.errors');

// Start with your function
function handleForm(e) {

    e.preventDefault();

    // Declare object that will store the form-data
    // Declare array that will store the errors
    let data = {};
    let errors = [];

    //FULL NAME |
    // Check if fullname is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your conditional here.

    if (fn.value !== '') {
        data.fname = fn.value;
    } else {
        // otherwise report corresponding error message
        errors.push('Full name is missing');
    }

    //EMAIL |
    // Check if email is not empty.
    // Check if email is valid.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your nested conditional here.
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your outer conditional here.

    if (em.value !== '') {

        if (regex.test(em.value)) {
            data.email = em.value;
        } else {
            errors.push('Please enter the valid email');
        }

    } else {
        errors.push('Email is missing. Please enter your email.');
    }

    //MESSAGE 
    // Check if message is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your conditional here.

    if (msg.value !== '') {
        data.message = msg.value;
    } else {
        // otherwise report corresponding error message
        errors.push('Message is missing');
    }

    //FEEDBACK / ERRORS
    // Check if there is anything in array errors
    // If so: 
    // Print it in JavaScript console.
    // Otherwise:
    // Print the data in JavaScript console.
    // Clear text-fields
    // End your conditional here.

    if (errors.length === 0) {
        console.log(data);

    } else {
        console.log(errors);
        // clear the text inputs from the form
        fm.reset();
    }

    // Close your function here
}

// Register your form to "click" event.
fm.addEventListener('submit', handleForm);