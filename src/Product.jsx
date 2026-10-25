import "./Product.css";
function Product({ productName, price }) {
    let isDiscount = price >= 10000;
    let styles = { backgroundColor: isDiscount ? "yellow" : "" };
    return (
        <>
            <div className="details" style={styles}>
                <h3>{productName}</h3>
                <p>Price: {price}</p>
                {isDiscount && <p>Discount of 5% </p>}
            </div>
        </>
    );
}

export default Product;