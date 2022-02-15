class PersonInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  onBtnClicked = event => {
    event.preventDefault();

    const text = this.state.inputValue;
    const propName = this.props.name;
    console.log(propName);
    console.log(text);
  };

  render() {
    return (
      <form>
        <div> {this.props.name}</div>
        <br />
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        <div>
          <br />
          <button onClick={this.onBtnClicked}>Click</button>
        </div>
      </form>
    );
  }
}

const useInput = () => {
  const [value, setValue] = React.useState("");

  const changeInput = e => {
    setValue(e.target.value);
  };

  return [value, changeInput];
};

function PersonInformation2({ name }) {
  const [value, changeInput] = useInput();
  const [value2, changeInput2] = useInput();
  const [value3, changeInput3] = useInput();
  const [value4, changeInput4] = useInput();

  const onBtnClicked = event => {
    event.preventDefault();

    console.log(name);
    console.log(value);
  };

  return (
    <form>
      <div> {this.props.name}</div>
      <br />
      <input type="text" value={value} onChange={changeInput} />
      <input type="text" value={value2} onChange={changeInput2} />
      <input type="text" value={value3} onChange={changeInput3} />
      <input type="text" value={value4} onChange={changeInput4} />
      <div>
        <br />
        <button onClick={onBtnClicked}>Click</button>
      </div>
    </form>
  );
}

const domContainer = document.querySelector("#root");
ReactDOM.render(<PersonInformation name="worldPrince" />, domContainer);
