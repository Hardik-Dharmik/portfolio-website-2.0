import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import HeaderIcon from "./HeaderIcon";

function Footer() {
  return (
    <div className="container mx-auto px-4 sm:p-2 text-lightslate">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-2">
        <div>
          <p className="text-sm text-gray-200 font-mono">
            Created by Hardik Sunil Dharmik
          </p>
        </div>

        <p className="text-sm text-gray-200 font-mono space-x-1">
          <EmailIcon />
          <a href="mailto:hardikdharmik94@gmail.com.com">
            hardikdharmik94@gmail
          </a>
        </p>
        <div className="flex space-x-5">
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
          <HeaderIcon
            Icon={EmailIcon}
            href="mailto:hardikdharmik94@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
