import TermékModel from "../userModel/TermekModel.js";
import Termékek from "../userView/Termekek.js";

export default class TermékController{
    
    constructor(){
        this.tModel = new TermékModel()
        this.lista = this.tModel.getLista()
        this.Termekek = new Termékek(this.lista, $('.termekek'))

    }
}