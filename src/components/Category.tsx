import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import kittyHomeIcon from '../assets/kitty_siruett.png';
import kittyFaceIcon from '../assets/kitty_face.png';
import cinnamonFaceIcon from '../assets/cinamon.png';
import myunFaceIcon from '../assets/myuun.png';
import kuromiFaceIcon from '../assets/kuromi.png';

type CategoryProps = {
  onCategorySelect: (selectedTag: string | null) => void;
};

export default function Category({ onCategorySelect }: CategoryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const categories = [
    { label: 'Popular', icon: <img src={kittyHomeIcon} alt="Popular" height={24} /> },
    { label: 'Cat', icon: <img src={kittyFaceIcon} alt="Cat" height={24} /> },
    { label: 'Dog', icon: <img src={cinnamonFaceIcon} alt="Dog" height={24} /> },
    { label: 'Komugi', icon: <img src={myunFaceIcon} alt="Komugi" width={40} /> },
    { label: 'Kuromi', icon: <img src={kuromiFaceIcon} alt="Kuromi" width={40} /> }
  ];

  const handleSelect = (index: number) => {
    const newIndex = index === selectedIndex ? null : index;
    setSelectedIndex(newIndex);
    onCategorySelect(newIndex !== null ? categories[newIndex].label : null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 3,
        mt: 2,
      }}
    >
      {categories.map((category, index) => (
        <Box
          key={index}
          sx={{ textAlign: 'center', cursor: 'pointer' }}
          onClick={() => handleSelect(index)}
        >
          <Paper
            elevation={0}
            sx={{
              width: 60,
              height: 60,
              bgcolor: '#fce4ec',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              mx: 'auto',
              boxShadow: selectedIndex === index ? '0 0 10px #ff80ab' : 'none',
              transition: 'box-shadow 0.2s ease',
            }}
          >
            {category.icon}
          </Paper>
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'block',
              color: selectedIndex === index ? '#d81b60' : '#28497D',
              fontWeight: selectedIndex === index ? 'bold' : 'normal',
              transition: 'color 0.3s ease',
            }}
          >
            {category.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
