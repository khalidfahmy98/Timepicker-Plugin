$(document).ready(function(){
    $(".insertingRowBtn").click(function(){
        $("#dynamicRowsWrapper").append("<tr><td>"+ $(".daysSelectors").children("option:selected").val() +"</td> \
        <td> \
        <div class='timepickerInputWrapper'>\
            <div class='timeSelectorWrapper'>\
                <span class='closeTimePicker'>x</span>\
                <div class='row controlloersWrapper'>\
                    <div class='col-xs-6 form-group MintsWrapper'>\
                        <span class='mintsIncrease'>+</span>\
                        <input  class='mintsWrapper' value='0'>\
                        <span class='mintsDecrease'>-</span>\
                    </div> \
                    <div class='col-xs-6 form-group HoursWrapper'> \
                        <span class='hoursIncreas'>+</span> \
                        <input class='hoursWrapper' value='1'> \
                        <span class='hoursDecrease'>-</span> \
                    </div>\
                </div>\
            </div>\
            <input type='text' class='form-control input-sm timepickerInput'>\
        </div>\
    </td> \
       </tr>");
    });
    $("#dynamicRowsWrapper").on('focus','.timepickerInput',function(){
        $(this).siblings(".timeSelectorWrapper").slideDown();
    });
    $("#dynamicRowsWrapper").on('click','.closeTimePicker',function(){
        $(this).parent(".timeSelectorWrapper").slideUp();
        let timeInput = $(this).parent(".timeSelectorWrapper").siblings(".timepickerInput"),
            hours = $(this).siblings(".controlloersWrapper").children(".HoursWrapper").children(".hoursWrapper").val(),
            mints = $(this).siblings(".controlloersWrapper").children(".MintsWrapper").children(".mintsWrapper").val();
            if (hours > 0 && hours < 25 ) {
                if (parseInt(mints) > -1 && parseInt(mints) < 61) {
                    timeInput.val( mints + " : " + hours );
                }
            }
    });
    $("#dynamicRowsWrapper").on('click','.hoursIncreas',function(){
        if (  parseInt($(this).siblings(".hoursWrapper").val()) <= 23 ){
            $(this).siblings(".hoursWrapper").val( parseInt($(this).siblings(".hoursWrapper").val())+1);
        }
    });
    $("#dynamicRowsWrapper").on('click','.hoursDecrease',function(){
        if (  parseInt($(this).siblings(".hoursWrapper").val()) >= 2 ){
            $(this).siblings(".hoursWrapper").val( parseInt($(this).siblings(".hoursWrapper").val())-1);
        }
    });
    $("#dynamicRowsWrapper").on('click','.mintsIncrease',function(){
        if (  parseInt($(this).siblings(".mintsWrapper").val()) <= 59 ){
            $(this).siblings(".mintsWrapper").val( parseInt($(this).siblings(".mintsWrapper").val())+1);
        }
    });
    $("#dynamicRowsWrapper").on('click','.mintsDecrease',function(){
        if (  parseInt($(this).siblings(".mintsWrapper").val()) >= 1 ){
            $(this).siblings(".mintsWrapper").val( parseInt($(this).siblings(".mintsWrapper").val())-1);
        }
    });

});