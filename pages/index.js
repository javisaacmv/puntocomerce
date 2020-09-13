import Layout from '../components/layout'
import styled from '@emotion/styled'
import {Carousel} from 'react-bootstrap'
import data from '../components/bestSellingProducts.json'
import BestSellingItem from '../components/BestSellingItem'
import BestSellingCarousel from '../components/BestSellingCarousel'
import ExclusiveItem from'../components/ExclusiveItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'


export default function Home() {

  const ColumnCenterDiv = styled.div`
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
  `;
  const RowCenterDiv = styled.div`
      display:flex;
      flex-direction: row;
      justify-content: center;
      align-items:center;
  `;
  const ColumnStartDiv = styled.div`
      display:flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
  `;
  
  const products = data.products
  const rates = data.reseñas

  return (
      <Layout>
        <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/1.jpg"
              alt="First slide"
            />
            <Carousel.Caption style={{
              position:'absolute',
              top:'12rem',
              left:'0rem'

            }}>
              <div className='row'>
                <div className='col-4'>
                  <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start', marginLeft:'12rem'}}>
                    <span style={{fontSize:'2rem', paddingBottom:0}}>TULIPS</span>
                    <span style={{fontSize:'7rem', fontWeight:800, paddingTop:0}}>SALE</span>
                    <div style={{position:'relative', top:'-10rem', left:'18rem', width:'5rem', height:'1rem'}}>
                      <span style={{fontSize:'3rem', fontWeight:300, paddingBottom:-5, marginBottom:-5}} > 50%</span>
                      <span style={{fontSize:'3rem', fontWeight:300, paddingTop:-5, marginTop:-5}} > OFF<br/></span>
                      <p style={{fontSize:'1rem', fontWeight:300, paddingTop:-5, marginTop:-5, width:'7rem'}}>SHOP NOW</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', marginLeft:'7rem'}}>
                      <div style={{
                        backgroundColor:'#9B9B9B',
                        height:'3rem',
                        width: '9rem',
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        marginRight:20
                        }}>
                        <span >SHOP NOW</span>
                      </div>
                      <div style={{
                        backgroundColor:'#4A4A4A',
                        height:'3rem',
                        width: '9rem',
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        marginRight:20
                        }}>
                        <span >FROM $15</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        <div className='row mb-3'>
            <ColumnCenterDiv className='col pq-1 text-white'>
                <p style={{fontSize: '1.5rem'}}>Fast Same day Delivery</p>
                <p style={{fontSize: '2.5rem', fontWeight:'800'}}>BIRTHDAY FLOWERS</p>
                <p style={{fontSize: '2.2rem', fontWeight:'500'}}>Gerbera</p>
                <div style={{
                        backgroundColor:'#9B9B9B',
                        height:'3rem',
                        width: '9rem',
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        <span >SHOP NOW</span>
                  </div>
            </ColumnCenterDiv>
            <div className='col pq-2 text-white'>
              <ColumnStartDiv style={{marginTop:'2.5rem', marginLeft:'1.5rem'}}>
                <p style={{fontSize: '2.2rem', fontWeight:'300'}}>
                  V7 Digital Photo Printing <br/>
                  PROTECTIVE PREVENTATIVE <br/>
                  MAINTENANCE
                </p>
                <p style={{fontSize: '1.5rem', fontWeight:'200'}}>On orders over $99</p>
                <div style={{
                        backgroundColor:'rgb(65,65,65)',
                        height:'3rem',
                        width: '9rem',
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        <span >SHOP NOW</span>
                      </div>
              </ColumnStartDiv>
                  
            </div>
            <div className='col pq-3 text-white'>
              <ColumnStartDiv style={{marginTop:'3.5rem', marginLeft:'2.5rem'}}>
                <p style={{fontSize: '2.2rem', fontWeight:'300'}}>
                  Rose <br/>
                  FLOWER BPUQUET
                </p>
                <p style={{fontSize: '2.2rem', fontWeight:'300'}}>50% OFF</p>
                <div style={{
                        backgroundColor:'rgb(65,65,65)',
                        height:'3rem',
                        width: '9rem',
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        <span >SHOP NOW</span>
                      </div>
              </ColumnStartDiv>
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col pq-4 text-white' >
              <ColumnStartDiv style={{marginTop:'8.5rem', marginLeft:'25rem'}}>
                <p style={{fontSize: '2.2rem', fontWeight:'300'}}>
                  SPLASH OF SUMMER
                </p>
                <p style={{fontSize: '2.2rem', fontWeight:'300'}}>25% OFF</p>
                <div style={{
                        backgroundColor:'rgb(65,65,65)',
                        height:'3rem',
                        width: '9rem',
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        <span >SHOP NOW</span>
                      </div>
              </ColumnStartDiv>
            </div>
            <ColumnCenterDiv className='col pq-5 text-white'>
                <p style={{fontSize: '2.2rem', fontWeight:'300' , marginTop:'7rem'}}>FRESH FLOWER</p>
                <p style={{fontSize: '2.2rem', fontWeight:'300'}}>35% OFF</p>
                <div style={{
                        backgroundColor:'rgb(65,65,65)',
                        height:'3rem',
                        width: '9rem',
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        <span >SHOP NOW</span>
                  </div>
            </ColumnCenterDiv>
        </div>
        <div style={{marginTop:'5rem'}}>
          <ColumnCenterDiv>
                        <p style={{fontSize:'2.5rem', fontWeight:'300'}}>BEST SELLING FLOWERS & GIFTS</p>
          </ColumnCenterDiv>
          <RowCenterDiv>
            <BestSellingCarousel>
            {products && products.map(product =>(
                  <BestSellingItem rates={rates} product={product} />
              ))}
            </BestSellingCarousel>
          </RowCenterDiv>
        </div>
        <div style={{marginTop:'6rem'}}>
        <ColumnCenterDiv style={{marginBottom:'10rem'}}>
              <p style={{fontSize:'2.5rem', fontWeight:'300'}}>EXCLUSIVE OFFERS</p>
              <RowCenterDiv className='my-5'>
              <FontAwesomeIcon icon={faLongArrowAltLeft} style={{width:'16px'}}/>
              <div className='exclusive-item mx-4'>
                  <ExclusiveItem img="/img/Rectangle-1.png" title='Be Happy Flower Bouquet' price='$30'/>
              </div>
              <div className='exclusive-item mx-4'>
                  <ExclusiveItem img="/img/Rectangle-2.png" title='Delightfully Fresh Bouquet' price='$42'/>
              </div>
              <div className='exclusive-item mx-4'>
                  <ExclusiveItem img="/img/Rectangle-3.png" title='Rose and Lily Romance' price='$37'/>
              </div>
              <div style={{width:'12rem'}} >
                <p>Special Offer Limited Time Only</p>
                <div className='text-white' style={{
                        backgroundColor: 'black',
                        height:'3rem',
                        width: '9rem',
                        display: 'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        }}>
                        <span >SHOP NOW</span>
                  </div>
              </div>
              <FontAwesomeIcon icon={faLongArrowAltRight} style={{width:'16px'}}/>
              </RowCenterDiv>
        </ColumnCenterDiv>
        <div style={{height:'20rem', backgroundColor:'rgb(240,240,240)'}} className='row'>
            <div className='col-2'></div>
            <div className='col'>
              <p style={{marginTop:'4rem', fontSize:'1.5rem', fontWeight:200}}>BRANDS</p>
              <RowCenterDiv className='row'>
                <div className='col'>
                  <img src='/img/logo-1.jpg'/>
                </div>
                <div className='col'>
                  <img src='/img/logo-2.jpg'/>
                </div>
                <div className='col'>
                  <img src='/img/logo-3.jpg'/>
                </div>
                <div className='col'>
                  <img src='/img/logo-4.jpg'/>
                </div>
              </RowCenterDiv>
            </div>
            <div className='col-2'></div>
        </div>
        </div>
      </Layout>
    
  )
}
