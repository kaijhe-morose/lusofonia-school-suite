
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-lusofonia-blue text-white font-bold text-xl p-2 rounded">ERP</div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-lusofonia-blue">Lusofonia</span>
            <span className="text-xs text-gray-600 -mt-1">ERP Escolar SAAS</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-lusofonia-blue transition-colors duration-200">
            Início
          </Link>
          <Link to="/precos" className="font-medium text-gray-700 hover:text-lusofonia-blue transition-colors duration-200">
            Preços
          </Link>
          <Link to="/recursos" className="font-medium text-gray-700 hover:text-lusofonia-blue transition-colors duration-200">
            Recursos
          </Link>
          <Link to="/contacto" className="font-medium text-gray-700 hover:text-lusofonia-blue transition-colors duration-200">
            Contacto
          </Link>
        </nav>
        
        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-lusofonia-blue text-lusofonia-blue hover:bg-blue-50">
            Iniciar Sessão
          </Button>
          <Button className="bg-lusofonia-blue hover:bg-blue-700">
            Demonstração
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-lusofonia-blue transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/precos" 
              className="font-medium text-gray-700 hover:text-lusofonia-blue transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Link 
              to="/recursos" 
              className="font-medium text-gray-700 hover:text-lusofonia-blue transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </Link>
            <Link 
              to="/contacto" 
              className="font-medium text-gray-700 hover:text-lusofonia-blue transition-colors duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" className="border-lusofonia-blue text-lusofonia-blue hover:bg-blue-50 w-full">
                Iniciar Sessão
              </Button>
              <Button className="bg-lusofonia-blue hover:bg-blue-700 w-full">
                Demonstração
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
