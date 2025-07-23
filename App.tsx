
import React, { useState, useMemo, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Book } from './types';
import { books as allBooks } from './data/books';
import Header from './components/Header';
import Footer from './components/Footer';
import BookList from './components/BookList';
import FilterControls from './components/FilterControls';
import PurchaseModal from './components/PurchaseModal';
import UnlockModal from './components/UnlockModal';
import PdfViewerModal from './components/PdfViewerModal';

export default function App(): React.ReactNode {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAuthor, setSelectedAuthor] = useState<string>('all');

  const [isPurchaseModalOpen, setPurchaseModalOpen] = useState<boolean>(false);
  const [isUnlockModalOpen, setUnlockModalOpen] = useState<boolean>(false);
  const [isPdfViewerOpen, setPdfViewerOpen] = useState<boolean>(false);
  
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const categories = useMemo(() => ['all', ...Array.from(new Set(allBooks.map(b => b.category)))], []);
  const authors = useMemo(() => ['all', ...Array.from(new Set(allBooks.map(b => b.author)))], []);

  const filteredBooks = useMemo(() => {
    return allBooks.filter(book => {
      const categoryMatch = selectedCategory === 'all' || book.category === selectedCategory;
      const authorMatch = selectedAuthor === 'all' || book.author === selectedAuthor;
      return categoryMatch && authorMatch;
    });
  }, [selectedCategory, selectedAuthor]);

  const handleBuyClick = useCallback((book: Book) => {
    setSelectedBook(book);
    setPurchaseModalOpen(true);
  }, []);

  const handleUnlockClick = useCallback((book: Book) => {
    setSelectedBook(book);
    setUnlockModalOpen(true);
  }, []);

  const handleUnlockSubmit = useCallback((code: string) => {
    if (selectedBook && code === selectedBook.unlockCode) {
      setUnlockModalOpen(false);
      setPdfViewerOpen(true);
      return true;
    }
    return false;
  }, [selectedBook]);

  const closeAllModals = () => {
    setPurchaseModalOpen(false);
    setUnlockModalOpen(false);
    setPdfViewerOpen(false);
    // Keep selectedBook for a smoother exit animation, then clear it if needed.
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col antialiased text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <FilterControls
          categories={categories}
          authors={authors}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedAuthor={selectedAuthor}
          setSelectedAuthor={setSelectedAuthor}
        />
        <BookList
          books={filteredBooks}
          onBuyClick={handleBuyClick}
          onUnlockClick={handleUnlockClick}
        />
      </main>
      <Footer />

      <AnimatePresence>
        {isPurchaseModalOpen && selectedBook && (
          <PurchaseModal book={selectedBook} onClose={closeAllModals} />
        )}
        {isUnlockModalOpen && selectedBook && (
          <UnlockModal book={selectedBook} onClose={closeAllModals} onUnlockSubmit={handleUnlockSubmit} />
        )}
        {isPdfViewerOpen && selectedBook && (
          <PdfViewerModal book={selectedBook} onClose={closeAllModals} />
        )}
      </AnimatePresence>
    </div>
  );
}
