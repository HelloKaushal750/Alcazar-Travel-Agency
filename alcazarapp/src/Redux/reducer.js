

const intitalData ={
  bookingData:{},
  signUpData :[]
}
  


export const reducer = (state = intitalData,action) => {
  switch(action.type){
   
    case ('BOOKINGDATA') : return{
      ...state,bookingData:action.payload
    }
    case('SIGNUPDATA') : return{
      ...state,signUpData:[...state.signUpData,action.payload]
    }
    default :return  state;
  }

}
