$(document).ready(function(){
    $(".insertingRowBtn").click(function(){
        $("#dynamicRowsWrapper").append("<tr><td>"+ $(".daysSelectors").children("option:selected").val() +"</td> \
        <td> \
        <div class='timepickerInputWrapper'> \
        <div class='timeSelectorWrapper'>\
            <div class='row controlloersWrapper'>\
                <div class='col-xs-4 form-group ControllerWrapper MintsWrapper'>\
                    <label class='timePickerLabel'>Mintues</label>\
                    <span class='mintsIncrease timePickerController increaseController'>+</span>\
                    <input  class='mintsWrapper timePickerInput' value='0'>\
                    <span class='mintsDecrease timePickerController decreaseController'>-</span>\
                </div> \
                <div class='col-xs-4 form-group ControllerWrapper HoursWrapper'> \
                    <label class='timePickerLabel'>Hours</label>\
                    <span class='hoursIncreas timePickerController increaseController'>+</span> \
                    <input class='hoursWrapper timePickerInput' value='1'> \
                    <span class='hoursDecrease timePickerController decreaseController'>-</span> \
                </div>\
                <div class='col-xs-4 form-group  ControllerWrapper TimeTypeWrapper'> \
                    <label class='timePickerLabel'>Type</label>\
                    <span class='btn btn-xs btn-default timeTypeOption selectedOption' style='margin-bottom:25px;' data-value='PM'>PM</span>\
                    <span class='btn btn-xs btn-default timeTypeOption' data-value='AM'>AM</span>\
                </div>\
            </div>\
            <div >\
                <button class='btn btn-xs btn-success registerTime'>OK!</button>\
                <button class='btn btn-xs btn-danger cancelTime'>Cancel</button>\
            </div>\
        </div>\
        <input type='text' class='form-control input-sm timepickerInput'>\
    </div>\
        </tr>");
    });
    $("#dynamicRowsWrapper").on('focus','.timepickerInput',function(){
        $(this).siblings(".timeSelectorWrapper").slideDown();
        $(this).parent(".timepickerInputWrapper").parent("td").parent("tr").siblings("tr").children("td").children(".timepickerInputWrapper").children(".timeSelectorWrapper").slideUp();
    });
    $("#dynamicRowsWrapper").on('click','.timeTypeOption',function(){
        $(this).addClass("selectedOption").siblings(".timeTypeOption").removeClass("selectedOption");
    });
    $("#dynamicRowsWrapper").on('click','.cancelTime',function(){
        $(this).parent("div").parent(".timeSelectorWrapper").slideUp();
    });

    $("#dynamicRowsWrapper").on('click','.registerTime',function(){
        $(this).parent("div").parent(".timeSelectorWrapper").slideUp();
        let timeInput = $(this).parent("div").parent(".timeSelectorWrapper").siblings(".timepickerInput"),
            hours = $(this).parent("div").siblings(".controlloersWrapper").children(".HoursWrapper").children(".hoursWrapper").val(),
            mints = $(this).parent("div").siblings(".controlloersWrapper").children(".MintsWrapper").children(".mintsWrapper").val(),
            type = $(this).parent("div").siblings(".controlloersWrapper").children(".TimeTypeWrapper").children(".selectedOption").data('value');
            if (hours > 0 && hours < 13 ) {
                if (parseInt(mints) > -1 && parseInt(mints) < 61) {
                    timeInput.val( mints + " : " + hours + " " + type );
                }
            }
    });
    $("#dynamicRowsWrapper").on('click','.hoursIncreas',function(){
        if (  parseInt($(this).siblings(".hoursWrapper").val()) <= 11 ){
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