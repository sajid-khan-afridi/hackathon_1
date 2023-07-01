import Image from "next/image";
import { logo } from "../../public";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <div className="grid lg:grid-4col sm:grid-cols-1 mt-40 gap-x-28 gap-y-12">
        <div className="flex flex-col gap-y-8">
          <Image src={logo} alt="logo" />
          <p className="w-[350px]">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-x-5">
            <div className="cover">
              <FaTwitter />
            </div>
            <div className="cover">
              <FaFacebookF />
            </div>
            <div className="cover">
              <ImLinkedin2 />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <h5>Company</h5>
          <ul className="flex flex-col gap-y-3">
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-5">
          <h5>Support</h5>
          <ul className="flex flex-col gap-y-3">
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-5">
          <h5>Contact</h5>
          <ul className="flex flex-col gap-y-3">
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
