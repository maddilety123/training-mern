const formAction=(data)=>{
    console.log("action called")
    return{
        type:"add/voter",
        payload:data
    }
}

export default formAction