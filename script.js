function sim() {
    alert("VOCÊ ACEITOU DA PIZZAZINHA HOJEEEEE:) ÁS 20H30 VIU");
    // redireciona para um URL apos aceitar
    location.href="https://www.google.com/maps/place/Nova+Sat%C3%A9lite+Esfiharia+e+Pizzaria/@-23.703444,-46.6893455,20.33z/data=!4m9!1m2!2m1!1spadaria+satelite!3m5!1s0x94ce4feec187e35b:0x346ee403c2a56314!8m2!3d-23.7032401!4d-46.6888661!16s%2Fg%2F11t72t143r";
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
