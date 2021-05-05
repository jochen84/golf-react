import React from 'react';
import './modalCreateUser.css';


const modalCreateUser = (props) => {

    return (
        <>
        {props.showModal ? (
            <div className="modal-background-new-user" onClick={(e) => e.target.classList.value === 'modal-background-new-user' && props.setShowModal(prev => !prev)}>
                <div className="modal-wrapper-new-user bg-custom-white">
                    <div className="d-flex flex-column h-100">
                        <div className="d-flex align-items-center custom-height-88 pl-4">
                            <h4><strong>Rättigheter ny användare:</strong></h4>
                        </div>
                        <hr className="p-0 m-0"/>
                        <div className="d-flex justify-content-between px-4 py-3">
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">Kundhantering</label>
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2">Full access</label>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between px-4 pb-3">
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">Företagshantering</label>
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2">Full access</label>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between px-4 pb-3">
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">Prishantering</label>
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2">Full access</label>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between px-4 pb-3">
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">Meddelanden</label>
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2">Full access</label>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between px-4 pb-3">
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">Temp</label>
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2">Full access</label>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between px-4 pb-3">
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">Temp</label>
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2">Full access</label>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between px-4 pb-3">
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">Annat</label>
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2">Full access</label>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between px-4 pb-3">
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                    <label className="form-check-label" for="inlineCheckbox1">Övrigt</label>
                                </div>
                            </div>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                    <label className="form-check-label" for="inlineCheckbox2">Full access</label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <hr className="p-0 m-0 mb-2"/>
                            <div className="d-flex justify-content-end align-items-center custom-height-60 pr-4">
                                <p className="text-primary btn"><strong>Skapa användare</strong></p>
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

export default modalCreateUser;