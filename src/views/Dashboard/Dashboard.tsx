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
        <div style={{ height: innerHeight / 2, overflowY: 'auto' }}>
          <CodeInput onCodeEnter={this.onCodeEnter} />
        </div>
        <div style={{ height: innerHeight / 2, overflowY: 'auto' }}>
          <CodeOutput inputCode={this.state.inputCode} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
