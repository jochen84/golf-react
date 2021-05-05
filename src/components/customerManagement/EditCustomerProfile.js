import React, { useEffect, useState, useRef } from 'react';
import ImageUploading from 'react-images-uploading';
import { IoMdImage } from 'react-icons/io';
const EditCustomerProfile = ({customer, cancel, updated}) => {

    const form = useRef();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [membertype, setMembertype] = useState('');

    const [image, setImage] = useState(null);
    const onChange = (imageList) => {
        setImage(imageList);
        console.log(imageList)
    };

    useEffect(() => {
        form.current.reset();
        setFirstname(customer === undefined ? '' : customer.firstname);
        setLastname(customer === undefined ? '' : customer.lastname);
        setMembertype(customer === undefined ? '' : customer.membertype);
        setImage(null)
    }, [customer])

    const onChangeFirstname = (e) => {
        const firstname = e.target.value;
        setFirstname(firstname);
    };
    const onChangeLastname = (e) => {
        const lastname = e.target.value;
        setLastname(lastname);
    };
    const onChangeMembertype = (e) => {
        if (e.target.value === 'full'){
            console.log('Full')
            setMembertype('Fullvärdig');
        }
        else if (e.target.value === 'junior') {
            console.log('Junior')
            setMembertype('Juniormedlem');
        }
        else if (e.target.value === 'inactive'){
            console.log('Passiv')
            setMembertype('Passiv');
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        customer.firstname = firstname;
        customer.lastname = lastname;
        customer.membertype = membertype;
        if(image != null) {
            customer.picture = image[0].data_url;
        }
        updated(true);
    }

    const onCancelHandler = (e) => {
        e.preventDefault();
        cancel(undefined);
    }

    return (
        <div>
            <div className="edit-profile-image position-relative">
                <img
                    src={image != null ? image[0].data_url : customer === undefined ? '//ssl.gstatic.com/accounts/ui/avatar_2x.png' : customer.picture}
                    alt="profile-img"
                />
                <div className="d-flex py-1 justify-content-around align-items-center position-absolute fixed-bottom edit-profile-edit-image">
                    <p className="m-0 p-0">olle.jpg</p>
                    <label className="btn text-primary m-0 p-0">
                        <ImageUploading value={image} onChange={onChange} dataURLKey="data_url">
                            {({
                            imageList,
                            onImageUpload
                            }) => (
                                <div>
                                    {/*onClick={onImageUpload} must be inside <button> or fileupload opens twice*/}
                                    <p className="btn text-primary m-0 p-0" ><strong>Ändra bild</strong><IoMdImage className="h3 mt-1 ml-2"/><button className="invisible" onClick={onImageUpload}></button></p>
                                </div>
                                
                            )}
                        </ImageUploading>
                    </label>
                </div>
            </div>
        
            <form ref={form} onSubmit={() => {}}>
                <div>
                    <div className="form-row">
                        <div className="form-group col-md-6 mb-0">
                            <label htmlFor="firstname">Förnamn</label>
                            <input
                                type="text"
                                className="form-control custom-form-input"
                                name="firstname"
                                placeholder={customer === undefined ? '' : customer.firstname}
                                onChange={onChangeFirstname}
                                //validations={[required, vusername]}
                            />
                        </div>
                        <div className="form-group col-md-6 mb-0">
                            <label htmlFor="lastname">Efternamn</label>
                            <input
                                type="text"
                                className="form-control custom-form-input"
                                name="lastname"
                                placeholder={customer === undefined ? '' : customer.lastname}
                                onChange={onChangeLastname}
                                //validations={[required, vusername]}
                            />
                        </div>
                    </div>

                    <div className="form-group mb-0">
                        <label htmlFor="text">Golf-ID</label>
                        <input
                            type="text"
                            className="form-control custom-form-input"
                            //className="form-control-plaintext custom-form-input pl-3" **READONLY**
                            name="golfid"
                            value={customer === undefined ? '' : customer.golfId}
                            readOnly
                        />
                    </div>

                    {/*Bug with selected, if you change type, and changeback to original, it still changes clients value*/}
                    <div className="form-group mb-0">
                        <label htmlFor="text">Medlemstyp</label>
                        <select className="form-control custom-form-input" name="membertype" onChange={onChangeMembertype}>
                            <option selected>{customer === undefined ? '' : customer.membertype}</option>
                            <option value="full">Fullvärdig</option>
                            <option value="junior">Juniormedlem</option>
                            <option value="inactive">Passiv</option>
                        </select>
                    </div>
                    <div className="form-group mb-0">
                        <label htmlFor="text">Handicap</label>
                        <input
                            type="text"
                            className="form-control custom-form-input"
                            //className="form-control-plaintext custom-form-input pl-3" **READONLY**
                            name="handicap"
                            value={customer === undefined ? '' : customer.handicap}
                            readOnly
                        />
                    </div>
                    <div className="form-group mb-0">
                        <label htmlFor="text">Tävlings handicap</label>
                        <input
                            type="text" 
                            className="form-control custom-form-input"
                            //className="form-control-plaintext custom-form-input pl-3" **READONLY**
                            name="profhandicap"
                            value={customer === undefined ? '' : customer.profhandicap}
                            readOnly
                        />
                    </div>
                </div>
            </form>
            <div className="d-flex justify-content-end position-absolute fixed-bottom align-items-center custom-h-53 border-top">
                <p className="btn btn-font text-primary p-0 m-0 pr-4" onClick={onSubmitHandler}>Spara profil</p>
                <p className="btn btn-font p-0 m-0 pr-4" onClick={onCancelHandler}>Avbryt</p>
            </div>
        </div>
    );
};

export default EditCustomerProfile;