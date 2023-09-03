import { useState } from "react";
import { Form } from "react-bootstrap";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { fetchReducer } from "../Store/Reducers/ProductSLice";
import { useNavigate } from "react-router-dom";

function Add () {
    const [Image ,setImage] = useState('')
    const [Title ,setTitle] = useState('')
    const [Price ,setPrice] = useState('')
    const state =useSelector(state => state.Products)
    const Dispatch =useDispatch();
    const Navigate = useNavigate();
    console.log(state);
    return (
        <Form className="Forms">
            <Form.Group className="mb-3">
                <Form.Label>imageProduct</Form.Label>
                <Form.Control type="text" placeholder="Enter Image" id="Input" onChange={(e) => setImage(e.target.value)}/>
            </Form.Group>
    
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" id="Input" onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Price" id="Input" onChange={(e) => setPrice(e.target.value)}/>
            </Form.Group>
            <div className="btn btn-outline-primary" id="submit">
                Add Product
            </div>
        </Form>
    )
}

export default Add;