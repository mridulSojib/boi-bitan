
import { Book } from '../types';

/*
  গুরুত্বপূর্ণ নোট:
  1. আপনার PDF ফাইলগুলো `public` ফোল্ডারের ভিতরে `pdfs` নামে একটি নতুন ফোল্ডার তৈরি করে সেখানে রাখুন।
     উদাহরণ: public/pdfs/your-book-name.pdf
  2. নিচের `books` array-তে আপনার বইয়ের তথ্য যোগ করুন।
  3. `pdfUrl` এর মান অবশ্যই `/pdfs/your-file-name.pdf` ফরম্যাটে হতে হবে।
  4. প্রতিটি বইয়ের জন্য একটি ইউনিক `unlockCode` দিন। এই কোডটিই আপনি পেমেন্টের পর গ্রাহককে দেবেন।
*/

export const books: Book[] = [
  {
    id: 1,
    title: 'নবিজির জীবন ও শিক্ষা',
    author: 'ড. മുഹമ്മദ് അബ്ദുൾ റഹീം',
    category: 'জীবনী',
    price: 150,
    coverImage: 'https://picsum.photos/seed/book1/400/600',
    pdfUrl: '/pdfs/sample-book-1.pdf', // এই ফাইলটি public/pdfs ফোল্ডারে রাখুন
    unlockCode: 'NABIJIRJIBON123',
  },
  {
    id: 2,
    title: 'কুরআনের আলো',
    author: 'মাওলানা മുഹമ്മദ് അക്രം',
    category: 'কুরআন',
    price: 200,
    coverImage: 'https://picsum.photos/seed/book2/400/600',
    pdfUrl: '/pdfs/sample-book-2.pdf', // এই ফাইলটি public/pdfs ফোল্ডারে রাখুন
    unlockCode: 'QURANERALO456',
  },
  {
    id: 3,
    title: 'ইসলামের মৌলিক বিশ্বাস',
    author: 'শায়খ আহমাদুল্লাহ',
    category: 'আকিদা',
    price: 120,
    coverImage: 'https://picsum.photos/seed/book3/400/600',
    pdfUrl: '/pdfs/sample-book-3.pdf', // এই ফাইলটি public/pdfs ফোল্ডারে রাখুন
    unlockCode: 'ISLAMERBISWAS789',
  },
  {
    id: 4,
    title: 'হাদিসের নির্বাচিত গল্প',
    author: 'মাওলানা മുഹമ്മദ് അക്രം',
    category: 'হাদিস',
    price: 180,
    coverImage: 'https://picsum.photos/seed/book4/400/600',
    pdfUrl: '/pdfs/sample-book-4.pdf', // এই ফাইলটি public/pdfs ফোল্ডারে রাখুন
    unlockCode: 'HADISERGALPO101',
  },
   {
    id: 5,
    title: 'জান্নাতের বর্ণনা',
    author: 'শায়খ আহমাদুল্লাহ',
    category: 'আকিদা',
    price: 90,
    coverImage: 'https://picsum.photos/seed/book5/400/600',
    pdfUrl: '/pdfs/sample-book-5.pdf', // এই ফাইলটি public/pdfs ফোল্ডারে রাখুন
    unlockCode: 'JANNAT2024',
  },
  {
    id: 6,
    title: 'সাহাবীদের জীবনী',
    author: 'ড. മുഹമ്മദ് അബ്ദുൾ റഹീം',
    category: 'জীবনী',
    price: 250,
    coverImage: 'https://picsum.photos/seed/book6/400/600',
    pdfUrl: '/pdfs/sample-book-6.pdf', // এই ফাইলটি public/pdfs ফোল্ডারে রাখুন
    unlockCode: 'SAHABI4LIFE',
  }
];
