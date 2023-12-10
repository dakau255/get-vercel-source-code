
// pages/index.js
import Head from 'next/head';

function Home({ randomImage }) {
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

