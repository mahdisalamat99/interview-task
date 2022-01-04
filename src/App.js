import React,{useEffect , useState} from 'react';
import '../src/styles/main.scss';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
function App() {
  const [data , setData] = useState([]);
  const [loader , setLoader] = useState(true);
  const [catBtn , setCatBtn] = useState("all");

  const filter = (cat) => {
    setCatBtn(cat);
    console.log(catBtn);
  }

  const getApi = () => {
    setLoader(true)
    axios.get('http://localhost:3000/api/api.json')
    .then(response => {
      setData(response.data);
      setLoader(false);
      console.log(response.data)
    }).catch(err =>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getApi();
  },[])


  return (
    <div className="App">
      {
        loader ? (<div>Loading...</div>) : (
          <>
          <BrowserRouter>
              <Header categories={data.categories} filter={filter}/>
              <Routes>
                <Route path="/:nav" element={
                  <Home filter={catBtn} imageBlocks={data.imageBlocks} bigBlocks={data.bigBlocks} textBlocks={data.textBlocks}/>
                }/>
                <Route path="/" element={
                  <Navigate to="/all" />
                }/>

              </Routes>
              <Footer/>
          </BrowserRouter>
          </>
        )
      }
    </div>
  );
}

export default App;
