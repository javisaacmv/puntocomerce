import React from 'react';
import Head from 'next/head'
import styled from '@emotion/styled'
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckMoving, faUser, faShoppingBag, faSearch, faHeart, faMapMarkerAlt, faPhoneAlt, faEnvelope, faPaperPlane,} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faLinkedin, faFacebookSquare, faSkype, faPinterestSquare} from '@fortawesome/free-brands-svg-icons'

function Layout({children}) {

    const HeaderTop = styled.div`
        background-color: black;
        font-size: .85rem;
    `;
    const HeaderMiddle = styled.div`
        background-color: rgb(230,230,230);
    `;
    const CompanyLogo = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        font-size: 3rem;
        font-weight: 400;
    `;
    const CentratedDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `;
    const WishlistDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    `;
    const CenteredDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `;
    const CartSpan = styled.span`
        font-size: .9rem
    `;
    const FooterCol1 = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        font-size: 3rem;
        font-weight: 400;
    `;
    const BorderedP = styled.p`
        border-bottom: 1px solid #565454;
        padding-bottom: 2rem;
    `;
    const ContactInfo = styled.div`
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    `;
    

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

                <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossorigin></script>

                <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin></script>
            </Head>
            <HeaderTop className='container-fluid '>
                <div className='row text-white'>
                    <div className='col d-flex justify-content-center align-middle ' style={{height: 50}}>
                        <FontAwesomeIcon icon={faTruckMoving} flip="horizontal" style={{width:'30px', marginRight:10}}/>
                        <span className='d-flex align-items-center'>Freeshipping on Order above $199</span>
                        </div>
                    <div className='col d-flex justify-content-center align-middle'>
                        <FontAwesomeIcon icon={faUser} style={{width:'15px', marginRight:10}}/>
                        <span className='d-flex align-items-center'>My Account</span>
                        <span className='d-flex align-items-center ml-5'>Login / Register</span>
                    </div>
                </div>
            </HeaderTop>
            <HeaderMiddle className='container-fluid '>
                <div className='row text-dark py-5'>
                    <CompanyLogo className='col ' >
                            <FontAwesomeIcon icon={faShoppingBag} style={{width:'80px'}}/>
                            <span className='ml-5'>Company</span>
                    </CompanyLogo>
                    <CentratedDiv className='col '>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search from entire store..."/>
                        <div className="input-group-append">
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>All Categories</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <button type="button" className="btn " style={{backgroundColor:'black'}}>
                            <FontAwesomeIcon icon={faSearch} style={{width:'15px', color:'white'}}/>
                        </button>
                        </div>
                    </div>
                    </CentratedDiv>
                    <WishlistDiv className='col '>
                        <Dropdown >
                            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{backgroundColor: 'rgb(230,230,230)'}} className='d-flex flex-row' >
                                <FontAwesomeIcon icon={faHeart} style={{width:'20px'}}/>
                                <span className='d-flex align-items-center ml-2'>
                                    Wishlist
                                </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button type="button" className="btn btn-light" style={{backgroundColor: 'rgb(230,230,230)', marginLeft:20}}>
                            <FontAwesomeIcon icon={faShoppingBag} style={{width:'20px'}}/>
                            <span class="badge badge-light " style={{position: 'absolute', marginTop:'25px'}}>0</span>
                        </button>
                    </WishlistDiv>
                </div>
            </HeaderMiddle>
            <div className='row'>
                <CenteredDiv className='col-7'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light my-3" style={{marginLeft:'15rem'}}>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            <li class="nav-item active mx-3">
                                <a class="nav-link" href="#" style={{borderBottom:'2px'}}>Home </a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#">Shop <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#">New Arrivals <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#">Products <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#">Brand <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#">Blog <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </CenteredDiv>
                <CenteredDiv className='col'>
                    <div>
                        <Dropdown >
                            <Dropdown.Toggle variant="light" id="dropdown-basic"  className='d-flex flex-row'  size="lg" style={{width:200}}>
                                <FontAwesomeIcon icon={faShoppingBag} style={{width:'40px'}}/>
                                <CartSpan className='d-flex align-items-center ml-3 text-wrap'>
                                    <span>Cart items (3)<br/>Total: $345</span>
                                    
                                </CartSpan>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </CenteredDiv>
                
            </div>
            {children}
            <div className='container-fluid row text-white' style={{backgroundColor:'rgb(31,31,31)'}}>
                <FooterCol1 className='col-4 mt-5'>
                    <div className='row'>
                        <div className='col'></div>
                        <div className='col-10'>
                            <div className=' d-flex align-items-center ml-3'>
                                <FontAwesomeIcon icon={faShoppingBag} style={{width:'40px'}}/>
                                <span className=' ml-5'>Company</span>
                            </div>
                            <BorderedP style={{fontWeight: 300, fontSize:'0.9rem', marginLeft:10}} className='my-5'>
                                Great Range Of Laptops For Your Everyday<br/>
                                Essential w/Intel Core. Same Day<br/>
                                Shipment Cash On Delivery EMI Options<br/> 
                                India's No.1 Most Trusted Technology<br/>
                                Brand in 2015
                            </BorderedP>
                            <div className='my-5' style={{fontWeight: 100, fontSize:'1rem', marginLeft:10}}>
                                <ContactInfo >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{width:'15px', color:'rgb(91,91,91)', marginTop:5}}/>
                                    <p className='ml-3'>321, Ramis Gandour Colony, District 9 Florida</p>
                                </ContactInfo>
                                <ContactInfo >
                                    <FontAwesomeIcon icon={faPhoneAlt} style={{width:'15px', color:'rgb(91,91,91)', marginTop:5}}/>
                                    <p className='ml-3'>090-0965-2987</p>
                                </ContactInfo>
                                <ContactInfo >
                                    <FontAwesomeIcon icon={faEnvelope} style={{width:'18px', color:'rgb(91,91,91)', marginTop:5}}/>
                                    <p className='ml-3'>contact@company.com</p>
                                </ContactInfo>
                            </div>
                        </div>
                    </div>
                </FooterCol1>
                <div className='col-2' style={{marginTop:'4.5rem', marginLeft:'1rem'}}>
                    <span style={{fontWeight: 300, fontSize:'1.2rem', marginLeft:10}} className='half-a-border-on-bottom'>COLLECTIONS</span>
                    <p style={{marginTop:'4rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Summer 2017</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Women's Dress</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Women's Jackets</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Men's Sweats Shirts</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Men's Dress</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Accessories</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Travel Bags</p>
                </div>
                <div className='col-2' style={{marginTop:'4.5rem'}}>
                    <span style={{fontWeight: 300, fontSize:'1.2rem', marginLeft:10}} className='half-a-border-on-bottom'>CUSTOMER CARE</span>
                    <p style={{marginTop:'4rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Order Tracking</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>The Privacy Policy</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Payments & Returns</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Product Care</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>FAQ's</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Shipping Information</p>
                    <p style={{marginTop:'1rem', color:'rgb(160,160,160)', fontWeight: 300, marginLeft:8}}>Account Setting</p>
                </div>
                <div className='col-3' style={{marginTop:'4.5rem'}}>
                    <span style={{fontWeight: 300, fontSize:'1.2rem', marginLeft:10}} className='half-a-border-on-bottom'>SUBSCRIBE FOR MORE UPDATES</span>
                    <p style={{marginTop:'4rem', color:'white', fontWeight: 300, marginLeft:8, width:'75%'}}>
                        Sign up for Newsletter to get all the information on Events, Offers, Sales and More.
                    </p>
                    <div class="input-group mt-4" style={{marginLeft:8, width:'75%'}}>
                        <input type="text" class="form-control" placeholder='Email address' aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-secondary" type="button" id="button-addon2" style={{backgroundColor:'rgb(195,195,195)'}}>
                                <FontAwesomeIcon icon={faPaperPlane} style={{width:'18px', color:'black'}}/>
                            </button>
                        </div>
                    </div>
                    <span style={{fontSize:'0.8rem', marginLeft:8}}>We never share your mail at anywhere</span>
                    <div style={{marginLeft:8, marginTop:'2rem'}}>
                        <FontAwesomeIcon icon={faTwitter} style={{width:'18px', color:'rgb(160,160,160)', marginRight:'1.5rem'}}/>
                        <FontAwesomeIcon icon={faLinkedin} style={{width:'18px', color:'rgb(160,160,160)', marginRight:'1.5rem'}}/>
                        <FontAwesomeIcon icon={faFacebookSquare} style={{width:'18px', color:'rgb(160,160,160)', marginRight:'1.5rem'}}/>
                        <FontAwesomeIcon icon={faSkype} style={{width:'18px', color:'rgb(160,160,160)', marginRight:'1.5rem'}}/>
                        <FontAwesomeIcon icon={faPinterestSquare} style={{width:'18px', color:'rgb(160,160,160)', marginRight:'1.5rem'}}/>
                    </div>
                </div>
                <div className='col'></div>
            </div>
        </div>
    );
}

export default Layout;