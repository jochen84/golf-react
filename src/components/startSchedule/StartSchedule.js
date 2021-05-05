import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import scheduleJson from '../../fakedb/schedules.json';

const StartSchedule = (props) => {

    const setUpWeekJson = (day) => {
        return (
            <>
                <div className="">{test(scheduleJson[day-1].bookings[0])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[1])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[2])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[3])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[4])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[5])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[6])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[7])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[8])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[9])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[10])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[11])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[12])}</div>
                <div className="">{test(scheduleJson[day-1].bookings[13])}</div>
            </>
        )
    }

    const test = (x) => {
        if(x >= 7) return <div className="bg-danger schedule-box text-light p-1">Fullbokat</div>
        if(x < 7 && x !== 0) return <div className="bg-success schedule-box text-light p-1"><h5 className="m-0">{x} Bokningar</h5><p>{7-x} Lediga tider</p></div>
        if(x === 0) return <div className="bg-secondary schedule-box text-dark p-1">Inga bokningar</div>
    }

    const mathRandom = () => {
        let x = Math.floor(Math.random() * 8);
        return x;
    }
    return (
        <Container className="px-0 w-100 inner-container">
            <div>
                <h2>Startschema</h2>
            </div>
            <div className="h-100 pt-5 bg-custom-white h-100 custom-shadow widget-rounded w-7 m-auto py-4 px-4">
                <div>
                    <h4>Vecka 40</h4>
                </div>
                <Row className="pt-5">
                    <Col md={2} className="h-100 text-center">
                        <div className="schedule-box h2 text-secondary"></div>
                        <div className="schedule-box">08:00</div>
                        <div className="schedule-box">10:00</div>
                        <div className="schedule-box">12:00</div>
                        <div className="schedule-box">14:00</div>
                        <div className="schedule-box">16:00</div>
                        <div className="schedule-box">18:00</div>
                        <div className="schedule-box">20:00</div>
                        <div className="schedule-box">22:00</div>
                    </Col>
                    <Col md={2} className="h-100" >
                        <div className="schedule-box h2 text-secondary">Måndag</div>
                        {setUpWeekJson(1)}
                    </Col>
                    <Col md={2} className="h-100" >
                        <div className="schedule-box h2 text-secondary">Tisdag</div>
                        {setUpWeekJson(2)}
                    </Col>
                    <Col md={2} className="h-100" >
                        <div className="schedule-box h2 text-secondary">Onsdag</div>
                        {setUpWeekJson(3)}
                    </Col>
                    <Col md={2} className="h-100" >
                        <div className="schedule-box h2 text-secondary">Torsdag</div>
                        {setUpWeekJson(4)}
                    </Col>
                    <Col md={2} className="h-100" >
                        <div className="schedule-box h2 text-secondary">Fredag</div>
                        {setUpWeekJson(5)}
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default StartSchedule;