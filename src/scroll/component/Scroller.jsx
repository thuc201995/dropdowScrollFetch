import { Dropdown } from "semantic-ui-react";
import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
const options = [
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week"
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month"
  },
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week"
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month"
  },
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week"
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month"
  },
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week"
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month"
  },
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week"
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month"
  },
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week"
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month"
  },
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week"
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month"
  },
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "this week",
    text: "this week",
    value: "this week",
    content: "This Week"
  },
  {
    key: "this month",
    text: "this month",
    value: "this month",
    content: "This Month"
  }
];

class Scroller extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      direction: "",
      lastScrollPos: 0
    };
  }

  componentWillMount() {
    $.getJSON("https://randomuser.me/api/").then(({ results }) =>
      this.setState({ person: results })
    );
  }

  handleScroll = event => {
    console.log(1);
    if (this.state.lastScrollPos > event.currentTarget.scrollTop) {
      this.setState({
        direction: "top",
        lastScrollPos: event.currentTarget.scrollTop
      });
    } else if (this.state.lastScrollPos < event.currentTarget.scrollTop) {
      this.setState({
        direction: "bottom",
        lastScrollPos: event.currentTarget.scrollTop
      });
    }
  };
  render() {
    const { user } = this.state;
    return (
      <div>
        <div id="topDiv">
          Scroll direction : <strong>{this.state.direction}</strong>{" "}
        </div>
        <Dropdown placeholder="State" fluid multiple search selection>
          <Dropdown.Menu onScroll={this.handleScroll}>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>1</Dropdown.Item>

            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>1</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
export default Scroller;
