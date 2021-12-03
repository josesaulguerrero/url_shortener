//libraries and hooks
//components
import { ResourceCard } from "./ResourceCard";
//assets
import logo from "../assets/images/logo.svg";

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
   return (
      <footer className="Footer" id="resources">
         <img src={logo} alt="logo" className="Footer__logo" width='130' height='35' />
         {
            resources.map(({ title, links }) =>
               <ResourceCard
                  key={title}
                  title={title}
                  links={links}
               />
            )
         }
      </footer>
   );
};