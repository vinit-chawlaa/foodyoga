"use client";

import Image from "next/image";
import Slider from "./Slider";

const Partners = () => {
    return (
       <section id="testimonials">
         <div className="w-full  md:px-20 py-20 px-5">
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 md:mb-20 px-5 sm:px-10 text-center sm:text-left">
  Our Global Partners
</h1>

<Slider/>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 md:mb-20 px-5 sm:px-10 ">Our Customers Love Us</h1>
           

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:grid-cols-3 py-4">
                {[
                    {
                        text: "Incredibly addictive and delicious! My first time trying puffed waterlily seeds and I'm hooked. The pickle flavor is outstanding. The package is generously filled, offering great value for the price. Can't wait to try more flavors!",
                        author: "Fopish Spoon",
                        img: '/stars.png'
                    },
                    {
                        text: "I’m enjoying them as a snack before or after I go to the gym. I also brought them for a road trip so that I could skip fast food along the way and just stick with your healthy options.",
                        author: "Nicole Grimes",
                        img: '/stars.png'
                    },
                    {
                        text: "These taste really good, and I'm definitely promoting them for my clients at the yoga studio.",
                        author: "Leah Zaccaria",
                         img: '/stars.png'
                    },
                    {
                        text: "These post-yoga snacks are so yummy and hit the spot after practice. Thank you so much! I would be buying them again.",
                        author: "Jayne Bernasconi",
                        img: '/stars.png'
                    }
                ].map((review, index) => (
                    <div key={index} className="h-full w-full rounded-lg flex flex-col justify-center sm:px-12">
                      <div className="flex gap-2 py-5">
                      {[review.img,review.img,review.img,review.img,review.img].map((item,idx) => (
 <Image src={item} alt="" width={30} height={50} key={idx}/>
                        ))}
                      </div>
                       
                        <p className="text-lg">{review.text}<br /><br />
                            <span className="line"></span><br />
                            <strong>{review.author}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </div>
       </section>
    );
};

export default Partners;
