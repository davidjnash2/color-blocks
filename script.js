$(document).ready(onReady); // first line load (boilerplate, it seems?)
console.log('🟥 🟦 🟩 🟨');

function onReady (){

    $('#red-btn').on('click', appendRedBlock);

    $('#blue-btn').on('click', appendBlueBlock);

    $('#green-btn').on('click', appendGreenBlock);

    $('#yellow-btn').on('click', appendYellowBlock);

    $('#blocks').on('click', '.block', removeBlock);

}




function appendRedBlock() {
    $('#blocks').append('<div class="block red-fill"></div>');
}

function appendBlueBlock() {
    $('#blocks').append('<div class="block blue-fill"></div>');
}

function appendGreenBlock() {
    $('#blocks').append('<div class="block green-fill"></div>');
}

function appendYellowBlock() {
    $('#blocks').append('<div class="block yellow-fill"></div>');
}

function removeBlock() {
    $(this).remove();
}
