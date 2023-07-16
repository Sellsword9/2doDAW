var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var previewCardModel = /** @class */ (function () {
    function previewCardModel(frz, con, dex, int, chr, srt) {
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
        this.Fuerza = frz;
        this.Const = con;
        this.Dex = dex;
        this.Intel = int;
        this.Carisma = chr;
        this.Suerte = srt;
        // Asignación atributos
        this.calcularAtributos();
    }
    previewCardModel.prototype.calcularAtributos = function () {
        // Hp
        this.hp = 2 *
            this.HpConst * this.Const +
            this.HpDex * this.Dex + // +2 -1 +2 = 3 (6)
            this.HpFrz * this.Fuerza;
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
    return previewCardModel;
}());
function updatePreview() {
    console.log("updatePreview");
    var _a, _b, _c, _d, _e, _f;
    var PreviewDmg = document.getElementById("cpDmg");
    var PreviewHp = document.getElementById("cpHp");
    var PreviewMag = document.getElementById("cpMag");
    var PreviewDef = document.getElementById("cpDef");
    var PreviewEva = document.getElementById("cpEva");
    var PreviewSp = document.getElementById("cpSp");
    var PreviewVc = document.getElementById("cpVc");
    var FuerzaStat = parseInt((_a = document.getElementById("FuerzaStat")) === null || _a === void 0 ? void 0 : _a.value);
    var ConstStat = parseInt((_b = document.getElementById("ConstitucionStat")) === null || _b === void 0 ? void 0 : _b.value);
    var DexStat = parseInt((_c = document.getElementById("DestrezaStat")) === null || _c === void 0 ? void 0 : _c.value);
    var IntelStat = parseInt((_d = document.getElementById("InteligenciaStat")) === null || _d === void 0 ? void 0 : _d.value);
    var CarismaStat = parseInt((_e = document.getElementById("CarismaStat")) === null || _e === void 0 ? void 0 : _e.value);
    var SuerteStat = parseInt((_f = document.getElementById("SuerteStat")) === null || _f === void 0 ? void 0 : _f.value);
    var currentPreview = new previewCardModel(FuerzaStat, ConstStat, DexStat, IntelStat, CarismaStat, SuerteStat);
    if (currentPreview && PreviewDmg && PreviewHp
        && PreviewMag && PreviewDef && PreviewEva
        && PreviewSp && PreviewVc) {
        PreviewDmg.innerHTML = currentPreview.dmg + "dmg";
        PreviewDef.innerHTML = currentPreview.def + "def";
        PreviewEva.innerHTML = currentPreview.eva + "eva";
        PreviewHp.innerHTML = currentPreview.hp + "hp";
        PreviewMag.innerHTML = currentPreview.mag + "mag";
        PreviewSp.innerHTML = currentPreview.sp + "sp";
        PreviewVc.innerHTML = currentPreview.vc + "vc";
    }
    else {
        console.error("Preview element not found");
    }
}
function updateStats() {
   console.log("updateStats called");
    var text = document.getElementById("statsSum");
    var statsTotal = 0;
    var statElements = document.getElementsByClassName("statInput");
    var statArray = __spreadArray([], statElements, true);
    statArray.forEach(function (el) {
        console.log(el.constructor.name)
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
console.log("script loaded");
// Actualizar estadísticas
__spreadArray([], document.getElementsByClassName("stat"), true).forEach(function (element) {
    console.log("updated");
    element.addEventListener("input", updateStats); // Añadir un listener para cuando se actualice
    // Que llame a la función updateStats
    // Esta a su vez, llama a la función updatePreview
});
