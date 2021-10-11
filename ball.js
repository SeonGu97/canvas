// Ball 이라는 객체를 내보낸다.
export class Ball {
    // class의 인스턴스 객체를 생성하고 초기화.
    constructor(stageWidth, stageHeight, radius, speed) {
        // 공의 크기.
        this.radius = radius;

        // 공의 속도.
        this.vx = speed;
        this.vy = speed;

        // 공의 좌표.
        const diameter = this.radius * 2;
        this.x = this.radius + (Math.random() * (stageWidth - diameter));
        this.y = this.radius + (Math.random() * stageHeight - diameter);
    }

    // 공을 그리는 캔버스.
    draw(ctx, stageWidth, stageHeight) {
        // 공에 vx, vy값을 더해줘서 이동.
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);

        // 공을 그림.
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#fdd700';
        ctx.fill();
        ctx.closePath();
    }

    // 공이 벽에 부딪히면 튕겨나감.
    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        if (this.x <= minX || this.x >= maxX) {
            this.vx *= -1;
            this.x += this.vx;
        } else if (this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }
}