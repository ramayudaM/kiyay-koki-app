import React from 'react';

const QuantityCart = ({ jumlahProduct, setJumlahProduct }) => {
  const increment = () => {
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
      <button className="button2" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantityCart;
