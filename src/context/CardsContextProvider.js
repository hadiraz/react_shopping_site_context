import React, { useEffect, useReducer } from 'react';

const initialState = {
    addedItems : [] ,
    selectedItemsCounter : 0 ,
    totalPrice : 0 ,
    checkout : false
}

const sumItems = (items)=>{
    const selectedItemsCounter = items.reduce((total , product)=> total + product.quantity , 0)
    const totalPrice = items.reduce((total , product)=> total + Number((product.quantity*product.price).toFixed(2)) , 0) ;
    return {selectedItemsCounter , totalPrice}
}

const cardReducer = (state , {type , data}) => {
    switch(type){
        case "ADD_FIRST_ITEM" :
            if(!state.addedItems.find(item=> item.id === data.id)){
                state.addedItems.push({
                    ...data ,
                    quantity : 1
                })
            }
            return({
                ...state , 
                ...sumItems(state.addedItems)
            })
        case "REMOVE_ITEM" :
            const indexItem = state.addedItems.findIndex(item=> item.id === data.id );
            state.addedItems.splice(indexItem , 1)
            return(
                {
                    ...state ,
                    ...sumItems(state.addedItems)
                }
            )
        case "INCREASE_ITEM" :
            const indexItemI = state.addedItems.findIndex(item=> item.id === data.id );

            state.addedItems[indexItemI].quantity += 1
            return ({
                ...state ,
                ...sumItems(state.addedItems)
            })

        case "DECREASE_ITEM" :
            const indexItemD = state.addedItems.findIndex(item=>item.id === data.id );

            if(state.addedItems[indexItemD].quantity > 0){
                state.addedItems[indexItemD].quantity -= 1
            }
            if(state.addedItems[indexItemD].quantity === 0){
                state.addedItems.splice(indexItemD , 1);
            }
            return ({
                ...state ,
                ...sumItems(state.addedItems)
            })

        case "CHECKOUT" :
            console.log(initialState)
            return ({
                addedItems : [] ,
                selectedItemsCounter : 0 ,
                totalPrice : 0 ,
                checkout : true
            })
        case "CLEAR_CARD" :
            return ({
                addedItems : [] ,
                selectedItemsCounter : 0 ,
                totalPrice : 0 ,
                checkout : false
            })
        default : return state
    }
}
export const CardContext = React.createContext() ;

function CardsContextProvider({children}) {

    const [card , dispatch] = useReducer(cardReducer , initialState) ;
 
  return (
    <CardContext.Provider value={{
       cardValues : card , 
       cardDispatch : dispatch
    }}>
        {children}
    </CardContext.Provider>
  )

}

export default CardsContextProvider