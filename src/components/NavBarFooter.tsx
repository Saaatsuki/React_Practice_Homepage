import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

interface NavBarFooterProps {
  currentTab: string;
  onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export default function NavBarFooter({ currentTab, onTabChange }: NavBarFooterProps) {
  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'fixed', bottom: 0, bgcolor: '#CA709F' }}
      value={currentTab}
      onChange={onTabChange}
      showLabels
    >
      {[
        { label: 'Home', value: 'home', icon: <HomeIcon /> },
        { label: 'Bookmark', value: 'bookmark', icon: <BookmarkIcon /> },
        { label: 'Notification', value: 'notification', icon: <NotificationsIcon /> },
        { label: 'Profile', value: 'profile', icon: <PersonIcon /> },
      ].map(({ label, value, icon }) => (
        <BottomNavigationAction
          key={value}
          label={label}
          value={value}
          icon={icon}
          sx={{
            color: 'white',
            '&.Mui-selected': {
              color: '#28497D',
            },
          }}
        />
      ))}
    </BottomNavigation>
  );
}
