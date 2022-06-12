import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import classes from './Venue.module.css'

export default function Venue(props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' , minWidth: 350 , minHeight: 100 }} className={classes.Venue}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {props.text}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.stars}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={props.img}
        alt="Live from space album cover"
      />
    </Card>
  );
}
