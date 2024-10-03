import AdminModel from "../adminModel/AdminModel.js"
import Table from "../adminView/Table.js"

export default class AdminController{
    constructor(){
        this.adminModel = new AdminModel()
        this.lista = this.adminModel.getLista()
        //console.log(this.lista)
        this.tablazat1 = new Table(this.lista,$(".tablazat"))


    }


}
