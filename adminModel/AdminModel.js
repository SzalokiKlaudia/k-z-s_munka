import {kacsak} from "../adatok.js"

export default class AdminModel{
    #lista = []

    constructor(){
        this.#lista = kacsak
        //console.log(this.#lista)
    }

    getLista(){
        
        return this.#lista
    }

    listaTorol(elem){
        this.#lista = this.#lista.filter(listaEelem => listaEelem.id !== elem )
        return this.#lista
    }


}
