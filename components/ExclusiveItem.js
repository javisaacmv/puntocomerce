import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function ExclusiveItem({img, title, price}) {
    return (
        <div >
            <div className='row' style={{width:'21rem'}}>
                <div className='col-5'>
                    <img src={img} style={{height:'8rem'}}/>
                </div>
                <div className='col'>
                    <p>{title}</p>
                    <p>{price}</p>
                    <FontAwesomeIcon icon={faHeart} style={{width:'12px', color:'rgb(160,160,160)'}}/>
                    <FontAwesomeIcon icon={faShoppingCart} style={{width:'12px', color:'rgb(160,160,160)', marginLeft:'1rem'}}/>
                </div>
            </div>
        </div>
    );
}

export default ExclusiveItem;