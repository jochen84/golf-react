import React, {useState} from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import ImageUploading from 'react-images-uploading';
import AuthService from '../../services/auth.service';
import ModalCreateUser from '../modals/modalCreateUser/modalCreateUser'
import EditProfile from './EditProfile'

const Profile = (props) => {
    const currentUser = AuthService.getCurrentUser();

    const [showModal, setShowModal] = useState(false);

    const [image, setImage] = useState(null);
    const onChange = (imageList) => {
        setImage(imageList);
        console.log(imageList)
    };

    const saveLogo = () => {
        if(image != null) {
            props.setAppLogo(image[0].data_url)
        }
    }

    const openModal = () => {
        setShowModal(prev => !prev);
    };


    return (
        <>
        <ModalCreateUser showModal={showModal} setShowModal={setShowModal}/>
        <Container className="px-0 w-100 inner-container">
            <div>
                <h2>Användarinställningar</h2>
            </div>
            <Row className="h-100 pt-4">
                <Col md={8} className="h-100">
                    <div className="bg-custom-white h-100 shadow widget-rounded w-7 m-auto py-4 px-4">
                    <h3><strong>{currentUser.username}</strong>´s profil</h3>
                        <p>
                            <strong>Token:</strong> {currentUser.accessToken.substring(0,20)}...{" "}
                            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                        </p>
                        <Image src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'></Image>
                        <p><strong>ID: </strong>{currentUser.id}</p>
                        <p><strong>Användarnamn: </strong>{currentUser.username}</p>
                        <p><strong>Email: </strong> {currentUser.email}</p>
                        <strong>Roller:</strong>
                        <ul>
                            {currentUser.roles && currentUser.roles.map((role, index) =>
                                <li key={index}>{role}</li>
                            )}
                        </ul>
                        <p><strong>Förnamn: </strong>{currentUser.firstname}</p>
                        <p><strong>Efternamn: </strong>{currentUser.lastname}</p>
                        <div>
                            <h3>Om superadmin</h3>
                            <div className="d-flex justify-content-around">
                                <Button onClick={openModal}>Skapa användare</Button>
                                <Button>Edit användare</Button>
                                <ImageUploading value={image} onChange={onChange} dataURLKey="data_url">
                                    {({
                                    imageList,
                                    onImageUpload
                                    }) => (
                                        <div>
                                            <Button onClick={onImageUpload}>Byt logga</Button>
                                        </div>
                                    )}
                                </ImageUploading>
                                <Button onClick={saveLogo}>Spara logga</Button>
                            </div>
                            <p>Öppna en modul med logga istället</p>
                        </div>
                    </div>
                </Col>
            <Col md={4}>
                <div className="bg-custom-white h-100 shadow widget-rounded w-100 m-auto py-4 px-4">
                <h3>Redigera profil</h3>
                <EditProfile currentUser={currentUser}/>
                </div>
            </Col> 
        </Row>
    </Container>
    </>
    );
};

export default Profile;