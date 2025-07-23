
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types';
import { CloseIcon, KeyIcon } from '../assets/icons';

interface UnlockModalProps {
  book: Book;
  onClose: () => void;
  onUnlockSubmit: (code: string) => boolean;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const modal = {
  hidden: { y: "-50vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.2, type: 'spring', stiffness: 120 } }
};

export default function UnlockModal({ book, onClose, onUnlockSubmit }: UnlockModalProps): React.ReactNode {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!code.trim()) {
      setError('দয়া করে আপনার আনলক কোড প্রবেশ করান।');
      return;
    }
    const success = onUnlockSubmit(code);
    if (!success) {
      setError('আপনার দেওয়া কোডটি সঠিক নয়। অনুগ্রহ করে আবার চেষ্টা করুন।');
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        variants={modal}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <KeyIcon className="w-12 h-12 mx-auto text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">বই আনলক করুন</h2>
          <p className="text-gray-600 mt-2">"{book.title}" বইটি পড়ার জন্য আপনাকে দেওয়া ইউনিক কোডটি নিচে প্রবেশ করান।</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="unlock-code" className="block text-sm font-medium text-gray-700 sr-only">
              আনলক কোড
            </label>
            <input
              type="text"
              id="unlock-code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="এখানে কোড লিখুন"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-lg text-center"
              autoFocus
            />
          </div>

          {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-bold py-3 px-4 rounded-md hover:bg-green-800 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            বইটি খুলুন
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
