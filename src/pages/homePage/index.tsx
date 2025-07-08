import React, { useState } from 'react'; // ← useState を追加
import Category from '../../components/Category';
import ProductCard from '../../components/ItemDisplay';
import { Box } from '@mui/material';
import sampleData from '../../../Sample_data.json';

const HomePage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredData = selectedTag
    ? sampleData.filter((item) => item.tags.includes(selectedTag))
    : sampleData;

  return (
    <div>
      <Category onCategorySelect={setSelectedTag} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mt: 3 }}>
        {filteredData.map((item, index) => (
          <ProductCard
            key={index}
            productName={item.productName}
            productImage={item.productImage}
            productPrice={item.productPrice}
          />
        ))}
      </Box>
    </div>
  );
};

export default HomePage;
