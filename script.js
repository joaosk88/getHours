function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    //var hora = 1; // Descomente essa linha para testar a hora fixa
    
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/manha.png';
        document.body.style.background ='#B77831'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'img/tarde.png';
        document.body.style.background = '#855458'
    } else {
        // Boa noite
        img.src = 'img/noite.png';
        document.body.style.background = '#11141A'
    }
}
