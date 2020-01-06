$(document).ready(function(){
    $(".insertingRowBtn").click(function(){
        $("#dynamicRowsWrapper").append("<tr><td>"+ $(".daysSelectors").children("option:selected").val() +"</td> \
        <td><div class='timepickerInputWrapper'><div class='timeSelectorWrapper'><span class='closeTimePicker'>x</span></div><input type='text' class='form-control input-sm timepickerInput'></div></td> \
        <td>XXXXXXXXXX</td></tr>");
    });
    $("#dynamicRowsWrapper").on('click','.closeTimePicker',function(){
        $(this).parent(".timeSelectorWrapper").slideUp();
    });
});