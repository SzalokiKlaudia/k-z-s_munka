export default class Termékek{
// a termékkártyákat sorolja fel a felületen
    #lista = {}
    constructor(lista, szuloElem){
        this.#lista = lista
        this.szuloElem = szuloElem
        this.szuloElem.empty()

        
    }
}