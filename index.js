import { books } from './data/books.js';

const WHATSAPP_NUMBER = '+8801234567890'; // Replace with your WhatsApp number
const BKASH_NUMBER = '01234567890'; // Replace with your bKash number

// --- STATE ---
let selectedCategory = 'all';
let selectedAuthor = 'all';
let selectedBook = null;

// --- DOM ELEMENTS ---
const bookListEl = document.getElementById('book-list');
const noBooksFoundEl = document.getElementById('no-books-found');
const categorySelectEl = document.getElementById('category-select');
const authorSelectEl = document.getElementById('author-select');

// Modal Elements
const purchaseModalEl = document.getElementById('purchase-modal');
const unlockModalEl = document.getElementById('unlock-modal');

const purchaseModalContentEl = purchaseModalEl.querySelector('.space-y-4');
const purchaseBookTitleEl = document.getElementById('purchase-book-title');
const purchaseBookPriceEl = document.getElementById('purchase-book-price');

const unlockBookTitleEl = document.getElementById('unlock-book-title');
const unlockForm = document.getElementById('unlock-form');
const unlockCodeInput = document.getElementById('unlock-code-input');
const unlockErrorEl = document.getElementById('unlock-error');


// --- ICONS ---
const keyIconSVG = `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>`;
const whatsAppIconSVG = `<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.447-4.435-9.884-9.888-9.884-5.448 0-9.886 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.287.468-1.03 3.779 3.81-1.004.478.282z" /><path d="M14.242 15.753c-.347.534-1.22.95-1.724 1.025-.504.075-1.026.068-1.52-.164-.494-.232-2.115-1.03-3.94-2.861-1.826-1.83-3.059-4.089-3.19-4.329-.131-.24-.262-.51-.262-.816s.196-.64.426-.871c.231-.23.491-.305.732-.305.241 0 .47.075.671.225.201.15.656.779.711.854.055.075.111.18.056.33-.056.15-.196.39-.336.54-.14.15-.271.33-.426.495-.155.165-.301.331-.131.621.17.29.771 1.399 1.749 2.378 1.242 1.241 2.361 1.631 2.67 1.83.31.199.48.165.651-.086.17-.251.726-.844.896-1.096s.331-.375.541-.225c.21.15.953.45 1.119.525.165.075.291.12.331.18.04.06.04.33-.095.621z" /></svg>`;

// --- RENDER FUNCTIONS ---
function createBookCardHTML(book) {
  return `
    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl" data-book-id="${book.id}">
      <img src="${book.coverImage}" alt="${book.title}" class="w-full h-64 object-cover">
      <div class="p-5 flex flex-col flex-grow">
        <h3 class="text-xl font-bold text-green-800">${book.title}</h3>
        <p class="text-sm text-gray-600 mt-1">লেখক: ${book.author}</p>
        <p class="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1 self-start mt-2">${book.category}</p>
        <div class="mt-4 mb-2 flex-grow">
          <p class="text-2xl font-bold text-gray-800">মূল্য: ${book.price} টাকা</p>
        </div>
        <div class="mt-auto space-y-2">
           <button class="buy-btn w-full bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition-colors duration-300">
            এখনই কিনুন
          </button>
          <button class="unlock-btn w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300">
            ${keyIconSVG}
            আনলক করুন
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderBooks() {
  const filteredBooks = books.filter(book => {
    const categoryMatch = selectedCategory === 'all' || book.category === selectedCategory;
    const authorMatch = selectedAuthor === 'all' || book.author === selectedAuthor;
    return categoryMatch && authorMatch;
  });

  if (filteredBooks.length === 0) {
    bookListEl.classList.add('hidden');
    noBooksFoundEl.classList.remove('hidden');
  } else {
    bookListEl.classList.remove('hidden');
    noBooksFoundEl.classList.add('hidden');
    bookListEl.innerHTML = filteredBooks.map(createBookCardHTML).join('');
  }
}

function populateFilters() {
    const categories = ['all', ...new Set(books.map(b => b.category))];
    const authors = ['all', ...new Set(books.map(b => b.author))];

    const getCategoryName = (cat) => cat === 'all' ? 'সকল ক্যাটাগরি' : cat;
    const getAuthorName = (auth) => auth === 'all' ? 'সকল লেখক' : auth;

    categorySelectEl.innerHTML = categories.map(c => `<option value="${c}">${getCategoryName(c)}</option>`).join('');
    authorSelectEl.innerHTML = authors.map(a => `<option value="${a}">${getAuthorName(a)}</option>`).join('');
}

// --- MODAL LOGIC ---
function openModal(modalEl) {
    modalEl.classList.remove('modal-hidden');
    modalEl.classList.add('modal-visible');
    // For animation
    setTimeout(() => modalEl.querySelector('.transform').classList.remove('scale-95'), 10);
}

function closeModal(modalEl) {
    modalEl.querySelector('.transform').classList.add('scale-95');
    modalEl.classList.remove('modal-visible');
    modalEl.classList.add('modal-hidden');
}

function closeAllModals() {
    [purchaseModalEl, unlockModalEl].forEach(el => {
        if(el.classList.contains('modal-visible')) closeModal(el);
    });
}

function showPurchaseModal(book) {
    selectedBook = book;
    purchaseBookTitleEl.textContent = `বইয়ের নাম: ${book.title}`;
    purchaseBookPriceEl.textContent = `মূল্য: ${book.price} টাকা`;
    purchaseModalContentEl.innerHTML = `
        <div class="p-4 bg-green-50 rounded-lg border border-green-200">
            <p class="font-bold">ধাপ ১: পেমেন্ট করুন</p>
            <p>আপনার বিকাশ একাউন্ট থেকে নিচের নম্বরে <strong>${book.price} টাকা</strong> Send Money করুন।</p>
            <p class="text-center font-bold text-2xl my-2 bg-white py-2 rounded">${BKASH_NUMBER}</p>
            <p class="text-sm">রেফারেন্স হিসেবে বইয়ের নাম ("${book.title}") লিখতে পারেন।</p>
        </div>
        <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p class="font-bold">ধাপ ২: হোয়াটসঅ্যাপে যোগাযোগ করুন</p>
            <p>পেমেন্টের একটি স্ক্রিনশট নিয়ে নিচের হোয়াটসঅ্যাপ নম্বরে পাঠিয়ে দিন।</p>
             <a 
                href="https://wa.me/${WHATSAPP_NUMBER}?text=I have paid for the book: ${book.title}"
                target="_blank" 
                rel="noopener noreferrer"
                class="mt-2 w-full flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 transition-colors duration-300">
                ${whatsAppIconSVG}
                <span>হোয়াটসঅ্যাপে মেসেজ দিন</span>
            </a>
        </div>
        <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p class="font-bold">ধাপ ৩: আনলক কোড সংগ্রহ করুন</p>
            <p>যাচাই করার পর আমরা আপনাকে হোয়াটসঅ্যাপে বইটির জন্য একটি ইউনিক আনলক কোড পাঠিয়ে দেব।</p>
        </div>
    `;
    openModal(purchaseModalEl);
}

function showUnlockModal(book) {
    selectedBook = book;
    unlockBookTitleEl.textContent = `"${book.title}" বইটি পড়ার জন্য আপনাকে দেওয়া ইউনিক কোডটি নিচে প্রবেশ করান।`;
    unlockCodeInput.value = '';
    unlockErrorEl.classList.add('hidden');
    openModal(unlockModalEl);
}

// --- EVENT HANDLERS ---
function handleFilterChange() {
    selectedCategory = categorySelectEl.value;
    selectedAuthor = authorSelectEl.value;
    renderBooks();
}

function handleBookListClick(e) {
    const card = e.target.closest('[data-book-id]');
    if (!card) return;

    const bookId = parseInt(card.dataset.bookId, 10);
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    if (e.target.closest('.buy-btn')) {
        showPurchaseModal(book);
    } else if (e.target.closest('.unlock-btn')) {
        showUnlockModal(book);
    }
}

function handleUnlockSubmit(e) {
    e.preventDefault();
    const code = unlockCodeInput.value.trim();
    if (selectedBook && code === selectedBook.unlockCode) {
        unlockErrorEl.classList.add('hidden');
        closeModal(unlockModalEl);
        // Open the PDF in a new tab
        window.open(selectedBook.pdfUrl, '_blank');
    } else {
        unlockErrorEl.textContent = 'আপনার দেওয়া কোডটি সঠিক নয়। অনুগ্রহ করে আবার চেষ্টা করুন।';
        unlockErrorEl.classList.remove('hidden');
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Populate UI
    populateFilters();
    renderBooks();

    // Attach event listeners
    categorySelectEl.addEventListener('change', handleFilterChange);
    authorSelectEl.addEventListener('change', handleFilterChange);
    bookListEl.addEventListener('click', handleBookListClick);
    unlockForm.addEventListener('submit', handleUnlockSubmit);
    
    // Modal close listeners
    document.getElementById('purchase-modal-close').addEventListener('click', () => closeModal(purchaseModalEl));
    document.getElementById('unlock-modal-close').addEventListener('click', () => closeModal(unlockModalEl));
    
    // Close modal on backdrop click
    [purchaseModalEl, unlockModalEl].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
});