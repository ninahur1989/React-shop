import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import Basket1 from './pages/BasketPage'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <ProductsPage /> } />
        <Route path="/Backet" element={ <Basket1 /> } />
      </Routes>
    </>
  )
}

export default App;
