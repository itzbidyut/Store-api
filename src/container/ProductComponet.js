import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function ProductComponet() {
  const product = useSelector((state) => state.allProduct.product);
  const renderList = product.map((product) => {
    return (
      <div className="col-md-4 col-12 " key={product.id}>
        <div className="productItem">
          <div className="card-deck">
            <Link to={`/product/${product.id}`}>
              <div className="card">
                <div className="imgWrapper">
                  <img
                    className="productImage card-img-top"
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                <div className="card-body">
                  <p className="productTitle card-title">
                    {product.title.substring(0, 42)}...
                  </p>
                  <p className="productDes card-text">
                    {product.description.substring(0, 80)}...
                  </p>
                  <p className="productPrice">$ {product.price}</p>
                  {/* <p className="productRating card-text">
                  Rating - {product.rating.rate}
                </p>
                <p className="productCate card-text">
                  Category - {product.category}
                </p> */}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return <div className="row">{renderList}</div>;
}
