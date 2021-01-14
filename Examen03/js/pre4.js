function vehiculos(){
    var autos = new Array();

     var AlfaRomero = new Object();
    AlfaRomero.potencia="78 - 170 CV";
    AlfaRomero.consumo="3,4 - 6,2 L/100km";
    AlfaRomero.maletero="270 - 270 L.2";
    AlfaRomero.plazas="4";

    var Alpine = new Object();
    Alpine.potencia="78 - 170 CV";
    Alpine.consumo="3,4 - 6,2 L/100km";
    Alpine.maletero="270 - 270 L.5";
    Alpine.plazas="2";

    var Audi = new Object();
    Audi.potencia="78 - 150 CV";
    Audi.consumo="3,4 - 6,2 L/100km";
    Audi.maletero="270 - 270 L";
    Audi.plazas="2";

    var Bentley = new Object();
    Bentley.potencia="78 - 150 CV";
    Bentley.consumo="3,4 - 6,2 L/100km";
    Bentley.maletero="270 - 270 L";
    Bentley.plazas="2";

    var BMW = new Object();
    BMW.potencia="78 - 150 CV";
    BMW.consumo="3,4 - 6,2 L/100km";
    BMW.maletero="270 - 270 L";
    BMW.plazas="4";

    var Bugatti = new Object();
    Bugatti.potencia="78 - 150 CV";
    Bugatti.consumo="3,4 - 6,2 L/100km";
    Bugatti.maletero="270 - 270 L";
    Bugatti.plazas="4";

    var BYD = new Object();
    BYD.potencia="78 - 150 CV";
    BYD.consumo="3,4 - 6,2 L/100km";
    BYD.maletero="270 - 270 L";
    BYD.plazas="4";
    
    var cadillac = new Object();
    cadillac.potencia="78 - 150 CV";
    cadillac.consumo="3,4 - 6,2 L/100km";
    cadillac.maletero="270 - 270 L";
    cadillac.plazas="4";

    var Caterham = new Object();
    Caterham.potencia="78 - 150 CV";
    Caterham.consumo="3,4 - 6,2 L/100km";
    Caterham.maletero="270 - 270 L";
    Caterham.plazas="4";

    var Chevrolet = new Object();
    Chevrolet.potencia="78 - 150 CV";
    Chevrolet.consumo="3,4 - 6,2 L/100km";
    Chevrolet.maletero="270 - 270 L";
    Chevrolet.plazas="4";

    var Cupra = new Object();
    Cupra.potencia="78 - 150 CV";
    Cupra.consumo="3,4 - 6,2 L/100km";
    Cupra.maletero="270 - 270 L";
    Cupra.plazas="4";

    var Dacia = new Object();
    Dacia.potencia="78 - 150 CV";
    Dacia.consumo="3,4 - 6,2 L/100km";
    Dacia.maletero="270 - 270 L";
    Dacia.plazas="4";

    var Ferrari = new Object();
    Ferrari.potencia="78 - 150 CV";
    Ferrari.consumo="3,4 - 6,2 L/100km";
    Ferrari.maletero="270 - 270 L";
    Ferrari.plazas="4";

    var Fiat = new Object();
    Fiat.potencia="78 - 150 CV";
    Fiat.consumo="3,4 - 6,2 L/100km";
    Fiat.maletero="270 - 270 L";
    Fiat.plazas="4";

    var Ford = new Object();
    Ford.potencia="78 - 150 CV";
    Ford.consumo="3,4 - 6,2 L/100km";
    Ford.maletero="270 - 270 L";
    Ford.plazas="4";
    
    var Honda = new Object();
    Honda.potencia="78 - 150 CV panda";
    Honda.consumo="3,4 - 6,2 L/100km";
    Honda.maletero="270 - 270 L";
    Honda.plazas="2";

    var Hyundai = new Object();
    Hyundai.potencia="78 - 150 CV";
    Hyundai.consumo="3,4 - 6,2 L/100km";
    Hyundai.maletero="270 - 270 L";
    Hyundai.plazas="4";

    var KIA = new Object();
    KIA.potencia="78 - 150 CV";
    KIA.consumo="3,4 - 6,2 L/100km";
    KIA.maletero="270 - 270 L";
    KIA.plazas="4";

    var Jaguar = new Object();
    Jaguar.potencia="78 - 150 CV";
    Jaguar.consumo="3,4 - 6,2 L/100km";
    Jaguar.maletero="270 - 270 L";
    Jaguar.plazas="4";

    var Nissan = new Object();
    Nissan.potencia="78 - 150 CV";
    Nissan.consumo="3,4 - 6,2 L/100km";
    Nissan.maletero="270 - 270 L";
    Nissan.plazas="2";
    
    // unir array con el objeto

    autos.push(AlfaRomero);
    autos.push(Alpine);
    autos.push(Audi);
    autos.push(Bentley);
    autos.push(BMW);
    autos.push(Bugatti);
    autos.push(BYD);
    autos.push(cadillac);
    autos.push(Caterham);
    autos.push(Chevrolet);
    autos.push(Cupra);
    autos.push(Dacia);
    autos.push(Ferrari);
    autos.push(Fiat);
    autos.push(Ford);
    autos.push(Honda);
    autos.push(Hyundai);
    autos.push(KIA);
    autos.push(Jaguar);
    autos.push(Nissan);

    console.log(autos[1].plazas);

}