import {kacsak} from "../adatok.js"
export default class TermékModel{
    #lista = []
    constructor(){
        this.#lista = kacsak

    }

    getLista(){
        return this.#lista
    }
}