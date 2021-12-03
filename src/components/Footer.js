//libraries and hooks
//components
import { Logo } from "./Logo";
import { ResourceCard } from "./ResourceCard";
import { SocialMediaIcon } from "./SocialMediaIcon";
//assets
import FacebookLogo from "../assets/images/icon-facebook.svg";
import TwitterLogo from "../assets/images/icon-twitter.svg";
import PinterestLogo from "../assets/images/icon-pinterest.svg";
import InstagramLogo from "../assets/images/icon-instagram.svg";

export const Footer = () => {
   const resources = [
      {
         title: "Features",
         links: [
            {
               content: "Link Shortening"
            },
            {
               content: "Branded Links"
            },
            {
               content: "Analytics"
            }
         ]
      },
      {
         title: "Resources",
         links: [
            {
               content: "Blog"
            },
            {
               content: "Developers"
            },
            {
               content: "Support"
            }
         ]
      },
      {
         title: "Company",
         links: [
            {
               content: "About"
            },
            {
               content: "Our Team"
            },
            {
               content: "Careers"
            },
            {
               content: "Contact"
            }
         ]
      }
   ];
   const socialMedia = [
      {
         name: "Facebook",
         image: FacebookLogo,
      },
      {
         name: "Twitter",
         image: TwitterLogo,
      },
      {
         name: "Pinterest",
         image: PinterestLogo,
      },
      {
         name: "Instagram",
         image: InstagramLogo,
      },
   ];
   return (
      <footer className="Footer" id="resources">
         <Logo color="#fff" />
         {
            resources.map(({ title, links }) =>
               <ResourceCard
                  key={title}
                  title={title}
                  links={links}
               />
            )
         }
         {
            socialMedia.map(({ name, image }) =>
               <SocialMediaIcon
                  href="#"
                  key={name}
                  name={name}
                  image={image}
               />
            )
         }
      </footer>
   );
};