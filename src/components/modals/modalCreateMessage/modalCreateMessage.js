import React from 'react';
import './modalCreateMessage.css';

const modalCreateMessage = (props) => {

    return (
        <>
        {props.showModal ? (
            <div className="modal-background-new-message" onClick={(e) => e.target.classList.value === 'modal-background-new-message' && props.setShowModal(prev => !prev)}>
                <div className="modal-wrapper-new-support bg-custom-white">
                    <div className="d-flex flex-column h-100">
                        <div className="d-flex align-items-center custom-height-88 pl-4">
                            <h4><strong>Skriv nytt meddelande</strong></h4>
                        </div>
                        <div className="px-4 text-secondary">
                            <form onSubmit={() => {}}>
                                <div>
                                    <div className="form-group mb-0">
                                        <label htmlFor="firstname">Företagets namn</label>
                                        <input
                                            type="text"
                                            className="form-control custom-form-input"
                                            name="firstname"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="form-group mb-0">
                                        <label htmlFor="lastname">Antal medlemmar</label>
                                        <input
                                            type="text"
                                            className="form-control custom-form-input"
                                            name="lastname"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="form-group mb-0">
                                        <label htmlFor="text">Medlemstyp</label>
                                        <select
                                            className="form-control custom-form-input p-0"
                                            name="membertype"
                                        >
                                            <option value="full">Fullvärdig</option>
                                            <option value="junior">Juniormedlem</option>
                                            <option value="inactive">Passiv</option>
                                        </select>
                                    </div>
                                    
                                    <div className="form-group mb-0">
                                        <label htmlFor="text">Avtalstid</label>
                                        <input
                                            type="text" 
                                            className="form-control custom-form-input"
                                            name="dealPeriod"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="mt-auto">
                            <hr className="p-0 m-0 mb-2"/>
                            <div className="d-flex justify-content-end align-items-center custom-height-60 pr-4">
                                <p className="text-primary btn"><strong>Skapa ärende</strong></p>
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

export default modalCreateMessage;