import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Clear, Deposite, Remove_Cart, Withdraw, fetchCarts } from "../Store/Reducers/CartSlice";
import { Card, Col, Container, Row } from "react-bootstrap";
import swal from 'sweetalert2';
import { useEffect } from "react";


function Carts () {

    const state =useSelector(state => state.Carts)

    const Dispatch = useDispatch()

    console.log(state);
    return(
        <>
        <Container id="Carts">
            <Row>
                {state.map((el) =>{
                    return(
                        <Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={el.image} />
                                    <Card.Body>
                                        <Card.Title>{el.title}</Card.Title>
                                        <Card.Text>
                                        <p>Price: {el.price}</p>
                                        </Card.Text>
                                        <div className="btn btn-outline-primary" onClick={() => {
                                            swal.fire({
                                                title:'Are you Sure to Delete Him',
                                                icon:'info',
                                                showCancelButton:true,
                                            }).then((data) => {
                                                if(data.isConfirmed){
                                                    swal.fire({
                                                        title:"ٌremoved it",
                                                        icon:"success",
                                                    }).then((data) => {
                                                        return data;
                                                    })
                                                }
                                            })
                                        }}>
                                            Delete
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Col>
                    )
                })}
            </Row>
        </Container>
        </>
    )
}

export default Carts;