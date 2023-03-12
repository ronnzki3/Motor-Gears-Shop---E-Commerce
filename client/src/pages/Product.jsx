import { useDispatch } from 'react-redux'; 
import {Link,useParams} from 'react-router-dom';
import Loading from '../components/Loading';
import SomethingWrong from '../components/SomethingWrong';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../queries/productQueries';
import { FaShoppingCart } from 'react-icons/fa';

import { addToCart } from '../features/cartSlice';


export default function Product() {

  const dispatch =useDispatch();

  const {id} = useParams();
  const {loading, error,data} = useQuery(GET_PRODUCT, 
    {variables: {id}});

    if(loading) return <Loading />
    if(error) return <SomethingWrong />   

    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
    }

  return (
    <>
          {!loading && !error && (
            <div className='d-flex container-fluid mt-5'>               

                  <div className='row d-flex container-fluid'>                      
                      <div className='col-12 col-md-6 col-lg-6 relative'>
                           <Link to="/" className='btn btn-sm py-2 px-3'> Back </Link>
                            <div className='bg-white relative' style={{height:'450px',position:'relative'}}>
                                <img style={{width:'90%'}} src={`/products/helmets/${data.product.picture}`} alt=""  />
                          </div>
                      </div>

                      <div className='col-12 col-md-6 col-lg-6'>
                          <div className='container d-flex flex-column'>
                              <div className='container' style={{minHeight:'200px'}}>
                                  <h5>{data.product.brand} HELMET</h5>
                                  <h1>{data.product.name}</h1>
                              </div>                             
                              <div className='container'>
                                  <p>{data.product.description}</p>
                              </div>
                              <div className='container mt-3'>
                                    <span onClick={()=>{handleAddToCart(data.product)}} className='' style={{position:"relative"}}>
                                        <FaShoppingCart className='fs-3' />
                                        <span className='cartItems fs-5 text-danger' style={{position:"absolute",top:"-15px"}}>0</span>
                                    </span>
                              </div>
                          </div>
                      </div>

                  </div>

                  {/* <div className='bgCard_ d-flex flex-column border'>
                    
                    
                </div> */}
            </div>
          )}       
    </>
  )
}
