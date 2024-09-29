export default class TermékKártya{
//egy termékkártyát jelenít meg külső adat alapján
#adat = {}
    constructor(adat, szuloElem){
        this.#adat = adat
        this.szuloElem = szuloElem
        this.kartyaMegjelenit()
    }
    kartyaFormátum(){
        this.szuloElem.append(`<img src=${adat.img} alt=${adat.nev}>
            <h1>${adat.nev}</h1>
            <p>${adat.leírás}</p>
            <h3>${adat.ár}</h3>
            <button>Kosárba</button>`)
    }
}