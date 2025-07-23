
import React from 'react';
import { motion } from 'framer-motion';
import { Book } from '../types';
import { WhatsAppIcon, CloseIcon } from '../assets/icons';

interface PurchaseModalProps {
  book: Book;
  onClose: () => void;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const modal = {
  hidden: { y: "-50vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.2, type: 'spring', stiffness: 120 } }
};

export default function PurchaseModal({ book, onClose }: PurchaseModalProps): React.ReactNode {
  const WHATSAPP_NUMBER = '+8801234567890'; // Replace with your WhatsApp number
  const BKASH_NUMBER = '01234567890'; // Replace with your bKash number

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
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
          <CloseIcon className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-center text-green-800 mb-4">বইটি কেনার নিয়মাবলী</h2>
        
        <div className="text-center my-4">
          <p className="text-lg font-semibold">বইয়ের নাম: {book.title}</p>
          <p className="text-2xl font-bold text-red-600 mt-2">মূল্য: {book.price} টাকা</p>
        </div>

        <div className="space-y-4 text-gray-700">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="font-bold">ধাপ ১: পেমেন্ট করুন</p>
                <p>আপনার বিকাশ একাউন্ট থেকে নিচের নম্বরে <strong>{book.price} টাকা</strong> Send Money করুন।</p>
                <p className="text-center font-bold text-2xl my-2 bg-white py-2 rounded">{BKASH_NUMBER}</p>
                <p className="text-sm">রেফারেন্স হিসেবে বইয়ের নাম ("{book.title}") লিখতে পারেন।</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-bold">ধাপ ২: হোয়াটসঅ্যাপে যোগাযোগ করুন</p>
                <p>পেমেন্টের একটি স্ক্রিনশট নিয়ে নিচের হোয়াটসঅ্যাপ নম্বরে পাঠিয়ে দিন।</p>
                 <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=I have paid for the book: ${book.title}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
                >
                    <WhatsAppIcon className="w-6 h-6" />
                    <span>হোয়াটসঅ্যাপে মেসেজ দিন</span>
                </a>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="font-bold">ধাপ ৩: আনলক কোড সংগ্রহ করুন</p>
                <p>যাচাই করার পর আমরা আপনাকে হোয়াটসঅ্যাপে বইটির জন্য একটি ইউনিক আনলক কোড পাঠিয়ে দেব।</p>
            </div>
        </div>

      </motion.div>
    </motion.div>
  );
}
