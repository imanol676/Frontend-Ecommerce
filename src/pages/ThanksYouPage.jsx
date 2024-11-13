import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h2>
      <p className="text-gray-600 mb-6">
        Tu pedido ha sido procesado con éxito.
      </p>
      <button
        onClick={handleBackToHome}
        className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300"
      >
        Volver a la página principal
      </button>
    </div>
  );
};

export default ThankYouPage;
