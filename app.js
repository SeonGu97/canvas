// import
import { Ball } from "./ball.js";

// App이란 객체를 정의. (표현식)
class App {
  // class의 인스턴스 객체를 생성하고 초기화.
  constructor() {

    // 동적으로 canvas 생성.
    this.canvas = document.createElement('canvas');
    // canvas를 2차원으로 정의.
    this.ctx = this.canvas.getContext('2d');

    // body 안에 canvas 엘리먼트 추가.
    document.body.appendChild(this.canvas);

    // window의 resize 이벤트정의, resize 함수 선언.
    window.addEventListener('resize', this.resize.bind(this), false);
    // resize 함수 호출.
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);

    // 애니메이션 함수. (setinterval 보다 높은 프레임을 커버 가능하다.)
    window.requestAnimationFrame(this.animate.bind(this));
  }

  // window의 화면 크기가 변경 될때마다 호출되는 resize함수.
  resize() {
    // 
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  // 애니메이션 함수.
  animate(t) {
    // 애니메이션 함수. (setinterval 보다 높은 프레임을 커버 가능하다.)
    window.requestAnimationFrame(this.animate.bind(this));

    // 지나온 화면을 지워준다.
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    // draw 함수 호출.
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
  }
}

// window가 load가 완료되면, App이란 객체를 생성. (선언)
window.onload = () => {
  new App();
}