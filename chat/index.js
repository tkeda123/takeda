let button = document.getElementById('button');
const socket =new WebSocket('ws://10.1.234.2:8888');

 // メッセージの待ち受け(GET的な)
socket.addEventListener("message",(event)=>{
    const data=(JSON.parse(event.data));
    console.log(data);
    const receive_message=document.querySelector("#receive-message");
    receive_message.insertAdjacentHTML('afterbegin',
    `<ul>
    <li>${data.body}</li>
    1</ul>`
    );
});


button.addEventListener(`click`,()=>{
    let message_input=document.querySelector("#message_input").value;
    let message_list=document.querySelector("#message_list");
    console.log(message_input);

    // サーバーに送るもの(POST的な)
    
        socket.send(JSON.stringify({
            body:message_input,
            to:'*',
            isBoard: true,
            option:1
        }));
        


    const send_message=message_list.insertAdjacentHTML('afterbegin',`<ul>
    <li>${message_input}</li>
</ul>`
);
;
})

     