
// 描画するclass
export const View =class {
    constructor(){
        let message_input=document.querySelector("#message_input").value;
        let message_list=document.querySelector("#message_list");
        const button =document.querySelector("#button");
        console.log(message_input);
    }
     /**
      *
      *
      */
     displayMessage=()=>{
        addEventListener('click',()=>{
            const send_message=message_list.insertAdjacentHTML('afterbegin',`<ul>
            <li>${message_input}</li>
        </ul>`)})
}};


let send_message=new View("");

send_message.displayMessage()