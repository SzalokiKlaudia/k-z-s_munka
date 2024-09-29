import TermékModel from "../userModel/TermékModel.js";
import Termékek from "../userView/Termékek.js";

export default class TermékController{
    
    constructor(){
        this.tModel = new TermékModel()
        this.lista = this.tModel.getLista()
        this.Termekek = new Termékek()

    }
}