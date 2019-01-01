import * as React from "react";
import "./CodeOutput.css";

declare global {
  interface Window {
    require: any;
  }
}
// Using require alone doesnt work for some reasons. I think has to do with webpack
const fs = window.require("fs");
const exec = window.require("child_process").exec;

// file the written code gets written to
const filePath: string = "yorlangInputCode/yorlangTest.yl";

interface ICodeOutputProps {
  inputCode: string;
}
interface ICodeOutputState {
  output: string;
  inputCode: string;
}

class CodeOutput extends React.Component<ICodeOutputProps, ICodeOutputState> {
  public myIframe: any;
  constructor(props: ICodeOutputProps) {
    super(props);
    this.state = {
      inputCode: this.props.inputCode,
      output: ""
    };
  }

  componentWillReceiveProps(newProps: ICodeOutputProps) {
    if (this.props.inputCode !== newProps.inputCode) {
      this.setState(
        {
          inputCode: newProps.inputCode
        },
        () => {
          this.writeStringToFile();
        }
      );
    }
  }

  componentDidMount() {
    this.writeStringToFile();
  }

  /**
   * Write code to file so that yorlang can compile it
   */
  writeStringToFile = () => {
    fs.writeFileSync(filePath, this.state.inputCode, err => {
      if (err) {
        console.log(err);
        throw err;
      }
    });
    this.convertYorlToJs();
  };

  convertYorlToJs = () => {
    exec(
      `./node_modules/yorlang/cli.js ${filePath}`,
      (error, stdout, stderr) => {
        if (stderr) {
          alert(stderr);
          return;
        }

        this.setState({
          output: stdout
        });

        console.log(`${stdout}`);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }
      }
    );
  };

  render() {
    return (
      <div style={{ lineHeight: "20px", padding: "10px" }}>
        <b>Output</b>
        <hr />
        <span>
          <pre>{this.state.output}</pre>
        </span>
      </div>
    );
  }
}

export default CodeOutput;
