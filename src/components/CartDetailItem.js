import React from 'react'
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { splitTitle } from '../helpers/functions/helperFuncs'

function CartDetailItem({cardDispatch , data}) {
  return (
    <div className="card-detail-item">
          <div className="card-detail-left">
            <img src="/" alt="f"/>
          </div>
          <div className="card-detail-right">
            <p className="card-detail-title">
              {data.title}

              <span className="card-detail-price">
                  $ {(data.price*data.quantity).toFixed(2)}
              </span>
            </p>
            <p className="card-detail-counter">
                {data.quantity}
            </p>
            <div className="card-detail-button-container">
            {
                        data && 
                        <button className="card-btn trash"  onClick={()=>cardDispatch({type:"REMOVE_ITEM" , data})}>
                        <FaTrashAlt></FaTrashAlt>
                        </button>
                    }
                    {
                        data && data.quantity !== 1 && 
                        <button className="card-btn"  onClick={()=>cardDispatch({type:"DECREASE_ITEM" , data})}>
                        <FaMinus></FaMinus>
                        </button>
                    }
                    <button 
                    className="card-btn"   
                    onClick= { ()=>cardDispatch({type:"INCREASE_ITEM" , data}) }>
                        <FaPlus></FaPlus>
                    </button>
            </div>
          </div>
        </div>
  )
}

export default CartDetailItem