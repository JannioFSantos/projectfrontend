import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductListingPage />} />
          <Route path="product/:id" element={<ProductViewPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
