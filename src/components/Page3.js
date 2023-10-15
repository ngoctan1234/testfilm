import {Link } from "react-router-dom";
export default function Page3() {
    return (
        <div>
            <h1>page 3</h1>
            <Link to="product/1">Product 1</Link>
            <Link to="product/2">Product 2</Link>
            <Link to="product/3">Product 3</Link>
        </div>
    );
}
