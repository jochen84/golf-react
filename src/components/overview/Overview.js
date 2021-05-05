import React, {useState} from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { IoExtensionPuzzle } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import Players from "../widgets/players/Players";
import BookingsToday from '../widgets/bookings/Bookings'
import Messages from '../widgets/messages/Messages';
import PlayersMedium from '../widgets/playersMedium/PlayersMedium';
import BookingsMedium from '../widgets/bookingsMedium/BookingsMedium';
import FullDayShedule from '../widgets/fulldaySchedule/FullDayShedule';
import Modal from '../Modal';

const Overview = (props) => {

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [showModal, setShowModal] = useState(false);
    const [dateTime, setDateTime] = useState(new Date().toLocaleDateString('sv-SV', options))
    const [editOverview, SetEditOverview] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        <Container className="px-0 mb-n3 w-100 h-100">
            <div className="d-flex justify-content-between mb-3">
                <div draggable onDragStart={() => console.log('test')}>
                    <h2>Översikt</h2>
                    <p>{dateTime}</p>
                </div>
                <div>
                    {!editOverview ? (
                        <Button className="bg-custom-white border-0 text-primary custom-rounded-15 py-3 custom-shadow" onClick={() => SetEditOverview(prev => !prev)}><IoExtensionPuzzle className="mr-2 mt-1 h5"/>Anpassa översikt</Button>
                    ) : (
                        <Button className="bg-custom-link-button border-0 custom-rounded-15 py-3 custom-shadow" onClick={() => SetEditOverview(prev => !prev)}><IoExtensionPuzzle className="mr-2 mt-1 h5"/>Spara översikt</Button>
                    )}
                </div>
            </div>
            <Row className="mb-4">
                <FullDayShedule edit={editOverview}/>
            </Row>
            <Row className="mb-4">
                <Players activePlayers={24} edit={editOverview}/>
                <BookingsToday times={10} edit={editOverview}/>
                <Messages messages={3} edit={editOverview}/>
            </Row>
            <Row className="mb-4">
                <PlayersMedium edit={editOverview}/>
                <BookingsMedium edit={editOverview}/>
            </Row>
        </Container>
        {editOverview &&
            <div className="d-flex justify-content-end">
                <Button className="bg-custom-link-button border-0 custom-rounded-50 mt-3 mb-n2 py-3 custom-shadow" onClick={openModal}><AiOutlinePlus className="mr-2 mt-1 h5"/>Lägg till infokort</Button>
            </div>
        }
        </>
    );
};

export default Overview;