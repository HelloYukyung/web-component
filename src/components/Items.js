import Component from "../core/Component.js";

export default class Items extends Component {
  setup() {
    this.state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.state;
    return `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button>추가</button>
    `;
  }

  setEvent() {
    this.$target.querySelector("button").addEventListener("click", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}

// 반복이 일어난다. ---> 오버라이딩
// 클레스로 선언했을 때의 장점 ---> 재사용성 증가 & 코드의 유지보수가 쉬워진다.
// OOP :  구현과 역할을 분리!
// 사용법까지 같이 알아봐주면 좋겠다ㅋ
// 생성자는 뭐하는 애인가
