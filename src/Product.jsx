import "./Product.css";
function Product({ productName, price, features }) {
    const list = features?.map((feature) => <li>{feature}</li>);
    return (
        <>
            <div className="details">
                <h3>{productName}</h3>
                <p>Price: {price}</p>
                {features && <ul className="features">{list}</ul>}
            </div>
        </>
    );
}

export default Product;