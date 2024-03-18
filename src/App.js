import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MeFollowing from './Pages/MeFollowing';
import store from './Store/Store';
import { Provider } from 'react-redux';


function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Following" element ={<MeFollowing/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    
    </>
  );
}

export default App;
