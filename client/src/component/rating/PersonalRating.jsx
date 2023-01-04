import react, {useState} from "react";
import { Box,Rating} from "@mui/material"
import StarIcon from '@mui/icons-material/Star';

export default function PersonalRating(rate) {
  const [value, setValue] = useState(rate);
  const [hover, setHover] = useState(-1);


  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }  

  return (
    <Box
    sx={{
      width: 200,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Rating
      name="hover-feedback"
      value={value}
      precision={0.5}
      getLabelText={getLabelText}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      onChangeActive={(event, newHover) => {
        setHover(newHover);
      }}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    {value !== null && (
      <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
    )}
  </Box>  );
}
