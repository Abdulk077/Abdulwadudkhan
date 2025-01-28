import aboutImg from '../assets/project-4.jpg';
import {motion} from "framer-motion";

const About = () => {    
    return (
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-500">ME </span>
        </h1>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutImg} alt="about" />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6">
                `I’m a passionate fresher in full-stack development and app
                creation, eager to turn ideas into impactful digital solutions.
                With a solid foundation in coding and design, I’m constantly
                learning and growing, now exploring the exciting field of
                Machine Learning to enhance my skill set.`
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
}

export default About
