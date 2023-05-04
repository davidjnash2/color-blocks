$(document).ready(onReady); // added the first line load (boilerplate, it seems?)
console.log('🟥 🟦 🟩 🟨');

function onReady (){ // declare onReady function

    // registered event handler to execute appendRedBlock function when red button is clicked
    $('#red-btn').on('click', appendRedBlock); 

    // registered event handler to execute appendBlueBlock function when blue button is clicked
    $('#blue-btn').on('click', appendBlueBlock);

    // registered event handler to execute appendGreenBlock function when green button is clicked
    $('#green-btn').on('click', appendGreenBlock);

    // registered event handler to execute appendYellowBlock function when yellow button is clicked
    $('#yellow-btn').on('click', appendYellowBlock);

    // registered event handler to execute remove function when any block is clicked in blocks div
    $('#blocks').on('click', '.block', removeBlock);
} // end onReady function

function appendRedBlock() { // start appendRedBlock function
    $('#blocks').append('<div class="block red-fill"></div>'); //event handler to add red block
} // end appendRedBlock function

function appendBlueBlock() { // start appendBlueBlock function
    $('#blocks').append('<div class="block blue-fill"></div>'); //event handler to add blue block
} // end appendBlueBlock function

function appendGreenBlock() { // start appendGreenBlock function
    $('#blocks').append('<div class="block green-fill"></div>'); //event handler to add green block
} // end appendGreenBlock function

function appendYellowBlock() { // start appendYellowBlock function
    $('#blocks').append('<div class="block yellow-fill"></div>'); //event handler to add yellow block
} // end appendYellowBlock function

function removeBlock() { //start removeBlock function/event handler
    $(this).remove(); // event handler to remove each block
} //end removeBlock function
