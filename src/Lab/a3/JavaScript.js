import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import  TernaryOperator from "./TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
function JavaScript() {
    return(
       <div>
          <h1>JavaScript</h1>
          console.log('Hello World!');
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
            <IfElse />
            <TernaryOperator /> 
            <WorkingWithFunctions />
            <JsonStringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <TemplateLiterals />
            <House />
            <Spread/>
            <Destructing/>
            <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript