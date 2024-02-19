import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-scroll";
import img from "../assets/img/about.jpg"
const About = () => {
  
  const backgroundColor = `bg-white`
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 bg-darkBackground gap-10">
      <div className=" w-full lg:w-2/4 space-y-5"> 
        <h1 className="font-semibold text-4xl text-white leading-tight">At LaithTravels, we are ready to provide you with the best trip of your
            life!
            </h1>
            <p className=" text-[#bdbdbd] pb-5">At LaithTravels, we believe that the world is meant to be explored, and every journey is an opportunity for adventure, discovery, and creating lasting memories. Our passion for travel is what drives us to provide you with a platform that not only inspires your wanderlust but also makes your travel experiences seamless and unforgettable.</p>

            <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button title="contact Now" backgroundColor={backgroundColor}/>
            </Link>
      </div>
    <div className="w-full lg:w-2/4">
      <img className="rounded-2xl" src={img} alt="img"  />
    </div>
    </div>
  )
}

export default About