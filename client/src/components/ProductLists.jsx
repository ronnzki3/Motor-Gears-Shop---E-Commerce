import {FaTrash} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function ProductLists({product}) {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-3 mb-3">
        <div className='bgCard_ d-flex flex-column border'>
            <div className='bg-white' style={{height:'250px',position:'relative'}}>
                  <img style={{width:'250px',position:'absolute', top:'50%', left:'50%',marginTop:'-100px',marginLeft:'-100px'}} src={`/products/helmets/${product.picture}`} alt=""  />
            </div>
            <div className='m-4 bg-white p-3'>
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>{product.brand}</p>
              <p>{product.description}</p>

              <Link to={`/product/${product.id}`} className='btn btn-sm py-2 px-3'> See details </Link>
              
              <button className="btn-sm text-white bg-danger">
                  <FaTrash/>
              </button>
            </div>
        </div>

    </div>
  )
}
