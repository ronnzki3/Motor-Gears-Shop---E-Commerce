import {Link,useParams} from 'react-router-dom';
import Loading from '../components/Loading';
import SomethingWrong from '../components/SomethingWrong';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../queries/productQueries';

export default function Product() {

  const {id} = useParams();
  const {loading, error,data} = useQuery(GET_PRODUCT, 
    {variables: {id}});

    if(loading) return <Loading />
    if(error) return <SomethingWrong />

  return (
    <>
          {!loading && !error && (
            <div className='d-flex container'>
                <Link to="/" className='btn btn-sm py-2 px-3'> Back </Link>

                <div className='p-5 mx-auto d-inline-block border mt-5 w-75'>
                       <p>{data.product.name}</p>
                       <p>{data.product.brand}</p>
                       <p>{data.product.description}</p>
                         
                        <button className="btn-sm text-white bg-info">
                            Back
                        </button>
                </div>
            </div>
          )}       
    </>
  )
}
