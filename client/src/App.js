

import DetailView from './components/details/DetailView';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />

        <Box style={{ marginTop: 60 }}>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path="/product/" >
              <Route path=":id" element={<DetailView />} />

            </Route>
            <Route path='/cart' element={<Cart />} />


          </Routes>

        </Box>
      </BrowserRouter>
    </DataProvider>


  );
}

export default App;
//ctrl + shift + ` to open vs code terminal
//shop>npx create-react-app client

//client>npm i @mui/material @emotion/react @emotion/styled
//client>npm i @mui/icons-material
//client> npm i react-multi-carousel


//server>npm init
//server > npm i express
//server>npm i nodemon
//server> npm i mongoose
//server> npm i dotenv
//client>npm i axios
//server>npm i cors
//server>npm i body-parser
//client>npm i redux
//client>npm i react-redux
//client>npm i redux-devtools-extension
//client>npm i redux-thunk
//client>npm i react-countdown
//client>npm i react-router-dom
// <Route path='/edit/' element={<EditUser />}>
//<Route path=':id' element={<EditUser />} />
//</Route>
//
//
//
