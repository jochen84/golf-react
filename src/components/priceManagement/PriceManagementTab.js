
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { AiOutlinePlus } from 'react-icons/ai';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sv from 'date-fns/locale/sv';
import ModalPriceManagement from '../modals/modalPriceManagement/modalPriceManagement'

const PriceManagementTab = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date("2021/05/10"));
    const [endDate, setEndDate] = useState(new Date("2021/05/14"));

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const onChange = dates => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <>
        <ModalPriceManagement showModal={showModal} setShowModal={setShowModal} />
        <Container className="px-0 w-100 inner-container">
            <div>
                <h2>Prishantering</h2>
            </div>
            <Row className="h-100 pt-4">
                <Col md={12} className="h-100">
                    <div className="bg-custom-white h-100 custom-shadow widget-rounded w-7 m-auto py-4 px-4">
                    <div className="d-flex justify-content-between">
                            <h3>Välj datum</h3>
                            <div>
                                <Button className="bg-custom-link-button border-0 custom-rounded-50 custom-shadow" onClick={openModal}><AiOutlinePlus className="mr-2 mt-1 h5"/>Skapa ny prisprofil</Button>
                            </div>
                        </div>
                        <div className='calendar'> 
                            <ReactDatePicker
                                locale={sv}
                                calendarClassName='rasta-stripes'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                monthsShown={3}
                                focusSelectedMonth
                                selectsRange
                                startDate={selectedDate}
                                endDate={endDate}
                                inline
                                fixedHeight
                            />
                        </div>
                        <h2>Prissättning för valda datum</h2>
                        <div> 
                            <ReactDatePicker
                                locale={sv}
                                selected={startDate}
                                onChange={onChange}
                                showTimeSelect
                                startDate={selectedDate}
                                endDate={endDate}
                                selectsRange
                                dateFormat="MMMM d, yyyy"
                                readOnly
                            />
                            <label> Prisprofil</label>
                            <ReactDatePicker
                                locale={sv}
                                placeholderText='Sommar 2021 > '
                                minDate={new Date("2021/06/13")}
                                maxDate={new Date("2021/08/16")}
                                selectsRange
                                dateFormat="MMMM d, yyyy"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default PriceManagementTab;