import React from 'react'
import { CurrencyNews, GoldNews, EmtiaNews, CryptoNews, ExchangeNews, NewsLinks, } from "../NavigationComponent/index"
import MainPage from '../mainpage/MainPage';
import { Route, Routes,} from "react-router-dom";
import NewsList from "../addForm/NewsList";
import Credit from '../NavigationComponent/creditpage/Credit';
const Location = () => {
       
  return (
    <div className="Header__Container_navigation-Routes" >
            <Routes>
              <Route path="/" exact Component={MainPage} />
              <Route path="/currency" Component={CurrencyNews} />
              <Route path="/gold" Component={GoldNews} />
              <Route path="/emtia" Component={EmtiaNews} />
              <Route path="/cyrpto" Component={CryptoNews} />
              <Route path="/exchange" Component={ExchangeNews} />
              <Route path="/news" Component={NewsList}/>
              <Route path= "/credit" Component={Credit}></Route>
              <Route path="/:title" Component = {NewsLinks} />
            </Routes>
          </div>
  )
}

export default Location