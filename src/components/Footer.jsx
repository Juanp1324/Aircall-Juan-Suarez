import React, {useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DialpadIcon from '@mui/icons-material/Dialpad';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Footer() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 376, borderRadius: '50%',
        '& 	.MuiBottomNavigation-root': {
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20
        }, }}>
      <BottomNavigation  
        showLabels  
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Calls" icon={<LocalPhoneIcon />} />
        <BottomNavigationAction label="Keypad" icon={<DialpadIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
}