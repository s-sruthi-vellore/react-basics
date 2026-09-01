import Product from "./Product.jsx";
import "./Product.css";
function ProductTab() {
    const options = ["high-tech", "durable", "fast"];
    return (
        <>
            <Product productName ="Phone" price="30000" features = {options} />
            <Product productName="Laptop" price="55000" />
            <Product productName="pen" price="10" />
        </>
    );
}

export default ProductTab;