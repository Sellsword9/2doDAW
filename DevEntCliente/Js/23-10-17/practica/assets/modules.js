// uso de herencia por prototipos con objetos LITERAL
export const usuarioLiteral = {
    _nombre: "",
    _edad: 0,
    _dni: "",
    /**
     * Validate a dni number with exactly 9 characters
     * @param {number} dni The dni to validate
     * @returns {boolean} True if the dni is valid 
     */
    validarDni(dni) {
        dni = dni.toUpperCase();
        const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
        const numero = dni.substring(0, 8);
        const letra = dni.substring(8, 9);
        const resto = numero % 23;
        const letraCorrecta = letras.substring(resto, resto + 1);
        return letraCorrecta === letra;
    },
    get nombre() {
        return this._nombre;
    },
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    },
    get edad() {
        return this._edad;
    },
    set edad(nuevaEdad) {
        this._edad = nuevaEdad;
    },
    get dni() {
        return this._dni;
    },
    set dni(nuevoDni) {
        // this._dni = nuevoDni;
        if (nuevoDni.length === 9 && this.validarDni(nuevoDni)) {
            this._dni = nuevoDni;
        } else {
            alert("El DNI debe tener 9 caracteres");
        }
    },
    mostrarInfo() {
        return`Nombre: ${this._nombre}, \n Edad: ${this.edad}, \n DNI: ${this.dni}`;
    },
}
