import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6";
const socialList = [
  {icon: <FaGithub/>, path:"https://github.com/suryakant1811"},
  {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/suryakant1811/"},
  {icon: <FaInstagram/>, path:"https://www.instagram.com/surya__suraj/"},
  {icon: <FaTwitter/>, path:"https://x.com/surya___suraj"},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {
        socialList.map((item, index) => {
          return (
            <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
          )
        })
      }
    </div>
  );
};

export default Socials;
