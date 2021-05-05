import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import EditWidgetRow from '../widgetsEdit/EditWidgetRow';

const Messages = (props) => {

    return (
        <Col md={4} draggable>
            <div data-testid="messagesComponent" className="edit-widget-pop widget-rounded">
                <Container className="bg-custom-white widget-shadow widget-rounded d-flex custom-height-small-widget">
                    <Row className="d-flex align-items-center w-100 m-auto py-2 px-3">
                        <div>
                            <h5><GoPrimitiveDot className="text-danger"/></h5>
                        </div>
                        <div className="ml-2">
                            <h4 data-testid="newMessages" className="p-0 m-0 mt-3"><strong>{props.messages} st</strong></h4>
                            <p>{(props.messages === 1) ? "Nytt meddelande" : "Nya meddelanden"}</p>
                        </div>
                        <div className="ml-auto">
                            <h1 className="text-danger display-4 pb-1"><IoMdMail/></h1>
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

export default Messages;