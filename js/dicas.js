var ondeficar = document.getElementById('ondeficar');
var ondecomer = document.getElementById('ondecomer');
var ondeprod = document.getElementById('ondeprod');

var eat = document.getElementById('eat');
var stay = document.getElementById('stay');
var prod = document.getElementById('prod');


$(ondeficar).click(function(){
    hideAllAndShowThis(stay);
});

$(ondecomer).click(function(){
    hideAllAndShowThis(eat);
});

$(ondeprod).click(function(){
    hideAllAndShowThis(prod);
});

setTimeout(redrawPage, 400);

function hideAllAndShowThis(section) {
    TweenMax.to(eat, 0.3, {autoAlpha:0, display:"none"});
    TweenMax.to(stay, 0.3, {autoAlpha:0, display:"none"});
    TweenMax.to(prod, 0.3, {autoAlpha:0, display:"none"});
    //TweenMax.to(maq, 0.5, {autoAlpha:0});
    TweenMax.to(section, 0.5, {autoAlpha:1, display:"block", delay:0.3, onComplete: redrawPage});
}

//function used to reset scrollbar
jQuery.fn.redraw = function() {
    return this.hide(0, function() {
        $(this).show();
    });
};

function redrawPage() {
    $("html").redraw();
}

