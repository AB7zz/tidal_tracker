import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import SailingIcon from '@mui/icons-material/Sailing';
import RadarIcon from '@mui/icons-material/Radar';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ExploreIcon from '@mui/icons-material/Explore';
import { Link } from 'react-router-dom';

export default function BottomNav() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <BottomNavigation className='bg-blue-500 h-20' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', alignItems: 'center' }} value={value} onChange={handleChange}>
            <Link to='/'>
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeIcon style={{color: 'white', transform: 'scale(1.5)'}} />}
                />
            </Link>
            <Link to='/page2'>
                <BottomNavigationAction
                    label="Sail"
                    value="sail"
                    icon={<SailingIcon style={{color: 'white', transform: 'scale(1.5)'}}/>}
                />
            </Link>
            <Link to='page3'>
                <BottomNavigationAction
                    label="Radar"
                    value="radar"
                    icon={<RadarIcon style={{color: 'white', transform: 'scale(1.5)'}}/>}
                />
            </Link>
            <Link to='page4'>
                <BottomNavigationAction
                    label="Compass"
                    value="compass"
                    icon={<ExploreIcon style={{color: 'white', transform: 'scale(1.5)'}}/>}
                />
            </Link>
        </BottomNavigation>
    );
}