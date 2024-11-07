import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Producto A",
    price: "$120",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Producto B",
    price: "$150",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Producto C",
    price: "$100",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Producto D",
    price: "$200",
    image: "https://via.placeholder.com/150",
  },
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
