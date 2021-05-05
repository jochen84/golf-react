import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import ModalCreateMessage from '../modals/modalCreateMessage/modalCreateMessage';
//import ModalRespondMessage from '../modals/modalCreateMessage/modalCreateMessage';
//import ModalReadMessage from '../modals/modalCreateMessage/modalCreateMessage';


const MessagesTab = (props) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
        <ModalCreateMessage showModal={showModal} setShowModal={setShowModal} />
        {/* <ModalRespondMessage showModal={showModal} setShowModal={setShowModal} /> */}
        {/* <ModalReadMessage showModal={showModal} setShowModal={setShowModal} /> */}

        <Container className="px-0 w-100 inner-container">
            <div>
                <h2>Meddelanden</h2>
            </div>
            <Row className="h-100 pt-4">
                <Col md={12} className="h-100">
                    <div className="bg-custom-white h-100 custom-shadow widget-rounded w-7 m-auto py-4 px-4">
                    <div className="d-flex justify-content-between">
                            <h3>Välj brevlåda</h3>
                            <div>
                                <Button className="bg-custom-link-button border-0 custom-rounded-50 custom-shadow" onClick={openModal}><AiOutlinePlus className="mr-2 mt-1 h5"/>Skriv nytt meddelande</Button>
                            </div>
                        </div>
                        <div>
                            **Lista på meddelanden**
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default MessagesTab;