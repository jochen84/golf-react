import React, {useState, useRef, useEffect} from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai'
import customers from '../../fakedb/customers';
import EditCustomerProfile from './EditCustomerProfile';

const CustomerManagement = (props) => {


    const [customerList, setCustomerList] = useState(customers);
    const [activeCustomer, setActiveCustomer] = useState(undefined);
    const [customerUpdated, setCustomerUpdated] = useState(false);
    const [searchInput, setsearchInput] = useState('');
    
    // When save button pressed in updatecustomer, rerender parent to show updated Customer
    useEffect(() => {
        setCustomerUpdated(false);
    }, [customerUpdated]);

    // Hide/show edit customer form
    const activeClient = (e) => {
        e.target.classList.toggle('clients-active');
    }

    const customerRender = (customer) => {
        return (
            <div onFocus={activeClient} onBlur={activeClient} tabIndex="-1" onClick={() => setActiveCustomer(customer)} className="d-flex align-items-center pt-2 pb-2 pr-4 clients">
                <Col className="p-0 pl-2"><Image src={customer.picture} className="profile-image"/></Col>
                <Col className="p-0">{customer.firstname}</Col>
                <Col className="p-0">{customer.lastname}</Col>
                <Col className="p-0">{customer.golfId}</Col>
                <Col className="p-0">{customer.membertype}</Col>
            </div>
        );
    }

    // Close edit customer for when click outside
    const useCloseEdit = (ref) => {
        useEffect(() => {

            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setActiveCustomer(undefined);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useCloseEdit(wrapperRef);

    const onChangeSearchInput = (e) => {
        const searchStr = e.target.value;
        setsearchInput(searchStr)
        seachForUser(searchStr);
    }

    const handleUserSearch = (e) => {
        e.preventDefault();
        console.log('Searching for: ' + searchInput)
        const searchStr = searchInput;
        seachForUser(searchStr);
    }

    const seachForUser = (searchStr) => {
        let newUserList = [];
        customers.map((user) => {
            (user.firstname.toLowerCase() + ' ' + user.lastname.toLowerCase() === searchStr.toLowerCase() ||
            user.firstname.toLowerCase().includes(searchStr.toLowerCase()) || user.lastname.toLowerCase().includes(searchStr.toLowerCase())) && newUserList.push(user)
        });
        setCustomerList(newUserList);
    }

    return (
        <Container className="px-0 w-100 inner-container">
            <div>
                <h2>Kundhantering</h2>
            </div>
            <Row className="h-100 pt-4" ref={wrapperRef}>
                <Col md={activeCustomer === undefined ? 12 : 8} className="h-100">
                    <div className="bg-custom-white h-100 custom-shadow widget-rounded w-7 m-auto py-4 px-4">
                        <div className="d-flex justify-content-between">
                            <h3>Kundregister</h3>
                            <form className="pr-3 d-flex" onSubmit={handleUserSearch}>
                                <input
                                    className="form-control search-form-input form-control-placeholdericon"
                                    placeholder="SÖK ANVÄNDARE"
                                    onChange={onChangeSearchInput}
                                    >
                                </input>
                                <h4><AiOutlineSearch className="ml-n5 text-secondary"/></h4>
                                
                            </form>
                        </div>
                        <div className="d-flex justify-content-between px-3 pr-5 mr-5">
                            <p className="m-0 pt-1">Bild</p>
                            <p className="m-0 pt-1">Förnamn</p>
                            <p className="m-0 pt-1">Efternamn</p>
                            <p className="m-0 pt-1">Golf-ID</p>
                            <p className="m-0 pt-1">Medlemstyp</p>
                        </div>
                        <hr></hr>
                        <div className="custom-h-87 overflow-auto custom-scroll">
                            <div className="h-100 pr-4 mr-3">
                                {/*Change this key from index to customer.id (No unique id's atm)*/}
                                {customerList.map((customer, index) => (
                                    <React.Fragment key={index}>{customerRender(customer)}</React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className={activeCustomer === undefined ? 'd-none' : 'customer-edit'} >
                    <div className="bg-custom-white h-100 custom-shadow widget-rounded w-100 m-auto py-4 px-4 position-relative">
                        <h3>Redigera profil</h3>
                        <EditCustomerProfile customer={activeCustomer} cancel={setActiveCustomer} updated={setCustomerUpdated}/>
                    </div>
                </Col> 
            </Row>
        </Container>
    );
};

export default CustomerManagement;