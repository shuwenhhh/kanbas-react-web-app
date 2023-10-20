import React from "react";
import { useParams } from "react-router-dom";
import db from "../Database";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./index.css";
function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <>
      <div className="float-end ms-5 me-5 module-list-nav">
        <button type="button" className="btn btn-secondary btn-sm ">
          Collapse All
        </button>
        <button type="button" className="btn btn-secondary btn-sm ">
          View progress
        </button>
        
        <DropdownButton id="dropdown-basic-button" title="Publish" className="btn btn-secondary btn-sm" >
        <Dropdown.Item href="#/action-1">Publish All items in Modules</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Unpublish</Dropdown.Item>
       </DropdownButton>
        
        <button type="button" className="btn red-button btn-sm">
          + Modules
        </button>
      </div>
      <div className="clearfix"></div>

      <ul className="list-group mt-3 mb-5 me-5 wd-modulelist">
        {modules.map((module, index) => (
          <>
            <li key={index} className="list-group-item">
              <div>
                <IoEllipsisVerticalSharp />
                <IoEllipsisVerticalSharp />
                &emsp;<span className="fw-bold">{module.name}</span>
                <span className="d-inline float-end">
                  <AiFillCheckCircle className="checkcircle" />
                  <FaEllipsisVertical />
                </span>
              </div>
            </li>
            {module.description.map((des, index) => (
              <li className="list-group-item ">
                <IoEllipsisVerticalSharp />
                <IoEllipsisVerticalSharp />
                &emsp; &emsp;&emsp;{des}
                <span className="d-inline float-end">
                  <AiFillCheckCircle className="checkcircle" />
                  <FaEllipsisVertical />
                </span>
              </li>
            ))}
          </>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
