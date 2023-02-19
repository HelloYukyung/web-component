// class는 설계도
// 객체는 instance
// 클래스를 객체로 만든 것을 instance

class Car {
  // 맹버 변수
  door = 2;
  speed;
  fuel = 1000;
  number = 123;

  // Car() {} method인데 class랑 이름이 같음
  // instance가 생성될때 어떤 작업을 하고 싶은지

  // 메소드
  Car(number, door) {
    this.number = number;
    this.door = door;
  }
  //  오버로딩 constructor 를 다시 씀
  // 같은 메서드 시그니쳐(함수명, 반환타입)를 가진 다른 인자 값을 가진 함수를 여러개 만들 수 잇다 -> 오버로딩
  Car(door) {
    this.door = door;
  }

  doAccel() {
    this.speed++;
    this.fuel--;
    console.log("기본 악셀입니다");
  }
}

const K3 = new Car(); // -> error

//  constructor가 없으면 기본 생성자가 만들어진다.

// K3.doAccel();

class Benz extends Car {
  // 오버라이딩 부모의 method를 재정의
  // 자식 class에서 재정의
  // 부모에서 쓰는 method가 맘에 안들때

  doAccel() {
    this.speed += 5;
    this.fuel--;
    console.log("벤츠의 악셀입니다");
  }
  do엉따() {
    console.log("this", this.doAccel());
    console.log("super", super.doAccel());
  }
}

const SClass = new Benz(123, 4);

SClass.do엉따();

// const kyungBenz = new Benz(4);
// kyungBenz.number = 456;

// kyungBenz.number = 123;

// const chanBanz = new Benz(456);

// chanBanz.number = 456;

// 상속 : extends

// 오버로딩 :내가 밴츠를 만들었어. 근데 내가 엑셀을 좀 기깔나게 바꿔주고 싶어 그 때 벤츠 클래스 안에서 카 클래스에서 만들었던 ,
// doAccel 을 오버로딩해서 메소드를 변경시켜주는거지   == 덮어쓴다

// 클래스 : 틀 {맴버 변수, 메서드 }

// 상속 : extends
// 오버로딩 :
// 오버라이딩 :
// 생성자 :
// 맴버변수 :
// 메서드 :
// 인스턴스 (객체를 만듦)

class Calculator {
  add(a, b) {
    return a + b;
  }
  // 오버로딩
  add(a, b, c) {
    return a + b + c;
  }
}

const answer = new Calculator();

class DevelopedCalculator extends Calculator {
  // 오버라이딩
  DevelopedCalculator() {}

  add(a, b) {
    return "값은" + a + b + "입니다";
  }
}

const developedAnswer = new DevelopedCalculator();

// 상태와 동작으로 바라봐라... 만물 객체설... 그것이 객체지향이다...
