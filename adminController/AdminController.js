import AdminModel from "../adminModel/AdminModel.js"
import Table from "../adminView/Table.js"

export default class AdminController{
    constructor(){
        this.adminModel = new AdminModel()
        this.lista = this.adminModel.getLista()
        //console.log(this.lista)
        this.tablazat1 = new Table(this.lista,$(".tablazat"))
        this.esemenyFigyelo()


    }

    esemenyFigyelo(){
        $(window).on("torol", (event) => {
            let elem = event.detail.id
            console.log(elem)
            console.log(this.adminModel.getLista())
            this.adminModel.listaTorol(elem)
            let ujlista = this.adminModel.getLista()

            this.tablazat1 = new Table(ujlista,$(".tablazat"))

        })
    }


}
