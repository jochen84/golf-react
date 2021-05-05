import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import ModalCreateCompanyDeal from '../modals/modalCreateCompanyDeal/modalCreateCompanyDeal'
import companiesJson from '../../fakedb/companies.json'

const BusinessManagementTab = (props) => {

    const [companiesList, setCompaniesList] = useState(companiesJson);
    const [activeCompany, setActiveCompany] = useState(undefined);
    const [showModal, setShowModal] = useState(false);

    const activeCompanyToggle = (e) => {
        e.target.classList.toggle('clients-active');
    }

    const companyRender = (company) => {
        return (
            <Row onFocus={activeCompanyToggle} onBlur={activeCompanyToggle} tabIndex="-1" onClick={() => setActiveCompany(company)} className="py-3 clients mr-1">
                <Col md={8} className="d-flex justify-content-between">
                    <Col className="">{company.name}</Col>
                    <Col className="">{company.members}</Col>
                    <Col className="">{company.membertype}</Col>
                    <Col className="">{company.contractPeriod}</Col>
                </Col>
            </Row>
        );
    }

    const onChangeSearchInput = (e) => {
        //const searchStr = e.target.value;
        //setsearchInput(searchStr)
        //seachForUser(searchStr);
    }
    const handleCompanySearch = (e) => {
        //do notting atm
    }

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
        <ModalCreateCompanyDeal showModal={showModal} setShowModal={setShowModal} />
        <Container className="px-0 w-100 inner-container">
           <div className="d-flex justify-content-between mb-3">
                <div>
                    <h2>Företagshantering</h2>
                </div>
               
            </div>
            <Row className="h-100 pt-4">
                <Col md={12} className="h-100">
                    <div className="bg-custom-white h-100 custom-shadow widget-rounded w-7 m-auto py-4 px-4">
                        <div className="d-flex justify-content-between">
                            <h3>Företag</h3>
                            <div>
                                <Button className="bg-custom-link-button border-0 custom-rounded-50 custom-shadow" onClick={openModal}><AiOutlinePlus className="mr-2 mt-1 h5"/>Lägg till företagsavtal</Button>
                            </div>
                        </div>
                        <Row className="pt-4">
                            <Col md={8} className="d-flex justify-content-between text-secondary">
                                <Col>Företagsnamn</Col>
                                <Col>Antal medlemmar</Col>
                                <Col>Medlemstyp</Col>
                                <Col>Avtalstid</Col>
                            </Col>
                            <form className="ml-auto pr-3 d-flex" onSubmit={handleCompanySearch}>
                                <input
                                    className="form-control search-form-input form-control-placeholdericon"
                                    placeholder="SÖK FÖRETAG"
                                    onChange={onChangeSearchInput}
                                    >
                                </input>
                                <h4><AiOutlineSearch className="ml-n5 text-secondary"/></h4> 
                            </form>
                        </Row>
                        <hr className="my-2"></hr>
                        <div className="custom-h-87 overflow-auto custom-scroll">
                            {/*Change this key from index to customer.id (No unique id's atm)*/}
                            {companiesList.map((company, index) => (
                                <React.Fragment key={index}>{companyRender(company)}</React.Fragment>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default BusinessManagementTab;