import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../material-ui/materialui.css';

export default function ImgMediaCard({img, title, description}) {
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        className='card-image'
        component="img"
        alt=""
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://github.com" className='btn' target='_blank'>Github</a>
        <a href="https://vercel.com" className='btn' target='_blank'>Proyects</a>
      </CardActions>
    </Card>
  );
}
