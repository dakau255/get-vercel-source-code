// pages/index.js
import Head from 'next/head';
import { useEffect } from 'react';

function Home() {
  const imageArray = [
    'https://static-ca-cdn.eporner.com/gallery/zf/iR/rHRQlWtiRzf/8012118-black-ebony-nude-and-no-nude-34-99-2_880x660.jpg',
        'https://www.laweekly.com/wp-content/uploads/2021/08/Screen-Shot-2021-08-03-at-6.33.44-PM.png',
        'https://i0.wp.com/leaktube.net/wp-content/uploads/2021/09/Daleeshaa-Nudes-05-Leaktube.net_-scaled.jpg?fit=768%2C1024&ssl=1',
    // Add more image URLs as needed
  ];

  useEffect(() => {
    // Your logic to dynamically change metadata
    const newImage = getRandomImage();

    // Change og:image dynamically
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', newImage);
    }
  }, []);

  // Function to get a random element from an array
  function getRandomImage() {
    return imageArray[Math.floor(Math.random() * imageArray.length)];
  }

  return (
    <div>
      <Head>
        <meta property="og:image" content="default-thumbnail.jpg" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your Page Description" />
        <meta property="og:url" content="Your Page URL" />
        {/* Other meta tags */}
      </Head>
      
      {/* Your page content */}
      <h1>Your Page Content</h1>
    </div>
  );
}


export default Home;
