import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { BsPencilSquare } from "react-icons/bs";
function Dashboard() {

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };
  return (
    <>
      <div>
        <div className="ms-5">
          <h1>Dashboard</h1>
          <hr />
          <h2>Published Courses</h2>
          <hr />
        </div>
      </div>
      {/* card */}
        <div className="container-fluid">
        <div className="row ">
        {db.courses.map((course) => (
          <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 ">
          <div className="card h-100 ">
          <div
                  style={{
                    backgroundColor: generateRandomColor(),
                    height: "150px", // 设置高度
                    width: "100%",   // 设置宽度
                  }}
                  className="card-img-top"
                ></div>
            <div className="card-body">
            <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
          >
            {course.name} 
          </Link>              
          <p className="card-text">{course.number}  {course._id}</p>
              <i className="fa-solid fa-pen-to-square"></i>
              <BsPencilSquare />
            </div>
          </div>
        </div>
        ))}
          </div>
        </div>
    </>
  );
}
export default Dashboard;
