// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).on('click', '#submit', function(event){
    event.preventDefault();
    $('table').empty();
    var inputHeight = $('#inputHeight').val();
    var inputWidth = $('#inputWidth').val();
    makeGrid(inputHeight, inputWidth);
});

var bgColor = $('#colorPicker').val();

$(document).on('change', '#colorPicker', function(){
    bgColor = $(this).val();
});

$(document).on('click', 'td', function(){
    $(this).css('background-color', bgColor);
});

function makeGrid(height, width) {
    for (var row = 1; row <= height; row++) {
        $('table').append('<tr class="tr-'+row+'"></tr>');
        for (var col = 1; col <= width; col++) {
            $('.tr-'+row).append('<td class="td-'+col+'"></td>');
        }
    }
// Your code goes here!

}
