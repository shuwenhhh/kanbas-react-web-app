import ModuleList from "../Modules/ModuleList";
import Status from "../Status";

function Home() {
  return (
    <div className="d-flex">
      <div style={{ flex: 2 }}>
      <ModuleList  /> 
      </div>
      <div style={{ flex: 1 }}> 
<Status />
  </div>
  
</div>
  );
}
export default Home;