
import React from 'react';

interface FilterControlsProps {
  categories: string[];
  authors: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedAuthor: string;
  setSelectedAuthor: (author: string) => void;
}

export default function FilterControls({
  categories,
  authors,
  selectedCategory,
  setSelectedCategory,
  selectedAuthor,
  setSelectedAuthor,
}: FilterControlsProps): React.ReactNode {
  const getCategoryName = (cat: string) => cat === 'all' ? 'সকল ক্যাটাগরি' : cat;
  const getAuthorName = (auth: string) => auth === 'all' ? 'সকল লেখক' : auth;

  return (
    <div className="mb-8 p-4 bg-white rounded-lg shadow-sm flex flex-col md:flex-row gap-4 justify-center items-center">
      <div className="w-full md:w-auto">
        <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-1">ক্যাটাগরি:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          {categories.map(cat => <option key={cat} value={cat}>{getCategoryName(cat)}</option>)}
        </select>
      </div>
      <div className="w-full md:w-auto">
        <label htmlFor="author-select" className="block text-sm font-medium text-gray-700 mb-1">লেখক:</label>
        <select
          id="author-select"
          value={selectedAuthor}
          onChange={(e) => setSelectedAuthor(e.target.value)}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        >
          {authors.map(auth => <option key={auth} value={auth}>{getAuthorName(auth)}</option>)}
        </select>
      </div>
    </div>
  );
}
