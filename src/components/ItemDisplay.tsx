import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
});

type ProductProps = {
  productName: string;
  productImage: string;
  productPrice: number;
};

export default function ProductCard({ productName, productImage, productPrice }: ProductProps) {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 3,
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: 170,
            height: 240,
            borderRadius: 5,
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            backgroundImage: `url(${productImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
              boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
            },
          }}
          onClick={handleClick}
        >
          <ShoppingBagIcon
            sx={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              fontSize: 40,
              color: clicked ? '#ff4081' : 'white',
              transform: clicked ? 'scale(1.15)' : 'scale(1)',
              transition: 'color 0.3s ease, transform 0.3s ease',
              userSelect: 'none',
              textShadow: '0 0 6px rgba(0,0,0,0.7)',
            }}
          />
        </Box>

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
          title={productName}
        >
          {productName}
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
          ¥{productPrice.toLocaleString()}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
