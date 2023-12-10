
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function Home({ randomImage }) {
  const router = useRouter();

  useEffect(() => {
    // Perform redirection logic here
    // For example, redirect to https://example.com
    router.push('https://example.com');
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <div>
      <Head>
        <meta property="og:image" content={randomImage} />
        <meta property="og:title" content="Dynamic OG Image Next.js App" />
        <meta property="og:description" content="A simple Next.js app with a dynamic OG image." />
        <meta property="og:url" content="https://your-app-url" />
        {/* Other meta tags */}
      </Head>

      {/* Your page content */}
      <h1>Your Page Contentuuu</h1>
      <img src={randomImage} alt="Random Image" />
    </div>
  );
}

export async function getServerSideProps() {
  // Array of sample image URLs
  const imageArray = [
    'https://static-ca-cdn.eporner.com/gallery/zf/iR/rHRQlWtiRzf/8012118-black-ebony-nude-and-no-nude-34-99-2_880x660.jpg',
        'https://www.laweekly.com/wp-content/uploads/2021/08/Screen-Shot-2021-08-03-at-6.33.44-PM.png',
        'https://i0.wp.com/leaktube.net/wp-content/uploads/2021/09/Daleeshaa-Nudes-05-Leaktube.net_-scaled.jpg?fit=768%2C1024&ssl=1',
        'https://i.pinimg.com/564x/23/d6/c2/23d6c2343364bef616e882c06ebdb25b.jpg',
        'https://cdn.shopify.com/s/files/1/1169/7194/articles/big-butt-sex-dolls-741169.jpg?v=1573740752',
        'https://image.made-in-china.com/2f0j00RQPqvfiCJGWF/Wholesale-Real-Big-Butt-Pussy-Artificial-Ass-Sex-Toy-Big-Ass-Sex-Doll-for-Men.webp',
        'https://pbs.twimg.com/media/FqkEi1hWAAc9Np8.jpg',
        'https://t1.pictoa.com/media/galleries/290/815/2908155ff8ddb1c8e68/38218795ff8ddb531e19.jpg',
        'https://desiporn.one/contents/videos_screenshots/3000/3370/preview.mp4.jpg',
        'https://www.the-sun.com/wp-content/uploads/sites/6/2023/01/ce946316-2640-41a6-bc25-ff903524a932.jpg?strip=all&w=518',
    // Add more image URLs as needed
  ];

  // Select a random image from the array
  const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];

  return {
    props: {
      randomImage,
    },
  };
}

export default Home;
