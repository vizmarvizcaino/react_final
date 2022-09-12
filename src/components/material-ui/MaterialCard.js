import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../material-ui/materialui.css';

export default function ImgMediaCard({ img, title, description, github, proyect }) {
  return (
    <article className="portfolio__item">
      <Card sx={{ maxWidth: 345 }} className='card'>
        <CardMedia
          className='card-image portfolio__item-image'
          component="img"
          alt=""
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='portfolio__item-h3' >
            {title}
          </Typography>
          <Typography variant="body2" color="white">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={proyect} className='btn' target='_blank'>Proyects</a>
          </div>
        </CardActions>
      </Card>
    </article>

  );
}
