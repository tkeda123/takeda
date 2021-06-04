// サーバーに送るもの(POST的な)
export const sendModel=class{
    constructor(socket){
        this.socket = socket;
    }
    send_button=()=>{
        addEventListener('click',this.sendMessage)
    }
    sendMessage=()=>{
        const message_input=document.querySelector('#message_input').value;
        this.socket.send(JSON.stringify({
            body:message_input,
            to:'*',
            isBoard: true,
            option:1
        }));
    }

};