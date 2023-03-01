import './App.css';
import {Routes, Route} from "react-router-dom"
import Main from './view/Main';
import Detail from './view/Detail';
import Update from './view/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/product/:id" element={<Detail></Detail>}></Route>
        <Route path="/product/edit/:id" element={<Update></Update>}></Route>
      </Routes>
    </div>
  )
}

export default App;
