import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../../components/Header/Header';
import ProductsView from '../ProductsView/ProductsView';
import MainPageView from '../MainPageView/MainPageView';

function Root() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={MainPageView} exact/>
        <Route path='/products' Component={ProductsView} />
      </Routes>
    </BrowserRouter>


  );
}

export default Root;
