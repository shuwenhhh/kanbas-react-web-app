import "./index.css";
import {SlCalender} from "react-icons/sl";
const Status = () => {
    return (
        <div className = 'd-none d-sm-none d-md-none d-lg-none d-xl-block p-0 courseStatus '>
        <h3>Course Status</h3>
    <button type="button" class="btn btn-secondary btn-sm ">Unpublish</button>
    <button type="button" class="btn green-button btn-sm ms-3">Published</button>
    <div className="d-grid gap-2 col-1 mt-3 w-300">
        <a href="/#" className="btn btn-primary btn-300">Import existing Contents</a>
        <a href="/#" className="btn btn-primary">Import From Commons</a>
        <a href="/#" className="btn btn-primary">Choose Home Page</a>
        <a href="/#" className="btn btn-primary">View Course Stream</a>
        <a href="/#" className="btn btn-primary">New Announcement</a>
        <a href="/#" className="btn btn-primary">New Analytics</a>
        <a href="/#" className="btn btn-primary">View Course Notifications</a>
      </div>
      <h3 className = 'mt-3'>Comming up</h3>


<h4 className = 'link-list'><SlCalender className="me-2"/><a href = '/#'>View Calendar</a></h4>
<ul className = 'link-list'>
    <li><SlCalender/> <a href = '/#'>Lecture CS5610 At Tuesday</a> </li>
    <li><SlCalender/> <a href = '/#'>Lecture CS5610 At Tuesday</a> </li>
    <li><SlCalender/> <a href = '/#'>Lecture CS5610 At Tuesday</a> </li>

</ul></div>
    );
    }
    export default Status;