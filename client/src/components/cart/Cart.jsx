import { Grid, Typography, Box, styled, Button } from '@mui/material';
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;`;
const Component = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        padding: '15px 0'
    }
}));
const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;`;
const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;`;
const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
            {
                cartItems.length ?
                    <Component container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} />
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton>place order</StyledButton>
                            </ButtonWrapper>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems} />
                        </Grid>
                    </Component>
                    : <EmptyCart />
            }
       </>
    )
}
export default Cart