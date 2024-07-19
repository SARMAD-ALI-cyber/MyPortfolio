import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import { Fragment } from 'react';
import Home from './components/Home';
import sarmad2 from 'E:\\React Prec\\prec1\\src\\assets\\sarmad2.jpg';

 function Picture(props){
  const picStyle={
    width:"250px",
    height:"250px",
    borderRadius:"50%",
    padding:"10px"
  }
  const pic=<img style={picStyle} src={props.path} alt={"Not found"}/>
  return pic;
}


function App() {
  return (
   
    <Fragment>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home  mypic={<Picture path={sarmad2}/>} />} />
          <Route path="/library" element={<h1>Hi Library!</h1>} />
          <Route path="/models" element={<h1>Hi Creator!</h1>} />
          <Route path="/contact" element={<h1>Hi Contact!</h1>} />
        </Routes>
        
      </Router>
      
    </Fragment>

  );
}



export default App;
