import Product from "./Product.jsx";
import "./Product.css";
function ProductTab() {
    return (
        <>
            <Product productName ="Phone" price="30000" />
            <Product productName="Laptop" price="55000" />
            <Product productName="pen" price="10" />
        </>
    );
}

export default ProductTab;