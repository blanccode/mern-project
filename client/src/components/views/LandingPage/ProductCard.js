import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'










const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function ProductCard() {
    const [Products, setProducts] = useState([])


    useEffect(() => {
        axios.get('api/product/getProducts')
            .then(response => {
                if (response.data.success) {
                    setProducts(response.data.products)
                } else {
                    alert('failed to fetch products data')
                }
            })
    })

    const [spacing, setSpacing] = useState(2);

    const classes = useStyles();


    const renderCards = Products.map((products, index) => {




        return <Grid  item xs={12} sm={6} >

            <Card style={{ margin: "0px auto" ,minWidth: "100%"}} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        style={{ height: "250px"}}
                        className={classes.media}
                        // image="http://localhost:5000/uploads/1604744069652_acd-bau.jpg"
                        image={`http://localhost:5000/uploads/1604744069652_${products.images[0].path}`}
                        title=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {products.title}
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {products.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        {products.quantity}
        </Button>
                    <Button size="small" color="primary">
                        {products.price} €
        </Button>
                </CardActions>
            </Card>
        </Grid>




    })
    return (

        <Grid container justify="center" alignItems="center" spacing={3}>

            {renderCards}


        </Grid>


    );
}