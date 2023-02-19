export default class Component {
  // member 변수
  $target;
  state;

  // 생성자
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }
  // method
  setup() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
