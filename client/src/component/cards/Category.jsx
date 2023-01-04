import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

export default function Category() {

    const Lawyers = [
        {
            id:0,
            categoryName: "category 1",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:1,
            categoryName: "category 2",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:2,
            categoryName: "category 3",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:3,
            categoryName: "category 4",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:4,
            categoryName: "category 5",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:5,
            categoryName: "category 6",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:6,
            categoryName: "category 7",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:7,
            categoryName: "category 8",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:8,
            categoryName: "category 9",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:9,
            categoryName: "category 10",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:10,
            categoryName: "category 11",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
        {
            id:11,
            categoryName: "category 12",
            subCategory: [
               {
                name:'sub category 1'
               },
               {
                name:'sub category 2'
               },
               {
                name:'sub category 3'
               },
               {
                name:'sub category 3'
               },
            ]
        },
      ];
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}