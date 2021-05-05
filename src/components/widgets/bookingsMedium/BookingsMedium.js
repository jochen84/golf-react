import React, {useState} from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import customers from '../../../fakedb/customers';
import EditWidgetRow from '../widgetsEdit/EditWidgetRow';

const BookingsMediumWidget = (props) => {

    const [playerList, setPlayerList] = useState(customers);

    const playersRender = (player) => {
        return (
            <>
            {player.booked ? (
                <div className="d-flex align-items-center m-auto py-2 px-1">
                    <div>
                        <Image className="profile-image shadow" src={player.picture} alt={player.profilbild} roundedCircle/>
                    </div>
                    <div className="ml-3">
                        <p className="p-0 m-0"><strong>{player.firstname + ' ' + player.lastname}</strong></p>
                        <p className="p-0 m-0">{player.bookedAt}</p>
                    </div>
                    <div className="ml-auto mr-3">
                        <Link to="/customermanagement/#playerID#" className="btn btn-font text-primary p-0 m-0">Se profil</Link>
                        {/*<p className="btn btn-font text-primary p-0 m-0" onClick={() => console.log(`Gå till profil - ${player.firstname}`)}>Se profil</p>*/}
                    </div>
                </div>
                ) : (<></>)}
            </>
        );
    }

    return (
        <Col md={6} draggable>
            <div className="edit-widget-pop widget-rounded">
                <div className="bg-custom-green custom-height-medium-widget widget-shadow widget-rounded w-100 m-auto py-4 px-4">
                    <div className="d-flex justify-content-between">
                        <h5>Inbokade spelare under dagen</h5>
                        <h5><BiDotsHorizontalRounded /></h5>
                    </div>
                    <div className="custom-h-84 w-100 overflow-auto custom-scroll">
                        {playerList.map((player, index) => (
                            <React.Fragment key={index}>{playersRender(player)}</React.Fragment>
                        ))}
                    </div>
                </div>
                {props.edit &&
                <EditWidgetRow />
                }
            </div>
        </Col>
    );
};

export default BookingsMediumWidget;