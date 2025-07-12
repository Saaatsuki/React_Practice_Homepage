import * as React from 'react';
import HeaderNav from './components/NavBarHeader';
import FooterNav from './components/NavBarFooter';
import Box from '@mui/material/Box';

import HomePage from './pages/homePage';
import BookmarkPage from './pages/bookmarkPage';
import NotificationPage from './pages/notificationPage';
import ProfilePage from './pages/profilePage';

function App() {
  const [currentTab, setCurrentTab] = React.useState('home');

  const renderPage = () => {
    switch (currentTab) {
      case 'home':
        return <HomePage />;
      case 'bookmark':
        return <BookmarkPage />;
      case 'notification':
        return <NotificationPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      {/* ヘッダー固定 */}
      <HeaderNav/>

      {/* メインコンテンツ */}
      <div
        className="main"
        style={{
          paddingTop: '60px',
          paddingBottom: '56px',
          overflowY: 'auto',
          height: '100vh',
          boxSizing: 'border-box',
        }}
      >
        {renderPage()}
      </div>

      {/* フッター */}
      <FooterNav
        currentTab={currentTab}
        onTabChange={(event, newValue) => setCurrentTab(newValue)}
      />
    </div>
  );
}

export default App;
