import React from "react";
import { List,ListItem,Divider,ListItemText,ListItemAvatar,Avatar,Typography} from "@mui/material"
import StarIcon from '@mui/icons-material/Star';


export default function Reviews({ reviews }) {
  // const { comment, title, user, rate, date } = reviews;

// {
//   user: {
//     fullName: "David Kadosh",
//     img: "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   },
//   title: "Great",
//   comment: "helped me alot",
//   rate: 5,
//   date: new Date("01/04/2023")
// },

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {reviews ? (
        reviews.map((review, i) => (
          <>
            <ListItem key={i} alignItems="flex-start" >
              <ListItemAvatar>
                <Avatar alt="user img" src={review.user.img} />
              </ListItemAvatar>
              <ListItemText
                primary={review.user.fullName}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {review.user.name}
                    </Typography>
                  </>
                }
                />
                <Typography>{review.title}</Typography>
                <Typography>{review.comment}</Typography>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))
      ) : (
        <ListItem alignItems="flex-start">no comments found</ListItem>
      )}
    </List>
  );
}
