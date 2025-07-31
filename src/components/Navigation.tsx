import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-brand-primary font-bold text-lg">
          loc8abite
        </div>
        
        {/* Menu */}
        <div className="flex space-x-6">
          <Link 
            to="/chi-siamo"
            className="text-white/80 hover:text-brand-primary transition-colors duration-300 text-sm font-medium"
          >
            Chi Siamo
          </Link>
          <Link 
            to="/progetto"
            className="text-white/80 hover:text-brand-primary transition-colors duration-300 text-sm font-medium"
          >
            Progetto
          </Link>
          <Link 
            to="/social"
            className="text-white/80 hover:text-brand-primary transition-colors duration-300 text-sm font-medium"
          >
            Social
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;