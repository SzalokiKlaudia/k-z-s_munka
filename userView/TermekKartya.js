export default class TermékKártya {
    // Egy termékkártyát jelenít meg külső adat alapján
    #adat = {};

    constructor(adat, szuloElem) {
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.kartyaFormátum();
        this.kosarba = $(".kosarba:last")
        this.kosarba.on("click", ()=>{
            const e = new CustomEvent("kosarbaTesz",{detail :this.#adat})
            window.dispatchEvent(e)
        })
    }

    kartyaFormátum() {
        $(this.szuloElem).append(`
            <div class="col kartya" id="${this.#adat.id}">
                <img src="${this.#adat.img}" alt="${this.#adat.nev}">
                <h1>${this.#adat.nev}</h1>
                <p>${this.#adat.leírás}</p>
                <h3>Ár: ${this.#adat.ár}.-Ft</h3>
                <button class="kosarba">Kosárba</button>
            </div>
        `);
    }
}
