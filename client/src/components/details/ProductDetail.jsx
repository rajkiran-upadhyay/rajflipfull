import React from 'react'
import { Typography,Box,styled, TableRow,Table,TableCell,TableBody } from '@mui/material'
import {LocalOffer as Badge} from '@mui/icons-material'

const SmallText=styled(Box)`
font-size:14px;
vertical-align:baseline;
&>p{
    font-size:14px;
    margin-top:10px;
}

`
const StyleddBadge=styled(Badge)`
margin-right:10px;
font-size:15px;
color:#00cc00;

`

const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align:baseline;
&> td{

    font-size:14px;
    margin-top:10px;
    border:none;
}


`
const ProductDetail = ({product}) => {
    const date=new Date(new Date().getTime()+(5*24*60*60*1000))
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Reviews
                <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="jj" /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span"style={{ color: '#388E3C' }}>{product.price.discount} off</Box>

            </Typography>
            <Typography>Available offers</Typography>
            <SmallText>
                <Typography><StyleddBadge/> T&C Apply</Typography>
         
               

            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                    <TableCell style={{color:'#878787'}}>Delivery  </TableCell>
                    <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} </TableCell>
                    </ColumnText>

                    <ColumnText>
                    <TableCell style={{color:'#878787'}}>Delivery  </TableCell>
                    <TableCell>No waranty </TableCell>
                    </ColumnText>

                    <ColumnText>
                    <TableCell style={{color:'#878787'}}>Seller </TableCell>
                    <TableCell>
                        <Box component='span' style={{color:'#2874f0'}}>super</Box>
                        <Typography>Gst </Typography>
                        <Typography>View more cell rs{product.price.cost}</Typography>


                    </TableCell>
                    </ColumnText>

                    <ColumnText>
                    <TableCell colSpan={2}>
                        <img src={adURL} style={{width:390}} alt="img"/> </TableCell>
                    <TableCell>No waranty </TableCell>
                    </ColumnText>

                    <ColumnText>
                    <TableCell style={{color:'#878787'}}>Description </TableCell>
                    <TableCell>{product.description} </TableCell>
                    </ColumnText>



                </TableBody>



            </Table>



        </>
    )
}

export default ProductDetail