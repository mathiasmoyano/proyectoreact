import React from 'react'; 
import './App.scss'
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';



function App() {
  const [page, setPage] = useState('list')

  return (
    <div className="App">
      <Navbar />
      {page === 'list' && <ItemListContainer greeting={'Hola aqui voy a vender vinos'}/>}
      {page === 'detail' && <ItemDetail/>}
    </div>
  );
}

export default App;
