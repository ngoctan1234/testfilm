import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Product from "./components/Product";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
    return (
        <div className="App">
            hello
            <Router>
                <Link to="/page1">page 1</Link>
                <Link to="/page2">page 2</Link>
                <Link to="/page3">page 3</Link>
                <Routes>
                    <Route index element={<Page2 />}></Route>
                    <Route path="page1" element={<Page1 />}></Route>
                    <Route path="page2" element={<Page2 />}></Route>
                    <Route path="page3" element={<Page3 />}></Route>
                    <Route path="product/:id" element={<Product />}></Route>
                    <Route path="/*" element={<h1>Error Page</h1>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
