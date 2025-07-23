
import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types';
import { KeyIcon } from '../assets/icons';

interface BookCardProps {
  book: Book;
  onBuyClick: () => void;
  onUnlockClick: () => void;
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

export default function BookCard({ book, onBuyClick, onUnlockClick }: BookCardProps): React.ReactNode {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img src={book.coverImage} alt={book.title} className="w-full h-64 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-green-800">{book.title}</h3>
        <p className="text-sm text-gray-600 mt-1">লেখক: {book.author}</p>
        <p className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1 self-start mt-2">{book.category}</p>
        <div className="mt-4 mb-2 flex-grow">
          <p className="text-2xl font-bold text-gray-800">মূল্য: {book.price} টাকা</p>
        </div>
        <div className="mt-auto space-y-2">
           <button
            onClick={onBuyClick}
            className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition-colors duration-300"
          >
            এখনই কিনুন
          </button>
          <button
            onClick={onUnlockClick}
            className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300"
          >
            <KeyIcon className="w-5 h-5"/>
            আনলক করুন
          </button>
        </div>
      </div>
    </motion.div>
  );
}
