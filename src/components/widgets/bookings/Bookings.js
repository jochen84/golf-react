import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IoStatsChart } from 'react-icons/io5'
import { GoPrimitiveDot } from 'react-icons/go'
import EditWidgetRow from '../widgetsEdit/EditWidgetRow';

const BookingsToday = (props) => {

    return (
        <Col md={4} draggable>
            <div data-testid="bookingsComponent" className="edit-widget-pop widget-rounded">
                <Container className="bg-custom-white widget-shadow widget-rounded d-flex custom-height-small-widget">
                    <Row className="d-flex align-items-center w-100 m-auto py-2 px-3">
                        <div>
                            <h5><GoPrimitiveDot className="text-primary"/></h5>
                        </div>
                        <div className="ml-2">
                            <h4 data-testid="activeBookings" className="p-0 m-0 mt-3"><strong>{props.times} st</strong></h4>
                            <p>Bokade tider</p>
                        </div>
                        <div className="ml-auto">
                            <h1 className="text-primary display-4 pb-1"><IoStatsChart/></h1>
                        </div>
                    </Row>
                </Container>
                {props.edit &&
                <EditWidgetRow />
                }
            </div>
        </Col>
    );
};

export default BookingsToday;