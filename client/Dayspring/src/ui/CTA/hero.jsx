import React from "react";
import Button from "../../components/Button";
// import DDTS from "../assets/DDTS.png"
function Hero() {
  // return (
  //   // <div className=" relative inset-0 bg-[url('/DDTS.png')] pb-2 pt-10 space-y-10 grow bg-center bg-no-repeat bg-size bg-cover  ">
  //   <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-700/50 opacity-90">
  //     <div className="relative z-10 mt-4 ml-4">
  //       <h1 className="text-4xl font-bold mb-4 text-blue-900">DaySpring Tutors</h1>
  //       <p className="text-xl mb-6 text-blue-200 leading-relaxed transition-opacity duration-7 ease-in opacity-76 animate-fadein">
  //         At Dayspring Tutors,understandinf is our key watchword  <br/>and we are passionate about helping you succed in <br/> all aspects of academics & non-Academics affair.
  //       </p>
  //       <Button type={"primary"} >
  //         Get Started
  //       </Button>
  //     </div>
  //   </div>
  //   <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-orange-100 opacity-70 via-transparent to-transparent z-20 pointer-events-none"></div>

  // </div>
  // );
  return (
    <div className='mt-20 bg-[url("/pic2.jpg")] h-auto grow bg-no-repeat bg-cover bg-center grid'>
    <div className="grid grid-flow-cols grid-cols-2 place-content-center place-items-center  min-h ">
    <div >
        <h2 className="text-blue-500 text-5 md:text-5xl text-semibold r mt-10">
          Dayspring Tutors
        </h2>
        <p className="text-blue-500  text-sm md:text-lg mt-5 ">
          With understanding being our watchword , learn<br/> to succeed in all
          aspects of academics <br/> and non-Academics affair
        </p>
        <div className="mt-8 flex  gap-2 items-center"> 
        <Button type={"secondary"} to={"/newuser/signup"}>Register now!</Button>
        <Button type={"secondary"}>Go to shop</Button>
      </div>
     
      </div>
      <div>
        <img src="/woman.jpeg"/>
      </div>

      {/* Call to Action Button */}
     
    </div>

    </div>
     
  );
}

export default Hero;
