import db from "../Database";
import { useParams } from "react-router-dom";
import { BiSolidFileExport, BiSolidFileImport,BiFilterAlt } from "react-icons/bi";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div>
      <h1>Grades</h1>
      <div className="float-end mb-3 me-5">
        <button type="button" className="btn btn-secondary btn-sm me-3">
          <BiSolidFileImport />
          Import
        </button>
        <button type="button" className="btn btn-secondary btn-sm ">
          <BiSolidFileExport />
          Export
        </button>
      </div>
      <div className="clearfix"></div>
      <div className="d-flex justify-content-between">
        <div className="ms-5">
          <label htmlFor="student_name" className="form-label">
            Student Names
          </label>
          <input
            type="text"
            id="student_name"
            className="form-control"
            placeholder="Search Students"
          />
        </div>
        <div className="me-5">
          <label htmlFor="assignment_name" className="form-label">
            Assignment Names
          </label>
          <input
            type="text"
            id="assignment_name"
            className="form-control"
            placeholder="Search Assignment"
          />
        </div>
      </div>
      <div class="ms-5 mt-3">
        <button type="button" class="btn btn-secondary btn-sm ">
          <BiFilterAlt/>Apply Filters
        </button>
      </div>
      <div className="table-responsive">
        <table className="table  mt-3 ms-5 me-5" border="1" width="100%">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment, index) => (
                <th key={index}>{assignment.title}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {enrollments.map((enrollment, index) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td key={index}>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
