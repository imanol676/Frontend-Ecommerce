import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
    // Aquí puedes realizar la búsqueda real, por ejemplo, llamando a una API.
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}

          <div className="-ml-4 lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-15 px-3">
            <Link to="/" className="ml-1 mt-1">
              <img src={logo} width={160} height={160} />
            </Link>
          </div>

          {/* SearchBar */}
          <div className="hidden md:flex w-full max-w-md mx-4">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Links */}
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li>
              <a href="#home" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#categories" className="hover:text-orange-500">
                Categorías
              </a>
            </li>
            <li>
              <a href="#offers" className="hover:text-orange-500">
                Ofertas
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500">
                Contacto
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10"
          onClick={toggleSidebar}
        >
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 z-20">
            {/* Cerrar Sidebar */}
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* SearchBar en Sidebar */}
            <div className="mt-4">
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Links de Sidebar */}
            <ul className="mt-8 space-y-4 text-gray-700">
              <li>
                <a href="#home" className="block text-lg hover:text-indigo-500">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  className="block text-lg hover:text-indigo-500"
                >
                  Categorías
                </a>
              </li>
              <li>
                <a
                  href="#offers"
                  className="block text-lg hover:text-indigo-500"
                >
                  Ofertas
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-lg hover:text-indigo-500"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
