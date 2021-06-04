import {sendModel} from './../model/sendModel.js'
import {receiveModel} from './../model/receiveModel.js'
import {View} from './../view/View.js'
const App  = class{
    constructor(){
        this.socket=new WebSocket('ws://10.1.234.2:8888');
        this.send=new sendModel(this.socket);
        this.receive=new receiveModel();
        this.view = new View(this.socket);
    }
    mount(){
        this.send.click_button(this.socket);
        this.receive.receiveMessage(event);
        this.view.click_display()
    }
}

const app=new App();

app.mount()