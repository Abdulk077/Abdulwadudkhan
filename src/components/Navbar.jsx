{/*import logo from '../assets/logo.png';*/}
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbarcomp = () => {
    return (
      <nav className="mb-20 flex iteams-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          {/*<img className="mx-20 w-12 text-white bg bg-white" src={logo} alt="logo"/>*/}
          <h1 className="text-4xl mx-20 font-extralight">AB</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/abdulk07/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Abdulk077">
            <FaGithub />
          </a>
          <a href="https://x.com/GBM45">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/goldenboyabdul123?igsh=emFpd3llNmNvb2tu">
            <FaInstagram />
          </a>
        </div>
      </nav>
    );    
}

export default Navbarcomp;
