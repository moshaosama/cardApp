import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReducer } from "../Store/Reducers/ProductSLice";
import { Add_Cart, add_Product, fetchCarts } from "../Store/Reducers/CartSlice";

import { Container ,Row ,Col ,Card } from "react-bootstrap";
import axios from "axios";

function Products () {

    const state = useSelector(state => state.Products)

    const Dispatch =useDispatch();


    useEffect(() => {
        Dispatch(fetchReducer())
    },[])
    return (
        <>
        <Container id="Products">
            <Row>
                {
                    state.map((el) => {
                        return(
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={el.image} />
                                <Card.Body>
                                    <Card.Title>{el.title}</Card.Title>
                                    <Card.Text>
                                    <p>Price: {el.price}</p>
                                    </Card.Text>
                                    <div className="btn btn-outline-primary" onClick={() => {
                                        Dispatch(add_Product(el))
                                    }}>
                                        Add Cart
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })
                }
            </Row>
        </Container>
        </>
    )
}

export default Products;