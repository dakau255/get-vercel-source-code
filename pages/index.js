// pages/index.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/wastyles.module.css'; // Import your CSS file

function Home({ randomImage }) {
  const [time, setTime] = useState(0);
  const [likes, setLikes] = useState(134);
  const [comments, setComments] = useState(23);
  const [shares, setShares] = useState(12);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 60000);

    const updateStatsInterval = setInterval(() => {
      setLikes((prevLikes) => prevLikes + Math.floor(Math.random() * 3));
      setComments((prevComments) => prevComments + Math.floor(Math.random() * 2));
      setShares((prevShares) => prevShares + Math.floor(Math.random() * 2));
    }, 5000);

    // Cleanup intervals
    return () => {
      clearInterval(timeInterval);
      clearInterval(updateStatsInterval);
    };
  }, []);

  const handleLikedClick = () => {
    // Handle liked click
  };

  const handleGoClick = () => {
    // Handle go click
  };

  const handleConfirmClick = () => {
    // Handle confirm click
  };

  const handleWhatsAppClick = () => {
    // Handle WhatsApp click
  };

  const handleOfferClick = () => {
    // Handle offer click
  };

  return (
    <div>
      <Head>
        <meta property="og:image" content={randomImage} />
        <meta property="og:title" content="Dynamic OG Image Next.js App" />
        <meta property="og:description" content="A simple Next.js app with a dynamic OG image." />
        <meta property="og:url" content="https://your-app-url" />
        {/* Other meta tags */}
      </Head>

      {/* Your existing HTML with added styles */}
      <div className={`${styles.post} post`} width="100%">
       
      <div id="intro">
         
		
            <p class="welcome">
			<img src="https://i.pinimg.com/736x/29/62/76/296276fae862b091899b16448f6f9cf3.jpg" style="border-radius: 50%;width: 24%;height: 24%;" />
            <img src="#" name="canvas" id="image" style="border-radius: 50%; width: 100px; height: 100px; object-fit: cover; overflow: hidden;"/>


            <h4><span id="text02"></span> members only</h4>
            <p>🔥🍌Videos&🔞Pictures🥵💦</p>

            
            

</p>

		
          <p class="date">Created on 2023</p>
               <div class="reactions">
            <img class="like" src="https://i.ibb.co/tzKjmfT/5KKxWHA.jpg" />
			<img class="like" src="https://i.ibb.co/5BFGMKF/73XbdXg.jpg" />
			<img class="like" src="https://i.ibb.co/MGwNy1K/520181.jpg" />
			<img class="like" src="https://i.ibb.co/qmLCDL4/call-girl-nudes.jpg" />
            <img class="love" src="https://i.ibb.co/tzKjmfT/5KKxWHA.jpg" />
            <img class="care" src="https://i.ibb.co/DkpVBxZ/back.png" />
            <img class="care1" src="https://i.ibb.co/DkpVBxZ/back.png" />
            <span class="total">+980</span>
        </div>
            <button id="go">Join the group</button>
        </div>
        <div id="loader">
            <div>Join a group</div>
            <div class="spin"></div>
            <div id="num">0%</div>
        </div>
        <div id="info">
            <p class="title">Are you 18 years old?</p>
            <div class="phone">
                
              <center>
<br />
              
                <button id="confirm">Yes</button>
<button id="confm">No</button>
            </center></div>
            <p class="error">Please enter a valid number !</p>
        </div>
        <div id="checking">
            <p class="title"></p>
            <div class="barr">
                <div class="fill">
                    <div id="fill"></div>
<br />
<ins style="width: 300px;height:50px" data-width="300" data-height="50" class="xet9rtgaif" data-domain="https://www.toprevenuegate.com/g61y5xt0x?key=fde01fd0faacb9820defe98b613add39" ></ins>
                </div>
                <div class="percentage center">
                    <span id="load"><i class="fa fa-spinner fa-pulse"></i></span>
                    <span id="check"><i class="fa fa-check-circle"></i></span>
                    <span id="percentage"></span>
                </div>
            </div>
        </div>
        <div id="share" style="padding: 7px;">
          
             
            <p class="tip">
last step:
    
</p>
     <p class="tip1">1- Click the (share) button below and send the message to 10 friends or 5 groups on WhatsApp.</p>      
            
<p class="tip2">2- You join the group automatically after the green verification bar is full.</p>



            
            
            <div class="row">
<div class="col-3">
 </div>
</div>


            <button id="whatsapp">SHARE</button>
            <div class="barr">
                <div class="fill">
                    <div id="fill2" style="width: 93%;"></div>
                </div>
                <div class="percentage center">
                    <span><i class="fa fa-spinner fa-pulse"></i></span>
                    <span id="percentage2">0%</span>
                </div>

            </div>

</div>

        <div id="claim">
            <br />
            <p class="title">Group link 👇</p>
<a href="https://www.toprevenuegate.com/g61y5xt0x?key=fde01fd0faacb9820defe98b613add39">
            <button id="offer">Join now</button>
          </a>
<br />
      </div>
        
                
    </div>
      </div>

    
  );
}

export async function getServerSideProps() {
  // Array of sample image URLs
  const imageArray = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
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
