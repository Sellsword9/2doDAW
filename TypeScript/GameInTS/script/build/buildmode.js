var _a, _b;
var previewCardModel = /** @class */ (function () {
    function previewCardModel(frz, con, dex, int, chr, srt, nombre, descr) {
        this.PowerType = "";
        //Modificadores (F.Mod(stats) -> atts)
        // Fuerza
        /**+4 */
        this.DmgFrz = +4;
        /**+2 */
        this.DefFrz = +2;
        /**+1 */
        this.HpFrz = +1;
        /**-1 */
        this.SpFrz = -1;
        // Constitución
        /**+4 */
        this.DefConst = +4;
        /**+2 */
        this.HpConst = +2;
        /**+1 */
        this.SpConst = +1;
        /**-1 */
        this.EvaConst = -1;
        // Destreza
        /**+4 */
        this.EvaDex = +4;
        /**+2 */
        this.DmgDex = +2;
        /**+1 */
        this.SpDex = +1;
        /**-1 */
        this.HpDex = -1;
        // Inteligencia
        /**+4 */
        this.MagIntel = +4;
        /**+2 */
        this.SpIntel = +2;
        /**-1 */
        this.DefIntel = -1;
        // Carisma
        /**+6 */
        this.VcChar = +4;
        /**+1 */
        this.EvaChar = +1;
        /**+1 */
        this.DefChar = +1;
        /**-1 */
        this.MagChar = -1;
        /**-1 */
        this.DmgChar = -1;
        // Suerte
        /**+2 */
        this.EvaSuerte = +2;
        /**+2 */
        this.VcSuerte = +2;
        /**+2 */
        this.SpSuerte = +1;
        /**+1 */
        this.DmgSuerte = +1;
        this.flavorNombre = nombre;
        this.flavorDescr = descr;
        this.Fuerza = frz;
        this.Const = con;
        this.Dex = dex;
        this.Intel = int;
        this.Carisma = chr;
        this.Suerte = srt;
        // Asignación atributos
        this.calcularAtributos();
        this.calcularTipo();
    }
    previewCardModel.prototype.calcularAtributos = function () {
        // Hp
        this.hp = 2 * (this.HpConst * this.Const +
            this.HpDex * this.Dex + // +2 -1 +2 = 3 (6)
            this.HpFrz * this.Fuerza);
        // Dmg
        this.dmg =
            this.DmgFrz * this.Fuerza + // +4 -1 +1 +2 = 6
                this.DmgChar * this.Carisma +
                this.DmgSuerte * this.Suerte +
                this.DmgDex * this.Dex;
        // Mag
        this.mag =
            this.MagIntel * this.Intel + // +5 -1 = 4
                this.MagChar * this.Carisma;
        // Def
        this.def =
            this.DefFrz * this.Fuerza + //+4 +2 -1 +1 = 6
                this.DefConst * this.Const +
                this.DefIntel * this.Intel +
                this.DefChar * this.Carisma;
        // Eva
        this.eva =
            this.EvaDex * this.Dex + // +4 -1 +1 +2 = 6 
                this.EvaConst * this.Const +
                this.EvaChar * this.Carisma +
                this.EvaSuerte * this.Suerte;
        // Sp
        this.sp =
            this.SpDex * this.Dex + // +1 +1 +2 +2 -1 = 5
                this.SpConst * this.Const +
                this.SpIntel * this.Intel +
                this.SpSuerte * this.Suerte +
                this.SpFrz * this.Fuerza;
        // Vc
        this.vc =
            this.VcChar * this.Carisma + // +6 +2 = 8
                this.VcSuerte * this.Suerte;
    };
    previewCardModel.prototype.calcularTipo = function () {
        var total = this.Fuerza + this.Const + this.Dex
            + this.Intel + this.Carisma + this.Suerte;
        this.PowerType =
            this.Carisma < 0 || this.Suerte < 0 || this.Intel < 0
                || this.Dex < 0 || this.Const < 0 || this.Fuerza < 0 ?
                "Paradójico (No válido)" :
                this.hp < 1 ? "Experimento fallido (No válido)" :
                    (total >= 100 && total <= 120) ? "Mítico"
                        : (total >= 81 && total <= 99) ? "Sobrenatural"
                            : (total >= 61 && total <= 80) ? "Competente+"
                                : (total <= 60 && this.Fuerza > 25) ? "Bárbaro"
                                    : (total <= 60 && this.Const > 25) ? "Caballero"
                                        : (total <= 60 && this.Dex > 25) ? "Espectro"
                                            : (total <= 60 && this.Intel > 25) ? "Hechicero"
                                                : (total <= 60 && this.Carisma > 25) ? "Bardo"
                                                    : (total <= 60 && this.Suerte > 25) ? "Proscrito"
                                                        : (total <= 25) ? "Civil" :
                                                            (total <= 60) ? "Competente" : "No válido";
    };
    return previewCardModel;
}());
function updatePreview() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var PreviewDmg = document.getElementById("cpDmg");
    var PreviewHp = document.getElementById("cpHp");
    var PreviewMag = document.getElementById("cpMag");
    var PreviewDef = document.getElementById("cpDef");
    var PreviewEva = document.getElementById("cpEva");
    var PreviewSp = document.getElementById("cpSp");
    var PreviewVc = document.getElementById("cpVc");
    var PreviewType = document.getElementById("cpType");
    var PreviewName = document.getElementById("cpName");
    var PreviewDescr = document.getElementById("cpDescription");
    var PreviewModFrz = document.getElementById("cpModFuerza");
    var PreviewModCon = document.getElementById("cpModConstitucion");
    var PreviewModDex = document.getElementById("cpModDestreza");
    var PreviewModInt = document.getElementById("cpModInteligencia");
    var PreviewModCar = document.getElementById("cpModCarisma");
    var PreviewModSue = document.getElementById("cpModSuerte");
    var FuerzaStat = parseInt((_a = document.getElementById("FuerzaStat")) === null || _a === void 0 ? void 0 : _a.value);
    var ConstStat = parseInt((_b = document.getElementById("ConstitucionStat")) === null || _b === void 0 ? void 0 : _b.value);
    var DexStat = parseInt((_c = document.getElementById("DestrezaStat")) === null || _c === void 0 ? void 0 : _c.value);
    var IntelStat = parseInt((_d = document.getElementById("InteligenciaStat")) === null || _d === void 0 ? void 0 : _d.value);
    var CarismaStat = parseInt((_e = document.getElementById("CarismaStat")) === null || _e === void 0 ? void 0 : _e.value);
    var SuerteStat = parseInt((_f = document.getElementById("SuerteStat")) === null || _f === void 0 ? void 0 : _f.value);
    var nombre = (_g = document.getElementById("cardName")) === null || _g === void 0 ? void 0 : _g.value;
    var descr = (_h = document.getElementById("cardDescription")) === null || _h === void 0 ? void 0 : _h.value;
    var currentPreview = new previewCardModel(FuerzaStat, ConstStat, DexStat, IntelStat, CarismaStat, SuerteStat, nombre, descr);
    if (currentPreview && PreviewDmg && PreviewHp
        && PreviewMag && PreviewDef && PreviewEva
        && PreviewSp && PreviewVc && PreviewType
        && PreviewName && PreviewDescr
        && PreviewModCar && PreviewModCon &&
        PreviewModInt && PreviewModFrz && PreviewModSue
        && PreviewModDex) {
        PreviewDmg.innerHTML = currentPreview.dmg + " dmg";
        PreviewDef.innerHTML = currentPreview.def + " def";
        PreviewEva.innerHTML = currentPreview.eva + " eva";
        PreviewHp.innerHTML = currentPreview.hp + " hp";
        PreviewMag.innerHTML = currentPreview.mag + " mag";
        PreviewSp.innerHTML = currentPreview.sp + " sp";
        PreviewVc.innerHTML = currentPreview.vc + " vc";
        PreviewType.innerHTML = currentPreview.PowerType;
        PreviewName.innerHTML = currentPreview.flavorNombre;
        PreviewDescr.innerHTML = currentPreview.flavorDescr;
        // Calcular mods
        PreviewModFrz.innerHTML = "Potencia: " + (Math.floor(currentPreview.Fuerza / 5) - 1);
        PreviewModCon.innerHTML = "Resistencia: " + (Math.floor(currentPreview.Const / 5) - 1);
        PreviewModDex.innerHTML = "Reflejos: " + (Math.floor(currentPreview.Dex / 5) - 1);
        PreviewModInt.innerHTML = "Estrategia: " + (Math.floor(currentPreview.Intel / 5) - 1);
        PreviewModCar.innerHTML = "Intimidación: " + (Math.floor(currentPreview.Carisma / 5) - 1);
        PreviewModSue.innerHTML = "Suerte: " + (Math.floor(currentPreview.Suerte / 5) - 1);
    }
    else {
        console.error("Preview element not found");
    }
}
function updateStats() {
    // console.log("updateStats called");
    var text = document.getElementById("statsSum");
    var statsTotal = 0;
    var statElements = document.getElementsByClassName("statInput");
    var statArray = [];
    for (var i = 0; i < statElements.length; i++) {
        statArray[i] = statElements[i];
    }
    statArray.forEach(function (el) {
        // console.log(el.constructor.name)
        var stat;
        if (el instanceof HTMLTextAreaElement) {
            stat = parseInt(el.value);
            if (!isNaN(stat) && !(stat == null)) {
                statsTotal += stat;
            }
        }
        else {
            console.error("stat element not found");
        }
    });
    if (!(text == null)) {
        text.innerHTML = "Total stats: " + statsTotal;
        updatePreview();
    }
    else {
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
}
;
(_a = document.getElementById("cardName")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", updateStats);
(_b = document.getElementById("cardDescription")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", updateStats);
