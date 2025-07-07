import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import myunOhana from '../assets/myun_ohana.jpg';
import myunNanohana  from '../assets/myun_nanohana.jpg';
import myunHimawari from '../assets/myun_himawari.jpg';
import kittyOdeko from '../assets/kitty_odeko.jpg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
});

export default function ProductCard() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* ページ全体の中央寄せコンテナ */}
      <Box
        sx={{

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 3,
          flexDirection: 'column',          
        }}
      >
        {/* 画像背景のボックス */}
        <Box
          sx={{
            width: 170,
            height: 240,
            borderRadius: 5,
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            backgroundImage: `url(${kittyOdeko})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
            },
          }}
          onClick={handleClick}
        >
          {/* 右下に買い物バッグアイコン */}
          <ShoppingBagIcon
            sx={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              fontSize: 40,
              color: clicked ? '#ff4081' : 'white',
              transition: 'color 0.3s ease, transform 0.3s ease',
              transform: clicked ? 'scale(1.15)' : 'scale(1)',
              userSelect: 'none',
              textShadow: '0 0 6px rgba(0,0,0,0.7)',
            }}
          />
        </Box>

        {/* 商品名（ボックスの真下に配置） */}
        <Typography
        variant="h6"
        sx={{
            color: '#28497D',
            fontWeight: '600',
            mt: 0.3,
            textAlign: 'first',
            whiteSpace: 'wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: 170, 
            fontSize: '16px',  
        }}
        title="Awesome Product"
        >
        Awesome Product
        </Typography>

        <Typography
        variant="h5"
        sx={{
            fontWeight: 'bold',
            color: '#28497D',
            mt: 0.5,
            textAlign: 'first',
            width: 170, 
            fontSize: '20px',  
        }}
        >
        ¥12,345
        </Typography>

      </Box>
    </ThemeProvider>
  );
}
