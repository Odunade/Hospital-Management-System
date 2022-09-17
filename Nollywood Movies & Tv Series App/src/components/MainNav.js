import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
    
  },[value, navigate]);
  

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
    >
  
        <BottomNavigationAction
         
         label="Trending" 
         icon={<WhatshotIcon />} />
        
         <BottomNavigationAction
         label="Movies" 
         icon={<MovieIcon />} />
        
         <BottomNavigationAction 
         label="TV Series" 
         icon={<TvIcon />} />

         <BottomNavigationAction 
         label="Search" 
         icon={<SearchIcon />} />

      </BottomNavigation>
    </Box>
  );
}
