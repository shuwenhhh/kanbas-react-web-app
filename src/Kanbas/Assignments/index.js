import React from "react";
import {Link, useParams} from "react-router-dom";
import db from "../Database";
import {FaEllipsisVertical, FaFilePen} from "react-icons/fa6";
import {AiFillCheckCircle} from "react-icons/ai";
import {IoEllipsisVerticalSharp} from "react-icons/io5";
import "./index.css";
function Assignments() {
    const {courseId} = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
    return (<div className='wd-assignment'>
        {/* assignments nav */}
        <div className="container-fluid">
            <div className="row ms-3">
                <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Search for Assignment" aria-label="assignment_name" aria-describedby="basic-addon1" />
                    </div>
                    <div className='col float-end'>
                        <button type="button" className="btn btn-secondary btn-sm float-end me-5">
                        <IoEllipsisVerticalSharp />
                        </button>
                        <button type="button" className="btn btn-secondary btn-sm red-button float-end me-3">+ Assignments</button>
                        <button type="button" className="btn btn-secondary btn-sm float-end me-3">+ Group</button>


                    </div>

                </div>
            </div>
            <ul className="list-group mt-3 mb-5 me-5 wd-modulelist">
                <li className="list-group-item list-group-item-secondary">
                    <IoEllipsisVerticalSharp/>
                    <IoEllipsisVerticalSharp/>
                    &emsp;<span className="fw-bold">Assignments for course {courseId}</span>
                </li>
                {
                courseAssignments.map((assignment) => (
                    <Link key={
                            assignment._id
                        }
                        to={
                            `/Kanbas/Courses/${courseId}/Assignments/${
                                assignment._id
                            }`
                        }
                        className="list-group-item">
                        <IoEllipsisVerticalSharp/>
                        <IoEllipsisVerticalSharp/>
                        <FaFilePen className="ms-3 filepen"/>
                        &emsp; &emsp;&emsp; {
                        assignment.title
                    }
                        <span className="d-inline float-end">
                            <AiFillCheckCircle className="checkcircle"/>
                            <FaEllipsisVertical/>
                        </span>
                    </Link>
                ))
            } </ul>
        </div>
        );
        }
        export default Assignments;
