const SET_PROFILES = "SET-PROFILES"

let defaultProfiles = {

    currProfiles:[]
            
            
           
            
          


    
}



export const profileReducer = (state=defaultProfiles,action)=>{
    
   
    switch(action.type){
        case SET_PROFILES:
            console.log("working on profiles")
                return({
                    ...state,currProfiles: [...action.profiles]
                })
            
        default:
            return state

    }
    
    


}
export default profileReducer;