<link rel="stylesheet" href="css/confirm-min.css">
<div id="title" class="row">Confirme sua presen&ccedil;a !</div>
<div id="contents" class="row">
    <form action="email.php" class="form-horizontal">
        <div class="form-group">
            <label class="col-md-4 control-label" for="convidado">Nome do convidado:</label>
            <div class="col-md-5">
                <input id="convidado" name="convidado" type="text" class="form-control input-md">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-4 control-label" for="telefone">Telefone:</label>
            <div class="col-md-5">
                <input id="telefone" name="telefone" type="text" class="form-control input-md">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-4 control-label" for="email">Email:</label>
            <div class="col-md-5">
                <input id="email" name="email" type="text" class="form-control input-md">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-4 control-label" for="textarea">Nome do(s) acompanhante(s):</label>
            <div class="col-md-5">
                <textarea class="form-control" id="textarea" name="textarea"></textarea>
            </div>
        </div>
        <div class="form-group">
            <div class="col-md-5 pull-right">
                <img id="sendbtn" src="img/button.png">
            </div>
        </div>
    </form>
</div>