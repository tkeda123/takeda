export const receiveModel =class{
    constructor(){
    const data=(JSON.parse(event.data));
    const receive_message=document.querySelector("#receive-message");
    }
    receive_message=()=>{
        addEventListener(`click`,()=>{
            receive_message.insertAdjacentHTML('afterbegin',
    `<ul>
    <li>${data.body}</li>
    </ul>`
    );
            })
    }
}