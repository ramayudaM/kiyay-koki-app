import React from "react";
import { useState } from "react";

const QuantityCart = () => {
    const [jumlahProduct, setJumlahProduct] = useState(1);
    const incerment = () => {
      setJumlahProduct(jumlahProduct + 1);
    };
  
    const decrement = () => { 
        if (jumlahProduct > 1) {
        setJumlahProduct(jumlahProduct - 1);
        }
    };


    return (
         <div className="card-keranjang2 jumlah-product">            
            <button className="button2" onClick={decrement}>
            -
            </button>
            <div>{jumlahProduct}</div>
            <button className="button2" onClick={incerment}>
            +
            </button> 
        </div>
    )
}

export default QuantityCart