import React from "react";

const ChildComponent = props => (
    <div>
        <p>
            {"Current date is : "}
            {props.date}
        </p>
    </div>
);

ChildComponent.defaultProps = {
    date: "not my birthday !",
};

export default ChildComponent;
