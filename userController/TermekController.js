import TermékModel from "../userModel/TermekModel.js";
import Termékek from "../userView/Termekek.js";

export default class TermékController{
    
    constructor(){
        this.tModel = new TermékModel()
        this.lista = this.tModel.getLista()
        this.Termekek = new Termékek(this.lista, $('.termekek'))
        this.kosarbaHelyez();
    }

    kosarbaHelyez(){
        $(window).on("kosarbaTesz", (event)=>{
            console.log(event.detail);
            const kosarElem = $(".cart")
            kosarElem.append(`<div class="kosarElem">
                <img src="${event.detail.img}" alt="${event.detail.nev}">
                <h2>${event.detail.nev}</h2>
                <h3>${event.detail.ár}</h3>
                <button class="delete">Töröl</button>
                </div>`)
        })
    }
}