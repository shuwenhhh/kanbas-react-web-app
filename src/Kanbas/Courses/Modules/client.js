import axios from "axios";
import { BACKEND_BASE_URL } from "../../../envVariables";

const COURSES_URL = `${BACKEND_BASE_URL}/courses`;
const MODULES_URL = `${BACKEND_BASE_URL}/modules`;
export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};
export const createModule = async (courseId, module) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
    );
    console.log(response.data);
    return response.data;
  };
  
export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
    console.log(response.data);
  return response.data;
};

export const updateModule = async (module) => {
    const response = await axios.
      put(`${MODULES_URL}/${module._id}`, module);
      console.log(response.data);
    return response.data;
  };
  