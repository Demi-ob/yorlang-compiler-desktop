import { RaisedButton } from "material-ui";
import * as React from "react";
import * as CodeMirror from "react-codemirror";
import "../../../node_modules/codemirror/lib/codemirror.css";
import "../../../node_modules/codemirror/theme/material.css";
import "./CodeInput.css";

require("codemirror/mode/javascript/javascript");

const downloadFile = (filename, text) => {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

interface ICodeInputProps {
  onCodeEnter: (newCode: string) => any;
}
interface ICodeInputState {
  inputCode: string;
}

class CodeInput extends React.Component<ICodeInputProps, ICodeInputState> {
  constructor(props: ICodeInputProps) {
    super(props);
    this.state = {
      inputCode: ""
    };
  }

  componentWillMount() {
    const offlineCode = localStorage.getItem("offlineCode");

    this.setState({
      inputCode: offlineCode ? offlineCode : ""
    });
  }

  updateCode = (newCode: string) => {
    this.setState(
      {
        inputCode: newCode
      },
      () => {
        localStorage.setItem("offlineCode", this.state.inputCode);
      }
    );
  };

  downloadClicked = () => {
    downloadFile(`inputCode.txt`, this.state.inputCode);
  };

  render() {
    let options = {
      lineNumbers: true,
      mode: "javascript",
      theme: "material",
      styleActiveLine: true,
      matchBrackets: true
    };
    return (
      <div className="home-body">
        <CodeMirror
          defaultValue={this.state.inputCode}
          value={this.state.inputCode}
          onChange={this.updateCode}
          options={options}
        />
        <div>
          <RaisedButton
            backgroundColor="green"
            labelColor="#fff"
            style={{ margin: "2px" }}
            label="Download code"
            onClick={this.downloadClicked}
          />
          <RaisedButton
            backgroundColor="green"
            labelColor="#fff"
            style={{ margin: "2px" }}
            label="Run"
            onClick={() => this.props.onCodeEnter(this.state.inputCode)}
          />
        </div>
      </div>
    );
  }
}

export default CodeInput;
