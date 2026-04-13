function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
        className="image"
      />

      <h3 className="card-title">
        {product.title.slice(0, 50)}...
      </h3>

      <p className="price">₹ {product.price}</p>

      <p className="desc">
        {product.description.slice(0, 80)}...
      </p>
    </div>
  );
}

export default ProductCard;