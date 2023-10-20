import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { FaBars } from "react-icons/fa";
import "./index.css";
function CourseName({id,module}) {

  return (
    <div className='ms-2 mt-2 mb-2'>
    <Breadcrumbs  separator={<NavigateNextIcon fontSize="small" className = "wd-course-nav"/>}
    aria-label="breadcrumb">
    <Link underline="hover" color="inherit" href="/" >
    <FaBars className='me-3 mb-1'/>
    {id}
  </Link>
 
  <Typography color="text.primary">{module}</Typography>
    </Breadcrumbs>
    </div>
  )
}
export default CourseName;