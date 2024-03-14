import "./Footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="Footer__Container">
      <div className="Footer__Info--container">
        <div>Contact</div>
        <div>About Us</div>
        <div>Quick Links</div>
        <div>Recent Posts</div>
      </div>
      <div className="Footer__Legal--container">
        <div>© BucketBlast Corporation</div>
        <div className="Footer__SocialMedia--container">
          <LinkedInIcon />
          <InstagramIcon />
          <FacebookIcon />
          <XIcon />
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
