import imagemy from '../assets/my.jpg';
{/*import profilepic from "../assets/kevinRushProfile.jpg";*/}
const Hero = () => {
    const HERO_CONTENT = "I’m a fresher passionate about full-stack development and app creation, with hands-on experience from small but meaningful projects. Each project has helped me grow my skills in building responsive websites, interactive apps, and functional solutions. Currently, I’m diving into Machine Learning to expand my expertise and bring intelligent features to my future projects.";
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                Abdul wadud khan
              </h1>
              <span className="bg-gradient-to-r from-pink- 300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Full Stack devloper
              </span>
              <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
              </p>
            </div>
          </div>
          <div className="w-1/2 lg:w1/2 lg:p-8">
            <div className="flex justify-center">
              <img  src={imagemy} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero
