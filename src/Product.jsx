import "./Product.css";
function Product({ productName, price, features }) {
    const list = features?.map((feature) => <li>{feature}</li>);
    return (
        <>
            <div className="details">
                <h3>{productName}</h3>
                <p>Price: {price}</p>
                {price >= 10000 ? <p>Discount of 5% </p> : null}
                {features &&
                    <p> <b>Features: </b> 
                        <ul className="features">{list}</ul>
                    </p>
                }
            </div>
        </>
    );
}

export default Product;