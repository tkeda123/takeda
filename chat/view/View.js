
// 描画するclass

export const View =class {
    constructor(socket){
        // 入力された値
        this.message_input=document.querySelector("#message_input");
        // 入力された時の出力する場所
        this.message_input_list=document.querySelector("#message_list");
        // ボタン
        this.button =document.querySelector("#button");
        // 受け取る値の場所
        this.receive_message_list=document.querySelector("#receive-message");
        console.log(message_input);
        // メッセージをフックするときの
        socket.addEventListener("message",(e)=>{
            return e.body;
    })
    }
   

    displayInputMessage=()=>{
            this.send_message=message_input_list.insertAdjacentHTML('afterbegin',
            `<ul>
            <li>${message_input.value}</li>
            </ul>`
            )}
                // 描画するときのメソッド
        click_display_message=()=>{
            button.addEventListener('click',this.displayInputMessage)
       }

   
            

        displayReceiveMessage=(socket)=>{ 
            // フックしたものを描画させる
            socket.addEventListener("message",(e)=>{
                console.log(e);
                console.log(JSON.parse(e.data).body);
                this.receiveMessage=this.receive_message_list.insertAdjacentHTML('afterbegin',
                `<ul>
                <li>${JSON.parse(e.data).body}</li>
                </ul>`
                )})}
                     
            
        }
