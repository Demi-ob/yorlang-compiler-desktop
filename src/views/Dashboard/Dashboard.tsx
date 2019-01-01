import * as React from "react";
import "./Dashboard.css";
import CodeInput from "../../components/CodeInput/CodeInput";
import CodeOutput from "../../components/CodeOutput/CodeOutput";
interface IDashboardProps {}
interface IDashboardState {
  inputCode: string;
}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      inputCode: ""
    };
  }

  onCodeEnter = (newCode: string) => {
    this.setState({
      inputCode: newCode
    });
  };

  render() {
    return (
      <div>
        <CodeInput onCodeEnter={this.onCodeEnter} />
        <br />
        <CodeOutput inputCode={this.state.inputCode} />
      </div>
    );
  }
}

export default Dashboard;
