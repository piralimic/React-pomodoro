import React from "react";
import PropTypes from "prop-types";

const TodoList = props => (
    <div>
        <p>{props.tasks.join(", ")}</p>
    </div>
);

TodoList.defaultProps = {
    tasks: ["nothing to do"],
};

TodoList.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default TodoList;
