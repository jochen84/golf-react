import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

const EditWidgetRow = () => {
    return (
        <div className="d-flex justify-content-between align-items-center custom-fade-in">
            <h5 className="ml-5 m-0 py-3 text-primary">Editera</h5>
            <div className="d-flex mr-5">
                <h4 className="mr-2"><AiOutlineArrowUp /></h4>
                <h4 className="mr-2"><AiOutlineArrowDown/></h4>
                <h4><BsThreeDotsVertical/></h4>
            </div>
        </div>
    );
}

export default EditWidgetRow;