
export default class Row{
    #listaElem = {}

    constructor(listaElem,szuloElem){
        this.#listaElem = listaElem
        this.szuloElem = szuloElem
        //console.log(this.#listaElem,this.szuloElem)
        this.sorMegjelenit()
        this.kosarElem = $(".fa-solid:last")
        this.esemenyKezelo()
    }

    sorMegjelenit(){
        //console.log("itt")
        this.szuloElem.append(`
                            <tr>
                                <td>${this.#listaElem.nev}</td>
                                <td>${this.#listaElem.leírás}</td>
                                <td>${this.#listaElem.ár}</td>
                                <td><i class="fa-solid fa-trash-can fa-2x"></i></td>
                                
                            </tr>
            
                            `)


    }

    esemenyKezelo(){
        this.kosarElem.on("click",(event) => {
            //console.log("klikk")

            const e = new CustomEvent("torol",{detail:this.#listaElem})
            window.dispatchEvent(e)
        
        })

    }

    
}