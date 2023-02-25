import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import Header from './components/Header';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Product from './pages/Product';
import Banner from './components/Banner';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
        <ApolloProvider client={client}>
          <Router>
            <Header />
            <Banner />
              <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/product/:id" element={<Product />} />
                 <Route path="*" element={<Page404 />} />
              </Routes>
          </Router>
        </ApolloProvider>
    </>
    
  );
}

export default App;
