import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import HeaderIcon from "./HeaderIcon";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto bg-bgDark text-lightslate text-sm font-mono font-light pt-4">
      {/* Mobile Menu  */}
      <div className="inline-block sm:hidden p-2 cursor-pointer">
        {isOpen ? (
          <CloseIcon onClick={handleToggle} />
        ) : (
          <MenuIcon onClick={handleToggle} />
        )}
      </div>

      <div
        className={` ${
          isOpen ? "flex" : "hidden"
        } flex-col items-center space-y-2 `}
      >
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Education</a>
        <a href="">Projects</a>
        <a href="">Experience</a>

        <div className="flex space-x-7">
          <HeaderIcon
            Icon={LinkedInIcon}
            href="https://www.linkedin.com/in/hardik-dharmik-034796215/"
          />
          <HeaderIcon
            Icon={GitHubIcon}
            href="https://github.com/Hardik-Dharmik
          "
          />
          <HeaderIcon
            Icon={InstagramIcon}
            href="https://www.instagram.com/hardik__dharmik/"
          />
        </div>
      </div>

      <div className="hidden sm:flex  justify-between p-2 items-center">
        {/* Left  */}
        <div className="flex space-x-7">
          <a href="" className="hover:text-teal">
            Home
          </a>
          <a href="#about" className="hover:text-teal">
            About
          </a>
          <a href="" className="hover:text-teal">
            Education
          </a>
          <a href="" className="hover:text-teal">
            Projects
          </a>
          <a href="" className="hover:text-teal">
            Technologies
          </a>
          <a href="" className="hover:text-teal">
            Experience
          </a>
        </div>

        {/* Right  */}
        <div className="flex space-x-7">
          <HeaderIcon
            Icon={LinkedInIcon}
            href="https://www.linkedin.com/in/hardik-dharmik-034796215/"
          />
          <HeaderIcon
            Icon={GitHubIcon}
            href="https://github.com/Hardik-Dharmik
          "
          />
          <HeaderIcon
            Icon={InstagramIcon}
            href="https://www.instagram.com/hardik__dharmik/"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
