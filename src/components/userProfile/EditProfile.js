import React from 'react';
const EditProfile = ({currentUser}) => {

    return (
        <div>
            <div className="edit-profile-image">
                <img
                    src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
                    alt="profile-img"
                />
                <div className="d-flex justify-content-around mt-n5 pt-2">
                    <p>imgSname.jpg</p>
                    <p>Ändra bild ICON</p>
                </div>
            </div>
        
            <form onSubmit={() => {}}>
                <div>
                    <div className="form-group mb-0">
                        <label htmlFor="firstname">Förnamn</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstname"
                            value={currentUser === undefined ? '' : currentUser.firstname}
                            //onChange={onChangeUsername}
                            //validations={[required, vusername]}
                        />
                    </div>
                    <div className="form-group mb-0">
                        <label htmlFor="lastname">Efternamn</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastname"
                            value={currentUser === undefined ? '' : currentUser.lastname}
                            //onChange={onChangeUsername}
                            //validations={[required, vusername]}
                        />
                    </div>
                    <div className="form-group mb-0">
                        <label htmlFor="text">Användarnamn</label>
                        <input
                            type="text"
                            className="form-control"
                            name="golfid"
                            value={currentUser === undefined ? '' : currentUser.username}
                            //onChange={onChangeEmail}
                            //validations={[required, validEmail]}
                        />
                    </div>
                    <div className="form-group mb-0">
                        <label htmlFor="text">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="membertype"
                            value={currentUser === undefined ? '' : currentUser.email}
                            //onChange={onChangePassword}
                            //validations={[required, vpassword]}
                        />
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between">
                        <p>Uppdatera profil</p>
                        <p>Avbryt</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;