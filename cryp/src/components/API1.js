import React from 'react'
const API1 = ({name,image,symble,price,volume,priceChange}) => {
    return (
        <div className="card d-flex">
        <div className="card-header d-flex justify-content-center">
          <p className="m-1">img</p>
          <p  className="m-1">symble</p>
          <p  className="m-1">price</p>
          <p  className="m-1">volume</p>
          <p  className="m-1">incrc</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
            <img src={image} alt="" />
            <p className="m-1">{name}</p>
            <p  className="m-1"> {symble}</p>
            <p  className="m-1">${price} </p>
            <p  className="m-1">${volume.toLocaleString()}</p>
            {
                priceChange<0?(
                    <p className="text-danger m-1"> {priceChange.toFixed(2)} </p>
                ):(
                    <p className="text-info m-1"> {priceChange.toFixed(2)}% </p>
                )
            }
            </div>
        </div>
    )
}
export default API1