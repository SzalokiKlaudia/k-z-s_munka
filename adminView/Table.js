import Row from "./Row.js"

export default class Table{
    #lista = []

    constructor(lista,szuloElem){
        this.#lista = lista
        this.szuloElem = szuloElem
        //console.log(this.#lista,this.szuloElem)
        this.szuloElem.empty()
        this.tablazatMegjelenit()
        this.sorok = $(".sorok")
        this.sorokMegjelenit()

    }

    tablazatMegjelenit(){

        this.szuloElem.append(`
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Elnevezés</th>
                                            <th>Leírás</th>
                                            <th>Ár</th>
                                            <th>Töröl</th>
                                        </tr>
                                    </thead>
                                    <tbody class="sorok">
                                    
                                    </tbody>


                                </table>
            
                                `)


    }

    sorokMegjelenit(){

        this.#lista.forEach((elem,index) => {
            elem.id = index
            new Row(elem,this.sorok)


        })


    }

    
}