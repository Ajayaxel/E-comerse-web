import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Product from "./Product";

function Home() {
  return (
    <div className="home">
     <div className="home__image">

      <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={1}
      infiniteLoop={true}
      showStatus={false}
     

      >
      <div>
      <img src="https://www.gonoise.com/cdn/shop/files/image_2023_09_25T04_48_50_993Z_1_1900x.png?v=1695624192"alt="" />
      </div>
      
      <div>
      <img src="https://www.gonoise.com/cdn/shop/files/image_2023_09_28T09_15_34_627Z_1_1900x.png?v=1695911083"alt="" />
      </div> 
      <div>
      <img src="https://www.apple.com/v/iphone-15/a/images/overview/welcome/hero_endframe__e0ajd2ayxqc2_large.jpg" alt=""/>
      </div>  
      <div>
      <img src="https://www.gonoise.com/cdn/shop/files/image_2023_09_28T12_47_49_847Z_1900x.png?v=1695920635" alt=""/>
      </div>     
            </Carousel>
            </div>

      

        <div className="home__row">
        <Product
        id="3254354345"
        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
        price={598.99}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
      />
     
        </div>

        <div className="home__row">
        <Product
        id="3254354345"
        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
        
        price={598.99}
        rating={4}
        image="https://i03.appmifile.com/984_item_in/11/09/2023/fcb83bf636c0acb4a5aa37f3d3a9bf03.jpg"
      />
      <Product
      id="3254354345"
      title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
      price={598.99}
      rating={4}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKmMKy1t2Zteqvv7mKIVOVBJMye4u9KUcLA&usqp=CAU"
    />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_u7abF7ini1zWw1Kh8CDpZCBCOdZXLCazYA&usqp=CAU"
          />
        </div>

        <div className="home__row">
        <Product
        id="3254354345"
        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
        price={598.99}
        rating={4}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbY0URdqmLCUqMN4FtxhxEr8Xjeh1XDBq7Q&usqp=CAU"
      />
      <Product
      id="3254354345"
      title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
      price={598.99}
      rating={4}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNR5ANNPdJv3jHkCtHx9x7STNxy0csGY42w&usqp=CAU"
    />
          <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        </div>
      </div>
    
  );
}

export default Home;
