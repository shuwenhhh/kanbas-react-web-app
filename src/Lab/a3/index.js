import PathParameters from "./PathParameters";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Styles from "./Styles";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import JavaScript from "./JavaScript";
function Assignment3() {
    return (
      <div className="container">
        <h2>Assignment 3</h2>
        <Classes/>
        <PathParameters />
        <Styles/>
        <ConditionalOutput/>
        <TodoItem/>
        <TodoList/>
        <JavaScript/>
      </div>
    );
  }
  export default Assignment3;