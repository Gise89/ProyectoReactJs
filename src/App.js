import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='*' element={ <h1>404 NOT FOUND</h1>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
