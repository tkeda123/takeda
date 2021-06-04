import {sendModel} from './../model/sendModel.js'
import {View} from './../view/View.js'
const App  = class{
    constructor(){
        this.socket=new WebSocket('ws://10.1.234.2:8888');
        this.send=new sendModel(this.socket);
        // this.receive=new receiveModel();
        this.view = new View(this.socket);
    }
    mount(){
        this.send.send_button(this.socket);
        this.view.displayReceiveMessage(this.socket);
        this.view.click_display_message()
    }
}

const app=new App();

app.mount()