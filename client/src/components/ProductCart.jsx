function ProductCard({ product, addOn, featured = false }) {
  return (
    <article className={featured ? "card card--featured" : "card"}>
      {featured && <span className="badge">мега товары</span>}
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="card-price">{product.price} тенге</p>
        <button className="card-button" type="button" onClick={() => addOn((prev) => prev + 1)}>В корзину</button>
      </div>
    </article>
  );
}
export default ProductCard;
