import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Sam"
          date="Today 6:00PM"
          text="This is a post!"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Jane"
          date="Today 6:03PM"
          text="Hello there"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Dan"
          date="Today 6:11PM"
          text="good lie!"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
