
import React from 'react';

export const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.447-4.435-9.884-9.888-9.884-5.448 0-9.886 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.287.468-1.03 3.779 3.81-1.004.478.282z" />
    <path d="M14.242 15.753c-.347.534-1.22.95-1.724 1.025-.504.075-1.026.068-1.52-.164-.494-.232-2.115-1.03-3.94-2.861-1.826-1.83-3.059-4.089-3.19-4.329-.131-.24-.262-.51-.262-.816s.196-.64.426-.871c.231-.23.491-.305.732-.305.241 0 .47.075.671.225.201.15.656.779.711.854.055.075.111.18.056.33-.056.15-.196.39-.336.54-.14.15-.271.33-.426.495-.155.165-.301.331-.131.621.17.29.771 1.399 1.749 2.378 1.242 1.241 2.361 1.631 2.67 1.83.31.199.48.165.651-.086.17-.251.726-.844.896-1.096s.331-.375.541-.225c.21.15.953.45 1.119.525.165.075.291.12.331.18.04.06.04.33-.095.621z" />
  </svg>
);

export const CloseIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const KeyIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
    />
  </svg>
);

export const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        {...props}
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" 
        />
    </svg>
);
