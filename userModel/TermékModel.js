export default class TermékModel{
    #lista = []
    constructor(lista){
        this.#lista = lista

    }

    getLista(){
        return this.#lista
    }
}