import React from 'react';
import '../style/modal.css';
import Players from './widgets/players/Players';
import Bookings from './widgets/bookings/Bookings';
import Messages from './widgets/messages/Messages';
import FullDayShedule from './widgets/fulldaySchedule/FullDayShedule'

const Modal = (props) => {

    return (
        <>
        {props.showModal ? (
            <div className="modal-background" onClick={(e) => e.target.classList.value === 'modal-background' && props.setShowModal(prev => !prev)}>
                <div className="modal-wrapper bg-custom-white">
                    <div className="d-flex flex-column h-100">
                        <div className="d-flex align-items-center custom-height-88">
                            <h4><strong>Välj vilket infokort du vill lägga till i översikten</strong></h4>
                        </div>
                        <hr className="p-0 m-0"/>
                        <div className="p-4">
                            <div className="custom-height-807 overflow-auto custom-scroll">
                                <div className="d-flex my-5">
                                    <div className="shadow rounded">
                                        <h5 className="text-center"><strong>Antal spelare på banan</strong></h5>
                                        <Players activePlayers={21}/>
                                    </div>
                                    <Bookings times={32}/>
                                    <Messages messages={5}/>
                                </div>
                                <div className="d-flex my-5">
                                    <FullDayShedule />
                                </div>
                                <div className="d-flex my-5">
                                    <FullDayShedule />
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <hr className="p-0 m-0 mb-2"/>
                            <div className="d-flex justify-content-end align-items-center custom-height-60">
                                <p className="text-primary btn"><strong>Skapa nytt kort</strong></p>
                                <p onClick={() => props.setShowModal(prev => !prev)} className="btn"><strong>Avbryt</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            null
        )}
        </>
    )
}

export default Modal;