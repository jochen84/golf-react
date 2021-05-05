import React from 'react';
import { BsFillQuestionDiamondFill, BsClock, BsFillPersonFill, } from 'react-icons/bs';
import { ImDelicious } from 'react-icons/im';
import { BiDollar } from 'react-icons/bi';
import { IoIosSettings, IoMdExit } from 'react-icons/io';
import { IoBag } from 'react-icons/io5';
import { Link, NavLink, BrowserRouter } from "react-router-dom";
import { Image } from 'react-bootstrap';

const Sidebar = ({showAdminBoard, currentUser, logOut, logo}) => {

    return (
        <div className="sidebar-container">
            <div className="sidebar-logo d-flex justify-content-around">
                <img className="club-logo-img" alt="Klubb logga" src={logo}/>
            </div>
            <ul className="sidebar-navigation">
                <li>
                    <NavLink to={"/overview"} activeClassName="active" className="nav-link">
                        <ImDelicious className="text-secondary mr-3 link-icon"/> Översikt
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/startschedule"} activeClassName="active" className="nav-link">
                        <BsClock className="text-secondary mr-3 link-icon"/> Startschema
                    </NavLink>
                </li>
                {showAdminBoard && (
                <>
                <li>
                    <NavLink to={"/customermanagement"} activeClassName="active" className="nav-link">
                        <BsFillPersonFill className="text-secondary mr-3 link-icon"/> Kundhantering
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/businessmanagement"} activeClassName="active" className="nav-link">
                        <IoBag className="text-secondary mr-3 link-icon"/> Företagshantering
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/pricemanagement"} activeClassName="active" className="nav-link">
                        <BiDollar className="text-secondary mr-3 link-icon"/> Prishantering
                    </NavLink>
                </li>
                </>
                )}
                <li>
                    <NavLink to={"/messaging"} activeClassName="active" className="nav-link">
                        <BsClock className="text-secondary mr-3 link-icon"/> Meddelanden
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/support"} activeClassName="active"  className="nav-link">
                        <BsFillQuestionDiamondFill className="text-secondary mr-3 link-icon"/> Support
                    </NavLink>
                </li>
                {/* 
                {currentUser && (
                    <li>
                        <Link to={"/user"} className="nav-link">
                            User
                        </Link>
                    </li>
                )}
                */}
                
                {currentUser ? (
                    <div className="lower-sidebar">
                        <hr/>
                        <p className="">Din profil</p>
                        <div className="profile-card">
                            <div className="d-flex justify-content-around align-items-center profile px-3">
                                <div>
                                    <Image src="https://images.mentor.se/wp-content/uploads/2020/03/19074104/Profile-placeholder.png" roundedCircle fluid className="shadow"/>
                                </div>
                                <div className="mr-3">
                                    <p className="m-0 pb-2"><strong>{currentUser.firstname + " " + currentUser.lastname}</strong></p>
                                    <p className="m-0">{showAdminBoard ? "Administratör" : "Användare"}</p>
                                </div>
                            </div>
                            <div>
                                <li className="nav-item">
                                    <Link to={"/profile"} className="nav-link">
                                        <IoIosSettings className="text-secondary mr-3 link-icon"/>Inställningar
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link" onClick={logOut}>
                                        <IoMdExit className="text-secondary mr-3 link-icon"/> Logga ut
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Sidebar;