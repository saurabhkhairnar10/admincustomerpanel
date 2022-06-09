const initialState = [
    { id: 0, name: "saurabh", email: "saurabh@gmail.com", phone: 9876543210 },
    { id: 1, name: "gauraw", email: "gauraw1@gmail.com", phone: 8976543210 },
  ];

  export const contactReducer = ((state = initialState,action)=>{
      switch(action.type){
        case "ADDCONTACT":
            state = [...state,action.payload];
            return state;
        
        default:
            return state;    
      }
  })