// サーバーに送るもの(POST的な)
export const sendModel=class{
    send_message=()=>{
        socket.send(JSON.stringify({
            body:message_input,
            to:'*',
            isBoard: true,
            option:1
        }));
    }

};