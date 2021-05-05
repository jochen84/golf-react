import React, {useState} from 'react';
import { Col } from 'react-bootstrap';
import { LineChart, Line, XAxis, Tooltip} from 'recharts';
import { FaRegCalendar } from 'react-icons/fa';
import shedulesDb from '../../../fakedb/dayShedules';
import EditWidgetRow from '../widgetsEdit/EditWidgetRow';

import DatePicker from 'react-datepicker';
import sv from 'date-fns/locale/sv';
import "react-datepicker/dist/react-datepicker.css";

const FullDayShedule = (props) => {

    const [startDate, setStartDate] = useState(new Date());

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let splitDate = startDate.toLocaleDateString('sv-SV', options).split(" ");
    let month = splitDate[2];
    let day = splitDate[1];

    const CustomInput = ({ value, onClick }) => (
        <h1 className="btn border-bottom m-0 p-1" onClick={onClick}>
            <FaRegCalendar className="text-primary mb-1 mr-2 link-icon"/> {day + " " + month}
        </h1>
    );

    return (
        <Col md={12} draggable>
            <div className="edit-widget-pop widget-rounded">
                <div className="bg-custom-white custom-height-large-widget widget-shadow widget-rounded w-100 m-auto py-4 px-4">
                    <div className="d-flex justify-content-between">
                        <h4> Aktivitet under dagen </h4>
                        <div>
                            <DatePicker
                                className="font-weight-light"
                                locale={sv}
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                popperPlacement="top-end"
                                customInput={<CustomInput />}
                            />
                        </div>
                    </div>
                    <LineChart className="mx-auto" width={960} height={290} data={shedulesDb[day-1]} margin={{ top: 10, right: 25, bottom: 5, left: 25 }}>
                        <Line type="monotone" dataKey="bookings" stroke="#ffc107" strokeWidth="3"/>
                        <XAxis dataKey="time" />
                        <Tooltip />
                    </LineChart>
                </div>
                {props.edit &&
                <EditWidgetRow />
                }
            </div>
        </Col>
    );
};

export default FullDayShedule;