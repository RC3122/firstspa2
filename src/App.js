import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import styles from './ProductList.module.css';
import {CartContext} from './CartContext'


function App() {
  return (
<BrowserRouter>
    <Link className={styles.link} to="/">首頁</Link>
    <Link className={styles.link} to="/ProductDetail">產品詳情</Link>    
    <Link className={styles.link} to="/Checkout">購物車</Link>

    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/ProductDetail" element={<ProductDetail />}>
          <Route path=":id" element={<ProductDetail />}></Route>
      </Route>
      <Route path="*" element={<p>404-Error</p>} /> {/* when all path not fullfilled */}
    </Routes>
</BrowserRouter>
  
  );
}

export default App;
