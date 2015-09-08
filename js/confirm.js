var sendbtn = document.getElementById("sendbtn");

$(sendbtn).click(function() {
    //$("#form").submit();

    var data = {
        convidado: $("#convidado").val(),
        telefone: $("#telefone").val(),
        email: $("#email").val(),
        acompanhantes: $("#textarea").val()
    };

    $.ajax({
        type: "POST",
        url: "email.php",
        data: data,
        success: function(){
            //$('.success').fadeIn(1000);
            alert("Mensagem enviada! Entraremos em contato :)")
        }
    });
});