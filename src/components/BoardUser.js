import React, {useState, useEffect} from 'react';
import UserService from '../services/user.service';

const BoardUser = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getUserBoard().then(
            (response) => {
                setContent("Response is: " + response.data)
            },
            (error) => {
                const _content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                setContent(_content)
            }
        );
    }, []);

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
                <p>Test</p>
            </header>
        </div>
    );
}

export default BoardUser;