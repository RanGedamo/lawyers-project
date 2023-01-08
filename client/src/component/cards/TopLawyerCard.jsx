import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar, Typography, List, ListItem } from "@mui/material"
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Reviews from "./Reviews";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TopLawyerCard({lawyer}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
          size={"xl"}
          src={lawyer.img}
          alt={"lawyer"}
          css={{
            border: "2px solid white",
          }}
        />
  }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={lawyer.fullName}
        subheader={lawyer.filedCategory}
        // subheader={`service cost:  ${lawyer.cost}$`}
      />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography> */}
                  <List>
            {lawyer.servicesSubCategories?.map((category, i) => (
              <ListItem
                key={i}
                sx={{
                  display: "list-item",
                }}
              >
                {category}
              </ListItem>
            ))}
          </List>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Reviwes:</Typography>
          <Reviews reviews={lawyer.reviwes} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
