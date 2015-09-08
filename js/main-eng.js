window.onload = function () {

    var isPlaying = false;
    var closedByBtn = false;
    var isMenuOpen = false;

    var logo = document.getElementById("logo");
    var btn_start = document.getElementById("btn_start");
    var btn_menu = document.getElementById("btn_menu");
    var btn_sound = document.getElementById("btn_sound");
    var casal_intro = document.getElementById("casal-intro");
    var menu = document.getElementById("menu");
    var menumobile = document.getElementById("menumobile");
    var casal_menu = document.getElementById("casal-menu");
    var anim_hist = document.getElementById("anim_hist");

    var menu_his = document.getElementById("menu_his");
    var menu_dat = document.getElementById("menu_dat");
    var menu_dic = document.getElementById("menu_dic");
    var menu_lis = document.getElementById("menu_lis");
    var menu_con = document.getElementById("menu_con");
    var menu_liv = document.getElementById("menu_liv");

    var mmenu_his = document.getElementById("mmenu_his");
    var mmenu_dat = document.getElementById("mmenu_dat");
    var mmenu_dic = document.getElementById("mmenu_dic");
    var mmenu_lis = document.getElementById("mmenu_lis");
    var mmenu_con = document.getElementById("mmenu_con");
    var mmenu_liv = document.getElementById("mmenu_liv");

    var container = document.getElementsByClassName('container');

    var startDate = new Date();
    var endDate = new Date(2015, 1, 23);
    var msPerDay = 1000*60*60*24;
    //var diff =  Math.floor(startDate.getTime() - endDate.getTime());
    //$('#days').text((-diff/msPerDay).toFixed() - 1);
    $('#days').text("YOU WIN !");

    TweenMax.to(menu, 0, {autoAlpha:0});
    TweenMax.from(logo, 1, {css:{autoAlpha:0}});
    TweenMax.from(logo, 2, {scale: 0, ease: "Expo.easeOut", delay:.5});
    TweenMax.from(casal_intro, 2, {css:{autoAlpha:0}, delay:2.5});
    TweenMax.from(btn_start, 1, {css:{autoAlpha:0}, delay:4});
    TweenMax.to(btn_start, 0.5, {alpha: 0, repeat: -1, yoyo: true, delay:5});

    var soundtrack = new buzz.sound("sounds/soundtrack", {
        formats: ["mp3", "ogg", "aac"],
        preload: true,
        autoplay: false,
        loop: true
    });

    var history_theme = new buzz.sound("sounds/history_theme", {
        formats: ["mp3", "ogg", "aac"],
        preload: true,
        autoplay: false,
        loop: true
    });

    var snd_start = new buzz.sound("sounds/press_start", {
        formats: ["mp3", "ogg", "aac"],
        preload: true,
        autoplay: false,
        loop: false
    });

    var snd_pow = new buzz.sound("sounds/pow", {
        formats: ["mp3", "ogg", "aac"],
        preload: true,
        autoplay: false,
        loop: false
    });

    var snd_livro = new buzz.sound("sounds/midway_gate", {
        formats: ["mp3", "ogg", "aac"],
        preload: true,
        autoplay: false,
        loop: false
    });

    var snd_historia = new buzz.sound("sounds/enter_level", {
        formats: ["mp3", "ogg", "aac"],
        preload: true,
        autoplay: false,
        loop: false
    });

    var snd_confirm = new buzz.sound("sounds/save_menu", {
        formats: ["mp3", "ogg", "aac"],
        preload: true,
        autoplay: false,
        loop: false
    });

    var snd_lista = new buzz.sound("sounds/coin", {
        formats: ["mp3", "ogg", "aac"],
        preload: true,
        autoplay: false,
        loop: false
    });

    var snd_dicas = new buzz.sound("sounds/pipe", {
        formats: ["mp3", "ogg", "aac"],
        preload: true,
        autoplay: false,
        loop: false
    });

    var snd_datalocal = new buzz.sound("sounds/pause", {
        formats: ["mp3", "ogg", "aac"],
        preload: true,
        autoplay: false,
        loop: false
    });

    soundtrack.play();

    btn_sound.onclick = function () {
        closedByBtn = !closedByBtn;
        isPlaying ? closeSoundtrak(true) : openSoundtrak();
    };

    btn_menu.onclick = function () {

        snd_pow.play();

        if (isMenuOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    };

    btn_start.onclick = function () {
        snd_start.play();
        closeIntro();
    };

    menu_his.onclick = function () {
        snd_historia.play();
        loadAnimation();
    };

    mmenu_his.onclick = function () {
        closeMobileMenu();
        snd_historia.play();
        loadAnimation();
    };

    menu_dat.onclick = function () {
        snd_datalocal.play();
        changeSection(this, 'eng/data.php', 'js/data-eng.js');
    };

    mmenu_dat.onclick = function () {
        closeMobileMenu();
        snd_datalocal.play();
        changeSection(this, 'eng/data.php', 'js/data-eng.js');
    };

    menu_dic.onclick = function () {
        snd_dicas.play();
        changeSection(this, 'eng/dicas.php', 'js/dicas.js');
    };

    mmenu_dic.onclick = function () {
        closeMobileMenu();
        snd_dicas.play();
        changeSection(this, 'eng/dicas.php', 'js/dicas.js');
    };

    menu_lis.onclick = function () {
        snd_lista.play();
        changeSection(this, 'presentes.php', '');
    };

    mmenu_lis.onclick = function () {
        closeMobileMenu();
        snd_lista.play();
        changeSection(this, 'presentes.php', '');
    };

    menu_con.onclick = function () {
        snd_confirm.play();
        changeSection(this, 'eng/confirm.php', 'js/confirm.js');
    };

    mmenu_con.onclick = function () {
        closeMobileMenu();
        snd_confirm.play();
        changeSection(this, 'eng/confirm.php', 'js/confirm.js');
    };

    menu_liv.onclick = function () {
        snd_livro.play();
        changeSection(this, 'eng/livro.php', 'js/livro-min.js');
    };

    mmenu_liv.onclick = function () {
        closeMobileMenu();
        snd_livro.play();
        changeSection(this, 'eng/livro.php', 'js/livro-min.js');
    };

    var closeIntro = function() {
        openSoundtrak();
        closeMobileMenu();
        TweenMax.to(btn_start, 0, {alpha:1});
        //TweenMax.killTweensOf(btn_start);
        //TweenMax.to(logo, 1, {css:{marginTop:40}, ease: "Expo.easeOut", delay:2, onComplete: emptyIntro});
        TweenMax.to(logo, 0.5, {scale: 0, ease: "Expo.easeOut", delay:1.5, onComplete: emptyIntro});
        TweenMax.to(casal_intro, 0.5, {scale: 0, ease: "Expo.easeOut", delay:1});
        TweenMax.to(btn_start, 0.5, {alpha:0, delay:.5});
    };

    var emptyIntro = function(){
        $("#intro").empty();
        openMenu();
    };

    var openMenu = function(){
        TweenMax.to(menu, 1, {autoAlpha:1, display:"block"});
        TweenMax.to(btn_menu, 0.4, {autoAlpha: 1, display:"block"});
        TweenMax.to(btn_sound, 0.4, {autoAlpha: 1, display:"block"});
    };

    var changeSection = function(button, page, script) {

        //sounds
        openSoundtrak();
        history_theme.fadeTo(0, 500, function(){this.stop();});

        unloadContent();
        TweenMax.set(container, {autoAlpha:0});
        TweenMax.set(anim_hist, {display:"none"});
        TweenMax.from(button, .5, {
            boxShadow: "0px 0px 24px 6px white",
            backgroundColor:"white",
            color:"#999"
        });
        $('.container').load(page, function(){
            $.getScript(script);
            TweenMax.to(container, 1, {autoAlpha:1, delay:.5})
        });
    };

    var loadAnimation = function () {

        //sound
        closeSoundtrak();
        history_theme.fadeTo(10, 500, function(){this.play();});


        unloadContent();
        TweenMax.set(anim_hist, {display:"block"});
    };

    function closeMobileMenu() {
        isMenuOpen = false;
        TweenMax.to(mmenu_liv, 0.2, {autoAlpha: 0, scale:.9, display: "none", delay: 0});
        TweenMax.to(mmenu_con, 0.2, {autoAlpha: 0, scale:.9, display: "none", delay: 0.1});
        TweenMax.to(mmenu_lis, 0.2, {autoAlpha: 0, scale:.9, display: "none", delay: 0.2});
        TweenMax.to(mmenu_dic, 0.2, {autoAlpha: 0, scale:.9, display: "none", delay: 0.3});
        TweenMax.to(mmenu_dat, 0.2, {autoAlpha: 0, scale:.9, display: "none", delay: 0.4});
        TweenMax.to(mmenu_his, 0.2, {autoAlpha: 0, scale:.9, display: "none", delay: 0.5});
    }

    function openMobileMenu() {
        isMenuOpen = true;
        TweenMax.set(menumobile, {display:"block"});
        TweenMax.to(mmenu_liv, 0.2, {autoAlpha:1, scale:1, display:"block", delay:0});
        TweenMax.to(mmenu_con, 0.2, {autoAlpha:1, scale:1, display:"block", delay:0.1});
        TweenMax.to(mmenu_lis, 0.2, {autoAlpha:1, scale:1, display:"block", delay:0.2});
        TweenMax.to(mmenu_dic, 0.2, {autoAlpha:1, scale:1, display:"block", delay:0.3});
        TweenMax.to(mmenu_dat, 0.2, {autoAlpha:1, scale:1, display:"block", delay:0.4});
        TweenMax.to(mmenu_his, 0.2, {autoAlpha:1, scale:1, display:"block", delay:0.5});
    }

    function unloadContent(){
        $('.container').html("");
    }

    function openSoundtrak() {
        if (!isPlaying && !closedByBtn) {
            soundtrack.fadeTo(15, 1000, function(){this.play();isPlaying = true;});
            $('#btn_sound').attr("src", "img/musica_on.png" );
        }
    }

    function closeSoundtrak(closeByButton) {
        if (isPlaying) {
            soundtrack.fadeTo(0, 500, function(){this.stop();isPlaying = false;});
            $('#btn_sound').attr("src", "img/musica_off.png" );
        }
        if (closeByButton) {
            closedByBtn = true
        }
    }
};
