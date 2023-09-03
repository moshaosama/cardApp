import { Link, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Carts from "./Carts";
import { useSelector } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import Add from "./Add";



function Navb () {
    const state =useSelector(state => state.Carts);

    console.log(state);

    return(
        <>
        <div className="bg-dark">
        <Navbar className="d-flex" id="Nav">
            <Navbar.Brand className="text-light">Cart App</Navbar.Brand>
            <Nav>
                <Nav.Link><Link to={"Add"} className="text-decoration-none text-light">Add Product</Link></Nav.Link>
                <Nav.Link><Link to={"/"} className="text-decoration-none text-light">Products</Link></Nav.Link>
                <Nav.Link><Link to={"Carts"} className="text-decoration-none text-light">Cart-{state.length}</Link></Nav.Link>
            </Nav>
        </Navbar>
        </div>


        <div className="Router">
            <Routes>
                <Route path="Add" element={<Add/>}></Route>
                <Route path="/" element={<Products/>}></Route>
                <Route path="Carts" element={<Carts/>}></Route>
            </Routes>
        </div>
        </>
    )
}

export default Navb;