import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import ModalCreateSupport from '../modals/modalCreateSupport/modalCreateSupport'
import errands from '../../fakedb/supporterrands.json'

const SupportTab = (props) => {

    const [errandsList, setErrandsList] = useState(errands);
    const [activeErrand, setActiveErrand] = useState(undefined);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const activeErrandToggle = (e) => {
        e.target.classList.toggle('clients-active');
    }

    const errandRender = (errand) => {
        return (
            <Row onFocus={activeErrandToggle} onBlur={activeErrandToggle} tabIndex="-1" onClick={() => setActiveErrand(errand)} className="py-3 clients mx-1">
                <Col md={8} className="d-flex justify-content-between">
                    <Col className="ml-n3 mr-3">{errand.errandNr}</Col>
                    <Col className="mr-1">{errand.name}</Col>
                    <Col className="mr-2">{errand.registerDate}</Col>
                    <Col>{errand.category}</Col>
                    <Col>{errand.status}</Col>
                </Col>
            </Row>
        );
    }

    const onChangeSearchInput = (e) => {
        //const searchStr = e.target.value;
        //setsearchInput(searchStr)
        //seachForUser(searchStr);
    }
    const handleErrandSearch = (e) => {
        //do notting atm
    }

    return (
        <>
        <ModalCreateSupport showModal={showModal} setShowModal={setShowModal} />
        <Container className="px-0 w-100 inner-container">
            <div>
                <h2>Support</h2>
            </div>
            <Row className="h-100 pt-4">
                <Col md={12} className="h-100">
                    <div className="bg-custom-white h-100 custom-shadow widget-rounded w-7 m-auto py-4 px-4">
                    <div className="d-flex justify-content-between">
                            <h3>Support</h3>
                            <div>
                                <Button className="bg-custom-link-button border-0 custom-rounded-50 custom-shadow" onClick={openModal}><AiOutlinePlus className="mr-2 mt-1 h5"/>Skapa nytt ärende</Button>
                            </div>
                        </div>
                        <Row className="pt-4">
                            <Col md={8} className="d-flex justify-content-between text-secondary">
                                <Col>Ärendenummer</Col>
                                <Col>Ämne</Col>
                                <Col>Registrerat datum</Col>
                                <Col>Kategori</Col>
                                <Col>Status</Col>
                            </Col>
                            <form className="ml-auto pr-3 d-flex" onSubmit={handleErrandSearch}>
                                    <input
                                    className="form-control search-form-input form-control-placeholdericon"
                                    placeholder="SÖK ÄRENDE"
                                    onChange={onChangeSearchInput}
                                    >
                                </input>
                                <h4><AiOutlineSearch className="ml-n5 text-secondary"/></h4> 
                            </form>
                        </Row>
                        <hr className="my-2"></hr>
                        <div className="custom-h-87 overflow-auto custom-scroll">
                                {/*Change this key from index to customer.id (No unique id's atm)*/}
                                {errandsList.map((errand, index) => (
                                    <React.Fragment key={index}>{errandRender(errand)}</React.Fragment>
                                ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default SupportTab;