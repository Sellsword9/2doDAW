function updateStats() {
    console.log("updateStats called");
    var text = document.getElementById("statsSum");
    var statsTotal = 0;
    var statElements = document.getElementsByClassName("statInput");
    var statArray = [...statElements];
    statArray.forEach(function (el)
    {
        console.log(el.constructor.name)
        var stat;
        if (el instanceof HTMLTextAreaElement)
        {
            stat = parseInt(el.value);
            if (!isNaN(stat) && !(stat == null))
            {
                statsTotal += stat;
            }
        }
        else
        {
            console.error("stat element not found");
        }
    }); 
    
    if (!(text == null))
    {
        text.innerHTML = "Total stats: " + statsTotal;
    }
    else
    {
        console.error("statsSum element not found");
    }

}

// Actualizar estadísticas
[...document.getElementsByClassName("stat")].forEach(function (element) // Por cada estadística,
{
    console.log("updated");
    element.addEventListener("input", updateStats); // Añadir un listener para cuando se actualice
    // Que llame a la función updateStats
});

// Crear preview
class previewCardModel
{
    Fuerza: number;
    Const: number;
    Dex: number;
    Intel: number;
    Carisma: number;
    Suerte: number;
    // Atributos
    hp:  number; // Vida
    mag: number;    dmg: number;   vc: number; //Ataques
    def: number;    eva: number;   sp: number; //Otros
    //Modificadores (F.Mod(stats) -> atts)
    // Fuerza
    DmgFrz: number = +4;
    DefFrz: number = +2;
    HpFrz:  number = +1;
    SpFrz:  number = -1;
    // Constitución
    DefConst: number = +4;
    HpConst:  number = +2;
    SpConst:  number = +1;
    EvaConst: number = -1;
    // Destreza
    EvaDex: number = +4;
    DmgDex: number = +2;
    SpDex:  number = +1;
    HpDex:  number = -1;
    // Inteligencia
    MagIntel: number = +4;
    SpIntel:  number = +2;
    EvaIntel: number = +1;
    DefIntel: number = -1;
    // Carisma
    VcChar:  number = +4;
    MagChar: number = +1;
    DmgChar: number = +1;
    // Suerte
    EvaSuerte: number = +2;
    VcSuerte:  number = +2;
    SpSuerte:  number = +1;
    DmgSuerte: number = +1; 

    constructor(frz: number, con: number, dex: number, 
                int: number, chr: number, srt: number)
    {
        this.Fuerza = frz; this.Const = con; this.Dex = dex;
        this.Intel = int; this.Carisma = chr; this.Suerte = srt;
        // Asignación atributos


    }
}