// サーバーから取ってくる(GET的な)
export const receiveModel =class{
    receiveMessage=(socket)=>{
        socket.addEventListener("message",(e)=>{
            return e.body;
        })
    }
}