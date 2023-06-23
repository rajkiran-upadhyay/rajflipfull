import { useEffect } from 'react'
import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import { Box,styled } from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'//
import {getProducts }from '../../redux/actions/productActions'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
const Component=styled(Box)`
padding: 10px;
background:#f2f2f2;`
const Home = () => {
  const {products}= useSelector(state=>state.getProducts);
  const dispatch=useDispatch();

  useEffect(()=>{ dispatch(getProducts())},[dispatch]);//api call when as soon as home compt loads
  return (//dispatch is function of reducer
      <>
        <NavBar/>
        <Component>
          <Banner/>
          <MidSlide products={products} title='deal of the day' timer={true}/>
          <MidSection/>
          <Slide products={products} title='discount' timer={false}/>
          <Slide products={products}title='suggestions' timer={false}/>
        </Component>
        </>
    );
};
export default Home;