import React from 'react';
import './modalPriceManagement.css';

const modalPriceManagement = (props) => {

    return (
        <>
        {props.showModal ? (
            <div className="modal-background-new-price" onClick={(e) => e.target.classList.value === 'modal-background-new-price' && props.setShowModal(prev => !prev)}>
                <div className="modal-wrapper-new-price bg-custom-white">
                    <div className="d-flex flex-column h-100">
                        <div className="d-flex align-items-center custom-height-88 pl-4">
                            <h4><strong>Skapa ny prisprofil</strong></h4>
                        </div>
                        <div className="px-4 mt-n3 text-secondary">
                            <form onSubmit={() => {}}>
                                <div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="priceProfileName">Namn</label>
                                        <input
                                            type="text"
                                            className="form-control custom-form-input"
                                            name="priceProfileName"
                                            placeholder=""
                                        />
                                    </div>
                                    <fieldset className="border custom-rounded-15 px-3 pb-3 mb-4">
                                        <legend className="w-auto">Standardpris</legend>
                                        <div className="form-row mt-n2">
                                            <div className="form-group col-md-6 mb-0">
                                                <label htmlFor="weekdays">Vardagar</label>
                                                <input
                                                    type="text"
                                                    className="form-control custom-form-input"
                                                    name="weekdays"
                                                />
                                            </div>
                                            <div className="form-group col-md-6 mb-0">
                                                <label htmlFor="weekends">Helger</label>
                                                <input
                                                    type="text"
                                                    className="form-control custom-form-input"
                                                    name="weekends"
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="border custom-rounded-15 px-3 pb-3 mb-4">
                                        <legend className="w-auto">Specialpris</legend>
                                        <div className="form-row mt-n2">
                                            <div className="form-group col-md-6 mb-0">
                                                <label htmlFor="timeinterval">Välj tidsintervall</label>
                                                <div className="d-flex">
                                                    <select
                                                        className="form-control custom-form-input p-0"
                                                        name="timefrom"
                                                    >
                                                        <option selected placeholder>Från</option>
                                                        <option value="1">08:00</option>
                                                        <option value="2">12:00</option>
                                                        <option value="3">16:00</option>
                                                    </select>
                                                    <h2 className="px-2">-</h2>
                                                    <select
                                                        className="form-control custom-form-input p-0"
                                                        name="timeto"
                                                    >
                                                                                                                                                        <option selected placeholder>Till</option>
                                                        <option value="1">12:00</option>
                                                        <option value="2">14:00</option>
                                                        <option value="3">16:00</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-6 mb-0">
                                                <label htmlFor="percent">Procentsats</label>
                                                <input
                                                    type="text"
                                                    className="form-control custom-form-input"
                                                    name="percent"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6 mb-0">
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
                                            <div className="form-group col-md-6 mb-0">
                                                <label htmlFor="percent">Procentsats</label>
                                                <input
                                                    type="text"
                                                    className="form-control custom-form-input"
                                                    name="percent"
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                        <div className="mt-auto">
                            <hr className="p-0 m-0 mb-2"/>
                            <div className="d-flex justify-content-end align-items-center custom-height-60 pr-4">
                                <p className="text-primary btn"><strong>Spara prisprofil</strong></p>
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

export default modalPriceManagement