import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import ChatIcon from '@mui/icons-material/Chat';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ExploreIcon from '@mui/icons-material/Explore';

import { Link } from 'react-router-dom';

export default function BottomNav() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <BottomNavigation className='bg-blue-500 h-15' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center' }} value={value} onChange={handleChange}>
           
            <Link to='/marketplace'>
                <BottomNavigationAction
                    label="Marketplace"
                    value="Marketplace"
                    icon={<LocalGroceryStoreIcon style={{color: 'white', transform: 'scale(1.5)'}}/>}
                />
            </Link>
            <Link to='/currLoc'>
                <BottomNavigationAction
                    label="Sail"
                    value="sail"
                    icon={<SailingIcon style={{color: 'white', transform: 'scale(1.5)'}}/>}
                />
            </Link>
            <Link to='/home'>
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeIcon style={{color: 'white', transform: 'scale(1.5)'}} />}
                />
            </Link>
            <Link to='/chat'>
                <BottomNavigationAction
                    label="Chat"
                    value="chat"
                    icon={<ChatIcon style={{color: 'white', transform: 'scale(1.5)'}}/>}
                />
            </Link>
            
            <Link to='/compass'>
                <BottomNavigationAction
                    label="Compass"
                    value="compass"
                    icon={<ExploreIcon style={{color: 'white', transform: 'scale(1.5)'}}/>}
                />
            </Link>
        </BottomNavigation>
    );
}