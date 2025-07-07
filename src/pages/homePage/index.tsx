// src/pages/homePage/index.tsx

import React from 'react';
import Category from '../../components/Category';
import BoxSx from '../../components/ItemDisplay';
import './index.css';
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <div>
    <Category />
    {/* <div className="boxsx"> */}
    <Box sx={{ display: 'flex', flexWrap: "wrap", justifyContent: "center" }}>
        <BoxSx  />
        <BoxSx />
        <BoxSx />
        <BoxSx />
        <BoxSx />
        <BoxSx />
    </Box>
    {/* </div> */}


      <h1>🏠 Home Page</h1>
      <p>ホームページのコンテンツです。</p>
    </div>
  );
};

export default HomePage;
