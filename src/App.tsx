import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './pages/ProductsPage'
import Basket1 from './pages/BasketPage'
import {Navigation} from './components/Navigation'
import DeteilComponent from './components/ProductDetailsComponent'
import Page1 from './pages/DetailsPages/id1page'
import Page2 from './pages/DetailsPages/id2page'
import Page3 from './pages/DetailsPages/id3page'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <ProductsPage /> } />
        <Route path=':id' element = {<DeteilComponent/>} ></Route>
        <Route path="/Backet" element={ <Basket1 /> } />
        {/* <Route path="/1" element={ <Page1 /> } />
        <Route path="/2" element={ <Page2 /> } />
        <Route path="/3" element={ <Page3 /> } /> */}
      </Routes>
    </>
  )
}

export default App;
