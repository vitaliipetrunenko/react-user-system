const SET_USER = "SET-USER"
const SET_TOKEN = "SET-TOKEN"

let defaultUsers = {

    currUser:{
            
            },
           
            
          


    
}



export const authReducer = (state=defaultUsers,action)=>{
    
    
    switch(action.type){
        case SET_USER:
            console.log("SETTINGUSER",action)
            
            
                return({
                    ...state,currUser: action.user
                })
                
        case SET_TOKEN:
                    console.log("SETTINGTOKEN",action)
                        return({
                            ...state,currUser: {...state.currUser,token:{...action.token}}
                        })
                    
        default:
            return state

    }
    
    


}
export default authReducer;