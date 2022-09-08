import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img6 from '../../assets/portfolio6.jpg'
import '../material-ui/materialui.css';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        className='card-image'
        component="img"
        alt="green iguana"
        height="140"
        image={Img6}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Formulario de Registro
        </Typography>
        <Typography variant="body2" color="white">
            JavaScript, Css, React, Html, Material-Ui, Bootstrap.
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://github.com" className='btn' target='_blank'>Github</a>
        <a href="https://vercel.com" className='btn' target='_blank'>Demo Proyects</a>
      </CardActions>
    </Card>
  );
}