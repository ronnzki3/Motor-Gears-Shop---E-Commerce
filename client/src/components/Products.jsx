import { gql, useQuery } from '@apollo/client';
import ProductLists from './ProductLists';
import { GET_PRODUCTS } from '../queries/productQueries'; //get all products query
import Loading from './Loading';
import SomethingWrong from './SomethingWrong';


export default function Products() {

    const {loading, error, data} = useQuery(GET_PRODUCTS);

    if(loading) return <Loading />
    if(error) return <SomethingWrong />

    return (<>
    
        {!loading && !error && 
            (<div className='container'>

                <h2>Lists of Products</h2>
                
                <div className='row gx-5 mx-auto p-5 mt-3 border d-flex'>
                    {data.products.map(product => (
                        <ProductLists key={product.id} product={product} />
                    ))}
                </div>


            </div>)        
        }

    </>)
}
