var sendbtn = document.getElementById("sendbtn");
var clicked=false;

$(sendbtn).click(function() {
    if (clicked == false) {
        clicked = true;
        if ($("#nome").val() != "" && $("#textarea").val() != "") {
            var data = {
                nome: $("#nome").val(),
                mensagem: $("#textarea").val()
            };

            $.ajax({
                type: "POST",
                url: "add_comment.php",
                data: data,
                success: function (data) {
                    alert(data);
                }
            });

        } else {
            alert("Por favor, preencha os campos :)")
        }
    } else {
        setTimeout(function() {
            clicked = false;
        }, 3000);
    }
});

//limit textarea characters
$(function() {
    $("textarea[maxlength]").bind('input propertychange', function() {
        var maxLength = $(this).attr('maxlength');
        if ($(this).val().length > maxLength) {
            $(this).val($(this).val().substring(0, maxLength));
        }
    })
});

function clear(){
    $("#nome").val("");
    $("#textarea").val("");
}