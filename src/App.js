import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style/sidebar.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/userProfile/Profile";
import BoardUser from "./components/BoardUser";
import BoardGreenkeeper from "./components/BoardGreenkeeper";
import BoardAdmin from "./components/BoardAdmin";
import Overview from "./components/overview/Overview";
import StartSchedule from "./components/startSchedule/StartSchedule";
import CustomerManagement from "./components/customerManagement/CustomerManagement";
import BusinessManagementTab from './components/buisnessManagement/BusinessManagementTab';
import PriceManagementTab from './components/priceManagement/PriceManagementTab';
import MessagesTab from './components/messages/MessagesTab';
import SupportTab from './components/support/SupportTab';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
    const [showGreenkeeperBoard, setShowGreenkeeperBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [appLogo, setAppLogo] = useState('https://www.designevo.com/res/templates/thumb_small/white-golf-ball-and-green-golf-course.png')

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowGreenkeeperBoard(user.roles.includes("ROLE_GREENKEEPER"));
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };
    
    return (
        <div className="background">
            <div data-testid="isthere" className="app-container mx-auto">
                {currentUser === undefined ? (<div className="login-screen d-flex align-items-center">
                    <>
                    <Switch>
                        <Route exact path="/" component={Login} />
                    </Switch>
                    </>
                </div>):(
                <>
                <Sidebar showAdminBoard={showAdminBoard} currentUser={currentUser} logOut={logOut} logo={appLogo} />
                <div className="view-container">
                <>
                    <Switch>
                        {/*<Redirect from="/" to="/overview"/>*/}
                        <Route exact path="/" component={Overview} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/overview" component={Overview}/>
                        <Route exact path="/startschedule" component={StartSchedule}/>
                        <Route exact path="/customermanagement" component={CustomerManagement}/>
                        <Route exact path="/businessmanagement" component={BusinessManagementTab}/>
                        <Route exact path="/pricemanagement" component={PriceManagementTab}/>
                        <Route exact path="/messaging" component={MessagesTab}/>
                        <Route exact path="/support" component={SupportTab}/>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        {/*<Route exact path="/profile" component={Profile} />*/}
                        <Route
                            path='/profile'
                            render={(props) => (
                                <Profile {...props} setAppLogo={setAppLogo} />
                            )}
                        />
                        <Route path="/user" component={BoardUser} />
                        <Route path="/greenkeeper" component={BoardGreenkeeper} />
                        <Route path="/admin" component={BoardAdmin} />
                    </Switch>
                    </>
                </div>
                </>
                )}
            </div>
        </div>
    );
};

export default App;