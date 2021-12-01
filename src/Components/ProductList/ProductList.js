import React from 'react';
import './ProductList.css'

const ProductList = ({img,name}) => {
    return (
        <div className='p'>
           <div className="p-browser">
               <div className='p-circle'></div>
               <div className='p-circle'></div>
               <div className='p-circle'></div>
           </div>
           
               <img src={img} alt=""  className='p-img'/>
           
           <div className='p-dis'>
               name: {name}<br/>
               <button className='btn'>Detail</button>
           </div>
        </div>
    );
};

export default ProductList;