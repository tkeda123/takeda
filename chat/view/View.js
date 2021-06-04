
// 描画するclass

export const View =class {
    constructor(socket){
        // 入力された値
        this.message_input=document.querySelector("#message_input").value;
        // 入力された時の出力する場所
        this.message_list=document.querySelector("#message_list");
        // ボタン
        this.button =document.querySelector("#button");
        // 受け取る値
        this.receive=document.querySelector("#receive-message");
        console.log(message_input);
        // メッセージをフックするときの
        socket.addEventListener("message",(e)=>{
            return message_input;
    })
    }
    

    /**
     *
     *
     */
    displayMessage=()=>{
            const send_message=message_list.insertAdjacentHTML('afterbegin',`<ul>
            <li>${message_input}</li>`
            )}

    // 描画するときのメソッド
        click_display=()=>{
            addEventListener('click',this.displayMessage)
        }
            
        };
