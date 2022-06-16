window.onload = function() {
    let kazkoksZodis = "turnyras";

    isvestiZodiPoRaide(kazkoksZodis);
    isvestiBruksniukus();
    isvestiZodiPoRaide("kamuolys");
    isvestiBruksniukus();
    console.log(apsukaZodi(kazkoksZodis));
    isvestiBruksniukus();
    console.log(apsukaZodi("baravykas"));
    isvestiBruksniukus();
    
    
    // Konvertuoju skaičių į tekstinį kintamąjį, jį apsuka, tada konvertuoju atgal į skaičių ir tą apsuktą skaičių panaudoju skaičiavimuose
    let x = 2147;
    x = x.toString();
    x = apsukaZodi(x);
    x = Number.parseInt(x);

    let suma = x + 1000;
    console.log(suma);

    // Dar vienas pavyzdys su žodžio sulipinimu iš šonų
    isvestiBruksniukus();
    console.log(sulipinaZodiIsSonu("tvoros"));

    

}


function isvestiBruksniukus() {
    console.log("------------------");
}


function isvestiZodiPoRaide(zodis) {
    for (let i = 0; i < zodis.length; i++) {
        console.log(zodis[i]);
    }
}



function apsukaZodi(zodis) {
    let naujasZodis = "";
    for (let i = zodis.length - 1; i >= 0; i--) {
        naujasZodis += zodis[i];
    }
    return naujasZodis
}



function sulipinaZodiIsSonu(zodis) {
    let naujasZodis = "";
    for (let i = 0; i < zodis.length / 2; i++) {
        naujasZodis += zodis[i];
        naujasZodis += zodis[zodis.length - 1 - i];
    }
    return naujasZodis;
}