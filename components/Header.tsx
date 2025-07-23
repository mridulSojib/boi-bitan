
import React from 'react';
import { BookOpenIcon } from '../assets/icons';

export default function Header(): React.ReactNode {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="flex justify-center items-center gap-4 text-green-800">
           <BookOpenIcon className="w-12 h-12" />
           <h1 className="text-4xl md:text-5xl font-bold">ইসলামিক বই বিতান</h1>
        </div>
        <p className="text-gray-600 mt-2 text-lg">আপনার জ্ঞানের সঙ্গী</p>
      </div>
    </header>
  );
}
