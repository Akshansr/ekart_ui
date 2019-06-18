var initialstate={
    name:false,
    firstname:null,
    lastname:null,
    username:null,
    mobileNo:null,

}

const userreducer = (state=initialstate, action) => {
    switch (action.type){
        case "initialupdate":
        // state = state + action.payload;
        state = {
            ...state,
            firstname : action.payload.firstname,
            lastname :  action.payload.lastname,
            username :  action.payload.username,
            mobileNo : action.payload.mobileNo
        };
        break;
        case "personalInfo":
        // state = state - action.payload;
        state = {
            ...state,
            age : 25
        };
        break;
    }
    return state;
};

export default userreducer 
