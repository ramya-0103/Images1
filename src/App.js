import React, { useState } from 'react';
import News from './components/News';
import Search from './components/Search';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);  // Update the search query
  };

  const handleSelectCategory = (selectedCategory) => {
    setCategory(selectedCategory);
    setQuery(''); // Reset the search query when selecting a new category
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <CategoryFilter onSelectCategory={handleSelectCategory} />
      <News category={category} query={query} />
    </div>
  );
};

export default App;
