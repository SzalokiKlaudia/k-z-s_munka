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


}
