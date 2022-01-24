import React from 'react';
import './App.css';
import Header from './component/header';
import Main from './component/main/main-dishes';
import BarbecueDishes from './component/main/barbecue_dishes/barbecueDishes';
import Salads from './component/main/salads';
import AlcoholDrinks from './component/main/alcoholDrinks';
import CoffeeTea from './component/main/coffeeTea';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BarbecueDishes />
      <Salads />
      <AlcoholDrinks />
      <CoffeeTea />
    </div>
  );
}

export default App;
