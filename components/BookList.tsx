
import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types';
import BookCard from './BookCard';

interface BookListProps {
  books: Book[];
  onBuyClick: (book: Book) => void;
  onUnlockClick: (book: Book) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function BookList({ books, onBuyClick, onUnlockClick }: BookListProps): React.ReactNode {
  if (books.length === 0) {
    return <div className="text-center py-10 text-gray-500">কোনো বই পাওয়া যায়নি।</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          onBuyClick={() => onBuyClick(book)}
          onUnlockClick={() => onUnlockClick(book)}
        />
      ))}
    </motion.div>
  );
}
