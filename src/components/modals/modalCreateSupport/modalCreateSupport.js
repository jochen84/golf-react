import React from 'react';
import './modalCreateSupport.css';

const modalCreateSupport = (props) => {

    return (
        <>
        {props.showModal ? (
            <div className="modal-background-new-support" onClick={(e) => e.target.classList.value === 'modal-background-new-support' && props.setShowModal(prev => !prev)}>
                <div className="modal-wrapper-new-support bg-custom-white">
                    <div className="d-flex flex-column h-100">
                        <div className="d-flex align-items-center custom-height-88 pl-4">
                            <h4><strong>Skapa nytt ärende</strong></h4>
                        </div>
                        <div className="px-4 mt-n3 text-secondary">
                            <form onSubmit={() => {}}>
                                <div>
                                    <div className="form-row mb-2">
                                        <div className="form-group col-md-6 mb-0">
                                            <label htmlFor="name">Ärendenamn</label>
                                            <input
                                                type="text"
                                                className="form-control custom-form-input"
                                                name="name"
                                            />
                                        </div>
                                        <div className="form-group col-md-6 mb-0">
                                            <label htmlFor="number">Ärendenummer</label>
                                            <input
                                                type="text"
                                                className="form-control custom-form-input"
                                                name="number"
                                                readOnly
                                                value="99999"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row mb-4">
                                        <div className="form-group col-md-6 mb-0">
                                            <label htmlFor="text">Kategori</label>
                                            <select
                                                className="form-control custom-form-input p-0"
                                                name="category"
                                            >
                                                <option value="course">Golfbana</option>
                                                <option value="car">Golfbil</option>
                                                <option value="other">Övrigt</option>
                                            </select>
                                        </div>
                                            <div className="form-group col-md-6 mb-0">
                                            <label htmlFor="text">Status</label>
                                            <select
                                                className="form-control custom-form-input p-0"
                                                name="status"
                                            >
                                                <option value="ongoing">Pågående</option>
                                                <option value="paused">Pausad</option>
                                                <option value="stopped">Stoppad</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group mb-0">
                                        <label htmlFor="text">Beskrivning</label>
                                        <textarea
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

export default modalCreateSupport;