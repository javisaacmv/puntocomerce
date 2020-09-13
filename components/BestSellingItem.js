import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as star} from '@fortawesome/free-regular-svg-icons'

function BestSellingItem({rates, product}) {

    
    function getRate(){
        let itemRate = 0
        let count = 0
        let stars = []
        rates.forEach(rate =>{
            if(rate.id === product.id){
                itemRate += rate.stars
                count += 1
            }
        })
        itemRate = Math.round(itemRate/count)

        for(let i = 0; i < 5 ; i++){
            if(i<itemRate) stars.push(<FontAwesomeIcon icon={solidStar} style={{width:'14px'}}/>)
            else stars.push(<FontAwesomeIcon icon={solidStar} style={{width:'14px', opacity:'50%'}}/>)
            
        }
        

        return(
        <div style={{display:'flex', flexDirection:'row'}}>
            {stars.map(s => (
                s
            ))}
        </div>
        )
    } 
    
    return (
        <div>
            <div className="card" style={{width:'18rem'}}>
                <img src={"/img/"+product.img} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className='row'>
                    <div className='col-9 ml-2'>
                        <p className="card-text">{product.name}</p>
                        <p style={{fontSize:'.7rem ', color:'rgb(176,176,176)'}}>Wedding Flower</p>
                        {getRate()}
                    </div>
                    <div className=''>
                        <span style={{fontSize:'1rem'}}>${product.specialPrice}<br/></span>
                        <span style={{fontSize:'.75rem', marginLeft:'.5rem', color:'rgb(176,176,176)', textDecoration:'line-through'}}>${product.price}</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestSellingItem;