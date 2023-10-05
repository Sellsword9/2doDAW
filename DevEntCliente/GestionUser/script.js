import data from './assets/module.js'

const functio  = (data) => {
    data.
        filter((obj) => obj.email.endsWith('.es'))
        .reduce((mapa, obj) => mapa.set(`${obj.first_name} ${obj.last_name}`, obj.email), new Map());
}

const espanioles = (data) => {
    arr
        .reduce((mapa, obj) => {
            obj.email.slice(-3) === ".es" 
              ?  mapa.set(`${obj.last_name}_${user.first_name}`, obj.email) 
                : mapa
            
            
            
            ,new Map()});
}


console.log(espanioles(data))