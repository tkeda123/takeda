// サーバーから取ってくる(GET的な)
export const receiveModel =class{
    constructor(e){
        console.log(e);
        // const data=JSON.parse(e);
    }
    receiveMessage=(e)=>{
        addEventListener("message",(e)=>{
            return e.body;
        })
    }
}