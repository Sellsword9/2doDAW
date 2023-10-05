import data from './assets/module.js'

const functio  = (data) => {
    data.
        filter((obj) => obj.email.endsWith('.es'))
        .reduce((mapa, obj) => mapa.set(`${obj.first_name} ${obj.last_name}`, obj.email), new Map());
}

console.log(espanioles(data))