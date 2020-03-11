import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();

    this.state = {
      isOpen: false,
      value: moment.range(today.clone().subtract(7, "days"), today.clone())
    };
  }

  onSelect(value, states) {
    this.setState({ value, states });
    this.onToggle();
  };

  onToggle () {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderSelectionValue(){
    return (
      <div>
        <div>Selection</div>
        {"From  :"}
        {this.state.value.start.format("YYYY-MM-DD")}
        {" - To  :"}
        {this.state.value.end.format("YYYY-MM-DD")}
      </div>
    );
  };

  render() {
    return (
      <div >
        <div>{this.renderSelectionValue()}</div>

        <div>
          <input
            type="button"
            value="Toggle date picker"
            onClick={this.onToggle.bind(this)}
          />
        </div>

        {this.state.isOpen && (
          <DateRangePicker
            value={this.state.value}
            onSelect={this.onSelect.bind(this)}
            singleDateRange={true}
            // onSelectsingleDateRange={this.onToggle.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default Example;
