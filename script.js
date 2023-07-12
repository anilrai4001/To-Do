$('#add').click(function(){
    $('input').toggle();
})

$('input').keypress(function(e){
    let inputData=$(this).val();
    if(e.which===13){
        $('ul').append(`<li><span>X</span>${inputData}</li>`);
        $(this).val('');
    }
})

$('ul').on('click','li', function (){
    $(this).toggleClass('completed');
    $(this).children('span').toggleClass('completed');
})

$('ul').on('click','span',function (e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    e.stopPrapagation();
})
