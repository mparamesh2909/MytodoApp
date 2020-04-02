import React from "react";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import MyTabs from "./MyTabs";
import Content from "./Content.js";
import "./styles.css";
import SearchField from "react-search-field";
//import { HashRouter } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: ""
    };
  }
  render() {
    const onChange = () => {
      this.setState({ searchfield: this.searchfield });
    };
    return (
      <div className="App">
        <SearchField
          style={{ left: "0px", position: "fixed" }}
          placeholder="Search..."
          onChange={onChange}
          searchText=""
          classNames="test-class"
        />
        <br />
        <div style={{ margin: "10px", border: "2px" }}>
          <MyTabs />
        </div>
        <div>{this.state.searchfield}</div>
        <Popup modal trigger={<button className="myStyle" />}>
          {close => <Content close={close} />}
        </Popup>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
