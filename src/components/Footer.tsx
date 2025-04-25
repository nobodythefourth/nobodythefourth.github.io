
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t py-6 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {currentYear} my playground. not yours. all rights reserved.
        </p>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            home
          </Link>
          <Link to="/about" className="hover:text-primary">
            about
          </Link>
          <Link to="/blog" className="hover:text-primary">
            blog
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
