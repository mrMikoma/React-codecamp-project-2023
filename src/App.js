import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import PreviousPricesPage from './components/PreviousPricesPage/PreviousPricesPage';
import PriceEstimationPage from './components/PriceEstimationPage/PriceEstimationPage'
import Menu from './components/Menu/Menu'


function App() {
  return (
    <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='calculator' element={<PriceEstimationPage />} />
          <Route path='previous-page' element={<PreviousPricesPage />}></Route>
          <Route path='*' element={<FrontPage />}></Route>
        </Routes>
    </BrowserRouter>
  )
}


export default App;
