
import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types';
import { CloseIcon } from '../assets/icons';

interface PdfViewerModalProps {
  book: Book;
  onClose: () => void;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const modal = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
};

export default function PdfViewerModal({ book, onClose }: PdfViewerModalProps): React.ReactNode {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-2 sm:p-4"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        variants={modal}
        className="bg-gray-200 rounded-lg shadow-2xl w-full h-full flex flex-col"
      >
        <header className="flex justify-between items-center p-3 bg-gray-800 text-white rounded-t-lg">
          <h3 className="font-bold text-lg truncate">{book.title}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-600">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        <div className="flex-grow w-full h-full p-1 bg-gray-500">
          <iframe
            src={book.pdfUrl}
            title={book.title}
            className="w-full h-full border-none"
            allow="fullscreen"
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
}
