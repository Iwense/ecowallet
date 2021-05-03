import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import Invoice from './components/Invoice';
import Main from './components/Main';
import ProductList from './components/ProductList';

const invoiceList = [
  {id: 12512, date: "12.04.2021", time: '12:03', price: "1246"},
  {id: 15564, date: "14.04.2021", time: '11:33', price: "586"},
  {id: 11554, date: "15.04.2021", time: '20:03', price: "155"},
]

const productsList = [
  {id:1 , invoiceId: 12512, productName: "Молоко", amount: 1, price: 78},
  {id:2 , invoiceId: 12512, productName: "Помидор", amount: 2, price: 35},
  {id:3 , invoiceId: 12512, productName: "Курица", amount: 1, price: 185},
  {id:4 , invoiceId: 12512, productName: "Плита", amount: 1, price: 938},
  {id:5 , invoiceId: 15564, productName: "Кефир", amount: 5, price: 78},
  {id:6 , invoiceId: 15564, productName: "Мороженое", amount: 8, price: 508},
  {id:7 , invoiceId: 11554, productName: "Пельмени", amount: 1, price: 155},

]

function App() {
  return (
    <Router basename="/ecowallet">
    <div className="App">
      <header className="header">
        <nav>
          <NavLink className="header_link" activeClassName="header_link__selected" exact to="/">Главная</NavLink>
          <NavLink className="header_link" activeClassName="header_link__selected" exact to="/invoices">Список чеков</NavLink>
        </nav>
     
      </header>
      <section className="main">
      
        <Switch>
            <Route path="/invoices">
              <div className={'thead'}>
                <p>ID</p>
                <p>Дата</p>
                <p>Время</p>
                <p>Сумма</p>
              </div>
              {!!invoiceList.length && invoiceList.map((item, index) => (
                <Invoice key={`list${item?.id}`} data={item}/>
              )
              )}
             
            </Route>
            <Route path="/products/:id">
              <ProductList data={productsList} />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
      
      </section>
    </div>
    </Router>
  );
}

export default App;
