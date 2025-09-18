'use client';

import Image from 'next/image';

// This component will receive props like a standard HTML <img> tag
type MdxImageProps = {
  src?: string;
  alt?: string;
};

export const MdxImage = ({ src = '', alt = '' }: MdxImageProps) => {    

    return (           
          <Image
            src={src}
            alt={alt}
            // width={1200} // A default large width for layout calculation
                // height={675} // A default 16:9 aspect ratio height
                fill
            className="rounded-lg shadow-md object-cover" // Adds vertical margin, rounded corners, and a subtle shadow
            sizes="(max-width: 768px) 100vw, 800px"
          />                
  );
};