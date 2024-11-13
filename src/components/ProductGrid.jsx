import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Campera North Face negra",
    price: "$90",
    image:
      "https://dcdn.mitiendanube.com/stores/905/494/products/hyukjhtd-5a306f86709a3adbd116982682436189-640-0.jpg",
  },
  {
    id: 2,
    name: "Zapatillas Nike air force 1 07 Lv8",
    price: "$158",
    image:
      "https://nikearprod.vtexassets.com/arquivos/ids/731907/DZ2522_100_A_PREM.jpg?v=638308289486970000",
  },
  {
    id: 3,
    name: "Perfume Dior Sauvage 60ml",
    price: "$475",
    image:
      "https://www.rp-luxury.com/13584-thickbox_default/dior-sauvage-elixir-eau-de-parfum-60-ml.jpg",
  },
  {
    id: 4,
    name: "Cartera Chanel mujer",
    price: "$385",
    image: "https://i.ebayimg.com/thumbs/images/g/UXQAAOSwYaRnLXZU/s-l1200.jpg",
  },

  {
    id: 5,
    name: "Laptop Gaming victus 15",
    price: "$1000",
    image: "https://http2.mlstatic.com/D_645917-MLU78318918385_082024-C.jpg",
  },
  {
    id: 6,
    name: "Mando Playstation 5",
    price: "$115",
    image:
      "https://www.sagitariodigital.com.ar/wp-content/uploads/2021/04/joystick-ps5-2.jpg",
  },
  {
    id: 7,
    name: "Casco realidad virtual Meta Quest 3",
    price: "$685",
    image: "https://media.gamestop.com/i/gamestop/20006782?$pdp$",
  },
  {
    id: 8,
    name: "MacBook Pro 13",
    price: "$1155",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOuCOQMzs0EtdrfdCeFRwH-x02aI5V5EIxw&",
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
