import "./ProductCard.css";

function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>${price}</h3>
    </div>
  );
}

export default ProductCard;