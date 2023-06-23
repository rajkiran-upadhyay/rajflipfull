import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import store from '../../redux/store'
//import { getProductById } from '../../service/api';
import { useEffect } from 'react'
import { getProductDetails } from '../../redux/actions/productActions'
import { Box ,styled,Grid} from '@mui/material'
import ActionItem from './ActionItem'
import ProductDetail from './ProductDetail'


const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;
const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      margin: 0
  }
}))


const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;


const DetailView = () => {
 
  const {  product} = useSelector(state => state.getProductDetails);

  const { id } = useParams();

  

  const dispatch = useDispatch();
  console.log(dispatch)

  useEffect(() => {
    if(id){
    dispatch(getProductDetails(id));}
}, [dispatch,id]);




  return (
    <Component>
    <Box></Box>
    { product && Object.keys(product).length &&
        <Container container> 
            <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
                
                <ProductDetail product={product}/>
              
            </RightContainer>
        </Container>
    }   
</Component>

  )
}

export default DetailView