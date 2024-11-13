$(document).ready(function(){
    console.log('test')
    $("#reveal-answer").on("click",function(e){
        e.preventDefault();
        $("#answer").show();
    })
})