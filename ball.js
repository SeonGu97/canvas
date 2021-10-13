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
    draw(ctx, stageWidth, stageHeight, block) {
        // 공에 vx, vy값을 더해줘서 이동.
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);

        this.bounceBlock(block);

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

    bounceBlock(block) {
        const minX = block.x - this.radius;
        const maxX = block.maxX + this.radius;
        const minY = block.y - this.radius;
        const maxY = block.maxY + this.radius;

        if(this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(this.x - maxX);
            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(this.y - maxY);
            const min1 = Math.min(x1, x2);
            const min2 = Math.min(y1, y2);
            const min = Math.min(min1, min2);
            
            if(min == min1) {
                this.vx *= -1;
                this.x += this.vx;
            } else if(min == min2) {
                this.vy *= -1;
                this.y += this.vy;
            }
        } 
    }
}