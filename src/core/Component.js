export default class Component {
  // member 변수
  $target;
  state;

  // 생성자
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
    this.setEvent();
  }
  // method
  setup() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    // this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      //closest 일치하는 요소를 찾을 때까지 자기 자신을 포함해 위쪽으로 문서 트리를 순회
      callback(event);
    });
  }
}
