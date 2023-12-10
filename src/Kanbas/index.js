import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import { BACKEND_BASE_URL } from "../envVariables";
import {useEffect, useState } from "react";
import store from "./store";
import axios from "axios";
import { Provider } from "react-redux";

function Kanbas() {
  // const [courses, setCourses] = useState(db.courses);
  const [courses, setCourses] = useState([]);
  const URL = `${BACKEND_BASE_URL}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  console.log(courses);
  useEffect(() => {
    findAllCourses();

  }, []);
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    console.log(response.data);
    setCourse({ name: "New Course" });
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${courseId}`
    );
    console.log(response.data);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "New Course" });
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div>
          <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={
            <Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;