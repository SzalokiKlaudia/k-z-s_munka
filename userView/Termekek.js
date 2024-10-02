import TermékKártya from "./TermekKartya.js"

export default class Termékek{
// a termékkártyákat sorolja fel a felületen
    #lista = {}
    constructor(lista, szuloElem){
        this.#lista = lista
        this.szuloElem = szuloElem
        this.szuloElem.empty()

        this.articleElement = $('.termekek')
        this.kartyakMegjelenit()
    }
    kartyakMegjelenit(){
        this.#lista.forEach((element,index) => {
            element.id = index
            new TermékKártya(element, this.articleElement)
        })
    }

}