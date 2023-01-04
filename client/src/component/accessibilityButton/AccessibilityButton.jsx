import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import DoneIcon from '@mui/icons-material/Done';
import AccessibleIcon from '@mui/icons-material/Accessible';

export default function AccessibilityButton() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<AccessibleIcon openIcon={<DoneIcon />} />}
      >
      </SpeedDial>
    </Box>
  );
}
