import Img404 from '../components/assets/404.jpg'
import {Link} from 'react-router-dom';

export default function Page404() {
  return (
    
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center row">
                <div className=" col-md-6">
                    <img src={Img404} alt=""
                        className="img-fluid" />
                </div>
                <div className=" col-md-6 mt-5">
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>

            </div>
        </div>
  )
}
