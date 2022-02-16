const intialstate={
    votersList:[]
}
function rootReducer(state=intialstate,action){
    
    if(action.type==="add/voter"){
        state.votersList.push(action.payload)
    }
    return state

}

export default rootReducer