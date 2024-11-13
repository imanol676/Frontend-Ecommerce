import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(`/checkout/${product.id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">Precio: {product.price}</p>
        <button
          onClick={handleBuyNow}
          className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-300"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
