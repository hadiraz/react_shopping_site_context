import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CardContext } from '../context/CardsContextProvider'
import CartDetailItem from './CartDetailItem';
function CartDetail() {
  const {cardValues , cardDispatch} = useContext(CardContext);

  return (
    <section className="cart-detail-container">
      <section className="cart-detail-items-container">
            {          
              cardValues.addedItems.map(value => {
                return <CartDetailItem key={value.id} cardDispatch={cardDispatch} data={value} />
              }) 
            }
            {
            !cardValues.addedItems.length && !cardValues.checkout && <button className="checkout-btn" 
            onClick={()=>cardDispatch({type:"CLEAR_CARD"})}>
              <Link to="/products">
                go to shop
              </Link>
            </button>
            }
      </section>
      <section className="cart-checkout-container">
        {
          !cardValues.checkout ?
          <div>
            <p className="checkout-title">
              total items : 
              <span className="checkout-data">
                {cardValues.selectedItemsCounter}
              </span>
            </p>
            <p className="checkout-title">
              total payment : 
              <span className="checkout-data">
                ${cardValues.totalPrice}
              </span>
            </p>
              { cardValues.selectedItemsCounter > 0 &&
            <div className="cart-checkout-buttons">
                  <button className="checkout-btn clear"
                  onClick={()=>cardDispatch({type:"CLEAR_CARD"})}>
                    clear
                  </button>
                  <button className="checkout-btn" 
                  onClick={()=>cardDispatch({type:"CHECKOUT"})}>
                    checkout
                  </button>
            </div>
              }
          </div> : 
          <div>
            <h3 className="checkout-message">
              checked out successfully
            </h3>
            <button className="checkout-btn" 
            onClick={()=>cardDispatch({type:"CLEAR_CARD"})}>
              <Link to="/products">
                go to shop
              </Link>
            </button>
          </div>
        }
      </section>
    </section>
  )
}

export default CartDetail