import "react-toastify/dist/ReactToastify.css"

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import {ToastContainer} from 'react-toastify';
import Header from './components/Header';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Product from './pages/Product';
import Cart from "./pages/Cart";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
        <ApolloProvider client={client}>
          <Router>
            <ToastContainer />
            <Header />
              <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/product/:id" element={<Product />} />
                 <Route path="*" element={<Page404 />} />
                 <Route path="/cart" element={<Cart />} />
              </Routes>
          </Router>
        </ApolloProvider>
    </>
    
  );
}

export default App;
