import {React, useState} from 'react';
import db from "../Database";
import { Link } from "react-router-dom";
import './index.css';

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });
  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };
  
  return (
    <div className="wd-grid-container">
      <div className="wd-grid-col-main-content content-padding">
        <h1>Dashboard</h1>
        <h5>Course</h5>
      <input value={course.name} className="form-control"
         onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control" 
         onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.stafrtDate} className="form-control" type="date" 
         onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date" 
         onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} className="btn btn-primary">
        Add
      </button>
      <button onClick={updateCourse} className="btn btn-primary">
        Update
      </button>
        <hr />
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="flex-container">
          {courses.map((course, index) => (
            <div className="flex-item">
<div className="card" style={{ width: '260px', marginTop: '35px' }}>
<div
        style={{
          backgroundColor: generateRandomColor(),
          height: "150px", // 设置高度
          width: '260px',   // 设置宽度
          
        }}
        className="card-img-top"
      ></div>
              {/* <div className="card" style={{ width: '260px', marginTop: '35px' }}>                
              <img src="/images/blue-1.png" className="card-img-top" alt="course-thumbnail" /> */}
                <div className="card-body">
                  <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <Link 
                      to={`/Kanbas/Courses/${course._id}`} 
                      style={{ textDecoration: 'none', color: '#3498db' }}
                    >

                      <b>{course.name}</b>
                    </Link>
                  </h5>
                  <p className="card-text">Section 1 for {course.name}</p>
                  <br />
                  <button className="btn btn-transparent" style={{ backgroundColor: 'transparent', color: 'white' }}>
                    <i className="far fa-list-alt" style={{ color: '#838383' }}></i>
                  </button>
                  <div>
                  <button className="btn btn-primary"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit
              </button>
                <button className="btn btn-primary"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}>
                  Delete
                </button>
                  </div>
                </div>
              </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


// <h2>Published Courses</h2>
// <hr />
// </div>
// </div>
// {/* card */}
// <div className="container-fluid">
// <div className="row ">
// {db.courses.map((course) => (
// <div className="col col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 ">
// <div className="card h-100 ">
// <div
//         style={{
//           backgroundColor: generateRandomColor(),
//           height: "150px", // 设置高度
//           width: "100%",   // 设置宽度
//         }}
//         className="card-img-top"
//       ></div>
//   <div className="card-body">
//   <Link
//   key={course._id}
//   to={`/Kanbas/Courses/${course._id}`}
// >
//   {course.name} 
// </Link>              
// <p className="card-text">{course.number}  {course._id}</p>
//     <i className="fa-solid fa-pen-to-square"></i>
//     <BsPencilSquare />
//   </div>
// </div>
// </div>
// ))}
// </div>
// </div>
// </>
// );
// }
// export default Dashboard;
