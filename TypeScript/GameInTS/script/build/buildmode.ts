class previewCardModel
{
    flavorNombre: string;
    flavorDescr: string;
    PowerType: string = "";
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
    /**+4 */
    readonly DmgFrz: number = +4;
    /**+2 */
    readonly DefFrz: number = +2;
    /**+1 */
    readonly HpFrz:  number = +1;
    /**-1 */
    readonly SpFrz:  number = -1;
    // Constitución
    /**+4 */
    readonly DefConst: number = +4;
    /**+2 */
    readonly HpConst:  number = +2;
    /**+1 */
    readonly SpConst:  number = +1;
    /**-1 */
    readonly EvaConst: number = -1;
    // Destreza
    /**+4 */
    readonly EvaDex: number = +4;
    /**+2 */
    readonly DmgDex: number = +2;
    /**+1 */
    readonly SpDex:  number = +1;
    /**-1 */
    readonly HpDex:  number = -1;
    // Inteligencia
    /**+4 */
    readonly MagIntel: number = +4;
    /**+2 */
    readonly SpIntel:  number = +2;
    /**-1 */
    readonly DefIntel: number = -1;
    // Carisma
    /**+6 */
    readonly VcChar:  number = +4;
    /**+1 */
    readonly EvaChar: number = +1;
    /**+1 */
    readonly DefChar:  number = +1;
    /**-1 */
    readonly MagChar: number = -1;
    /**-1 */
    readonly DmgChar: number = -1;
    // Suerte
    /**+2 */
    readonly EvaSuerte: number = +2;
    /**+2 */
    readonly VcSuerte:  number = +2;
    /**+2 */
    readonly SpSuerte:  number = +1;
    /**+1 */
    readonly DmgSuerte: number = +1; 

    constructor(frz: number, con: number, dex: number, 
                int: number, chr: number, srt: number)
    {
        this.Fuerza = frz; this.Const = con; this.Dex = dex;
        this.Intel = int; this.Carisma = chr; this.Suerte = srt;
        // Asignación atributos
        this.calcularAtributos();
        this.calcularTipo();
    }
    calcularAtributos()
    {
        // Hp
        this.hp = 2*(
        this.HpConst * this.Const+
        this.HpDex * this.Dex+     // +2 -1 +2 = 3 (6)
        this.HpFrz * this.Fuerza);
        // Dmg
        this.dmg = 
        this.DmgFrz * this.Fuerza+  // +4 -1 +1 +2 = 6
        this.DmgChar * this.Carisma+
        this.DmgSuerte * this.Suerte+
        this.DmgDex * this.Dex;
        // Mag
        this.mag =
        this.MagIntel * this.Intel+ // +5 -1 = 4
        this.MagChar * this.Carisma;
        // Def
        this.def =
        this.DefFrz * this.Fuerza+ //+4 +2 -1 +1 = 6
        this.DefConst * this.Const+
        this.DefIntel * this.Intel+
        this.DefChar * this.Carisma;
        // Eva
        this.eva =
        this.EvaDex * this.Dex+ // +4 -1 +1 +2 = 6 
        this.EvaConst * this.Const+
        this.EvaChar * this.Carisma+
        this.EvaSuerte * this.Suerte;
        // Sp
        this.sp =
        this.SpDex * this.Dex+ // +1 +1 +2 +2 -1 = 5
        this.SpConst * this.Const+
        this.SpIntel * this.Intel+
        this.SpSuerte * this.Suerte+
        this.SpFrz * this.Fuerza;
        // Vc
        this.vc =
        this.VcChar * this.Carisma+ // +6 +2 = 8
        this.VcSuerte * this.Suerte;
    }
    calcularTipo()
    {
        var total = this.Fuerza + this.Const + this.Dex
        + this.Intel + this.Carisma + this.Suerte;
        this.PowerType =
        this.Carisma < 0 || this.Suerte < 0 || this.Intel < 0 
        || this.Dex < 0 || this.Const < 0 || this.Fuerza < 0 ? 
        "Paradójico (No válido)":
        this.hp < 1 ? "Experimento fallido (No válido)":
        (total >= 100 && total <= 120) ? "Mítico"
        : (total >= 81 && total <= 99) ? "Sobrenatural"
        : (total >= 61 && total <= 80) ? "Competente+"
        : (total <= 60 && this.Fuerza > 25) ? "Bárbaro"
        : (total <= 60 && this.Const > 25) ? "Caballero"
        : (total <= 60 && this.Dex > 25) ? "Espectro"
        : (total <= 60 && this.Intel > 25) ? "Hechicero"
        : (total <= 60 && this.Carisma > 25) ? "Bardo"
        : (total <= 60 && this.Suerte > 25) ? "Proscrito"
        : (total <= 25) ? "Civil": 
        (total <= 60) ? "Competente" : "No válido";  
    }
}

function updatePreview()
{
    var PreviewDmg = document.getElementById("cpDmg");
    var PreviewHp = document.getElementById("cpHp");
    var PreviewMag = document.getElementById("cpMag");
    var PreviewDef = document.getElementById("cpDef");
    var PreviewEva = document.getElementById("cpEva");
    var PreviewSp = document.getElementById("cpSp");
    var PreviewVc = document.getElementById("cpVc");
    var PreviewType = document.getElementById("cpType");

    var FuerzaStat = parseInt((document.getElementById("FuerzaStat") as HTMLTextAreaElement)?.value);
    var ConstStat = parseInt((document.getElementById("ConstitucionStat") as HTMLTextAreaElement)?.value);
    var DexStat = parseInt((document.getElementById("DestrezaStat") as HTMLTextAreaElement)?.value);
    var IntelStat = parseInt((document.getElementById("InteligenciaStat") as HTMLTextAreaElement)?.value);
    var CarismaStat = parseInt((document.getElementById("CarismaStat") as HTMLTextAreaElement)?.value);
    var SuerteStat = parseInt((document.getElementById("SuerteStat") as HTMLTextAreaElement)?.value);
    
    var currentPreview = new previewCardModel(
        FuerzaStat, ConstStat, DexStat, 
        IntelStat, CarismaStat, SuerteStat);
    
    if (currentPreview && PreviewDmg && PreviewHp 
        && PreviewMag && PreviewDef && PreviewEva 
        && PreviewSp && PreviewVc && PreviewType)
    {
        PreviewDmg.innerHTML = currentPreview.dmg + "dmg";
        PreviewDef.innerHTML = currentPreview.def + "def";
        PreviewEva.innerHTML = currentPreview.eva + "eva";
        PreviewHp.innerHTML = currentPreview.hp + "hp";
        PreviewMag.innerHTML = currentPreview.mag + "mag";
        PreviewSp.innerHTML = currentPreview.sp + "sp";
        PreviewVc.innerHTML = currentPreview.vc + "vc";
        PreviewType.innerHTML = currentPreview.PowerType;
    }
    else
    {
        console.error("Preview element not found");
    }
}
function updateStats() 
{
    // console.log("updateStats called");
    var text = document.getElementById("statsSum");
    var statsTotal = 0;
    var statElements = document.getElementsByClassName("statInput");
    var statArray: Element[] = [];
    for (var i = 0; i < statElements.length; i++)
    {
        statArray[i] = statElements[i];
    }
    statArray.forEach(function (el)
    {
        // console.log(el.constructor.name)
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
       updatePreview();
    }
    else
    {
        console.error("statsSum element not found");
    }

}

var elements = document.getElementsByClassName("stat");
// Actualizar estadísticas
for (var i = 0; i < document.getElementsByClassName("stat").length; i++) // Por cada estadística,
{
    //console.log("updated");
    elements[i].addEventListener("input", updateStats); // Añadir un listener para cuando se actualice
    // Que llame a la función updateStats
        // Esta a su vez, llama a la función updatePreview
};
