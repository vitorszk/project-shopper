import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardContainer } from './styled';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const ProductCard = (props) => {
    return (
        <CardContainer>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.productInfo.name}
                    </Typography>
                    <Typography variant="body2">
                        R${props.productInfo.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => props.addToCart(props.productInfo)}>+</Button>
                    <Button size="small" onClick={() => props.removeProduct(props.productInfo)}>-</Button>
                </CardActions>
            </Card>
        </CardContainer>
    );
}

export default ProductCard