import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Explora el Mundo de la Moda",
    description: "Encuentra las últimas tendencias a precios irresistibles.",
    image: "https://picsum.photos/1920/1080?random=1",
  },
  {
    id: 2,
    title: "Ofertas Especiales",
    description: "Descuentos en todas las categorías, no te los pierdas.",
    image: "https://picsum.photos/1920/1080?random=2",
  },
  {
    id: 3,
    title: "Nuevos Lanzamientos",
    description: "Descubre nuestra colección de productos exclusivos.",
    image: "https://picsum.photos/1920/1080?random=3",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Cambia el slide automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-80 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-80 bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-40 text-center p-4">
              <div className="text-white max-w-md">
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-base">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-60 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-60 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroSlider;
