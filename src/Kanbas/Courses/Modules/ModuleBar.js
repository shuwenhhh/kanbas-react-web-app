import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical} from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";

function ModuleBar() {
    return (
        <div className="d-flex flex-nowrap float-end me-3">
            <button  className="btn btn-sm btn-secondary flex-shrink-0 me-1">Collapse All</button>
            
            <select className="form-select btn btn-sm btn-secondary me-1" style={{width:"90px"}}>
                <AiOutlineCheckCircle style={{color: "rgba(35, 155, 24, 0.905"}}/>
                <option selected>Publish All</option>
                <option value="1">Publish all items and modules</option>
                <option value="2">Unpublish</option>
            </select>
            <button className="btn btn-sm btn-danger flex-shrink-0 me-1"><AiOutlinePlus/>Modules</button>
            <button className="btn btn-sm btn-secondary flex-shrink-0 me-1"><BsThreeDotsVertical/></button>
         </div>
    );
}

export default ModuleBar;