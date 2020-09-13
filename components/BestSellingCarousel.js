import React from 'react';
import Carousel, {consts} from 'react-elastic-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'



function BestSellingCarousel({children}) {

    function myArrows({type, onClick, isEdge}){
        const pointer = type ===consts.PREV ? <FontAwesomeIcon icon={faChevronLeft} style={{width:'18px'}}/> : <FontAwesomeIcon icon={faChevronRight} style={{width:'18px'}}/>

        return(
            <button className='btn btn-light' onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    return (
        <div>
            <Carousel itemsToShow={4} style={{width:'90rem'}} pagination={false} renderArrow={myArrows}>
                {children}
            </Carousel>
        </div>
    );
}

export default BestSellingCarousel;