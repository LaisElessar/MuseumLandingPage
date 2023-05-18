$( document ).ready(function() {

    let navBtn = $('.itens-menu');
    let sobreSessao = $('#sobre');
    let atracoesSessao = $('#atracoes');
    let localSessao = $('#local');
    let ingressoSessao = $('#ingresso');
    
    let scrollTo = '';

    $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'sobre-menu') {
        scrollTo = sobreSessao;
    } else if(btnId == 'atracoes-menu') {
        scrollTo = atracoesSessao;
    } else if(btnId == 'local-menu') {
        scrollTo = localSessao;  
    } else if(btnId == 'ingresso-menu') {
        scrollTo = ingressoSessao;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top
    }, 1500);
    });
});

