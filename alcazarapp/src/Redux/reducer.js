
const initialState = {
    step:0,
    promocode:"masai30",
    booked:{
        location:"Andaman",
        packageType:"Premium",
        start:"Post Blair",
        travelDate:"11-June-2023",
        traveller:2,
        discount:0,
        price:63850
    },
    total:0,
    cardDetail:{
        cardNo:"111111111111",
        cvv:"111"
    },
    otp:{
        f:"1",s:"1",t:"1",fo:"1",fi:"1"
    }
}

const reducer = (store=initialState,action)=>{
    switch(action.type){
        case 'UPDATE_STEP':{
            return {...store,step:(store.step + action.payload)}
        }
        case 'DISCOUNT':{
            return {...store,booked:{...store.booked,discount:action.payload}}
        }
        case 'GRAND_TOTAL':{
            return {...store,total:action.payload}
        }
        default: {
            return store;
        }
    }
}

export default reducer;