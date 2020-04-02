import React from "react";
import "./styles.css";
export default class AddtaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Summary: "",
      Desc: "",
      priority: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, e) {
    let fieldval = e.target.value;
    this.setState({ field: fieldval });
    console.log(this.state.field);
  }

  handleSubmit(event) {
    event.preventDefault();
    return this.props.cancel;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="taskform">
        <div>
          <label>Summary:</label>
          <span>
            <input
              name="Summary"
              type="input"
              onChange={this.handleChange.bind(this, "Summary")}
              value={this.state.name}
            />
          </span>
        </div>
        <div>
          <label>Description</label>
          <span>
            <textarea name="Description" />
          </span>
        </div>
        <div style={{ float: "left" }}>
          <label>Priority</label>
          <span>
            <select name="Priority">
              <option value="None" selected>
                None
              </option>
              <option value="low">Low</option>
              <option value="Medium">Medium</option>
              <option value="high">High</option>
            </select>
          </span>
        </div>

        <button value="Cancel" name="Cancel" onClick={this.props.cancel}>
          Cancel
        </button>
        <button value="Submit" name="Save">
          Save
        </button>
      </form>
    );
  }
}
