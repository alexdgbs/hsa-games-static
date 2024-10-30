<template>
  <div class="console-container">
    <div class="game-container">
      <div class="game-title">ATARI PONG</div>
      <canvas ref="gameCanvas" class="game-screen"></canvas>
      <div class="score-container">
        <span class="score">PLAYER: {{ playerScore }}</span>
        <span class="score">COM: {{ opponentScore }}</span>
      </div>
      <div v-if="gameOverMessage" class="game-over">{{ gameOverMessage }}</div>
      <div v-if="gameOverMessage" class="restart-message">Enter - Restart</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerPaddleY: 60,
      opponentPaddleY: 60,
      playerScore: 0,
      opponentScore: 0,
      ballX: 150,
      ballY: 100,
      ballSpeedX: 3,
      ballSpeedY: 2,
      paddleWidth: 6,
      paddleHeight: 45,
      canvasWidth: 300,
      canvasHeight: 200,
      playerSpeed: 2, 
      opponentSpeed: 1.5, 
      moveUp: false,
      moveDown: false,
      gameOverMessage: '', 
    };
  },
  mounted() {
    this.setupGame();
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
  },
  methods: {
    setupGame() {
      const canvas = this.$refs.gameCanvas;
      const context = canvas.getContext("2d");

      canvas.width = this.canvasWidth;
      canvas.height = this.canvasHeight;

      const drawEverything = () => {
        context.fillStyle = "#000";
        context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

        context.fillStyle = "#fff";
        context.fillRect(0, this.playerPaddleY, this.paddleWidth, this.paddleHeight);
        context.fillRect(this.canvasWidth - this.paddleWidth, this.opponentPaddleY, this.paddleWidth, this.paddleHeight);

        context.beginPath();
        context.arc(this.ballX, this.ballY, 4, 0, Math.PI * 2);
        context.fillStyle = "#fff";
        context.fill();

        this.ballX += this.ballSpeedX;
        this.ballY += this.ballSpeedY;

        if (this.ballY <= 0 || this.ballY >= this.canvasHeight) {
          this.ballSpeedY = -this.ballSpeedY;
        }

        if (this.ballX <= this.paddleWidth &&
            this.ballY > this.playerPaddleY &&
            this.ballY < this.playerPaddleY + this.paddleHeight) {
          this.ballSpeedX = -this.ballSpeedX;
          this.ballSpeedY += (Math.random() - 0.5) * 2;
        }

        if (this.ballX >= this.canvasWidth - this.paddleWidth &&
            this.ballY > this.opponentPaddleY &&
            this.ballY < this.opponentPaddleY + this.paddleHeight) {
          this.ballSpeedX = -this.ballSpeedX;
          this.ballSpeedY += (Math.random() - 0.5) * 2;
        }

        if (this.ballX <= 0) {
          this.opponentScore++;
          this.checkGameOver();
          this.resetBall();
        } else if (this.ballX >= this.canvasWidth) {
          this.playerScore++;
          this.checkGameOver();
          this.resetBall();
        }

       
        const targetY = this.ballY - this.paddleHeight / 2;
        if (this.opponentPaddleY < targetY && this.opponentPaddleY + this.paddleHeight < this.canvasHeight) {
          this.opponentPaddleY += this.opponentSpeed; 
        } else if (this.opponentPaddleY > targetY && this.opponentPaddleY > 0) {
          this.opponentPaddleY -= this.opponentSpeed; 
        }

       
        if (this.moveUp && this.playerPaddleY > 0) {
          this.playerPaddleY -= this.playerSpeed;
        }
        if (this.moveDown && this.playerPaddleY < this.canvasHeight - this.paddleHeight) {
          this.playerPaddleY += this.playerSpeed;
        }
      };

      const gameLoop = () => {
        if (!this.gameOverMessage) {
          drawEverything();
        }
        requestAnimationFrame(gameLoop);
      };

      gameLoop();
    },
    resetBall() {
      this.ballX = this.canvasWidth / 2;
      this.ballY = this.canvasHeight / 2;
      this.ballSpeedX = -this.ballSpeedX;
      this.ballSpeedY = (Math.random() - 0.5) * 4;
    },
    checkGameOver() {
      if (this.playerScore >= 10) {
        this.gameOverMessage = 'YOU WIN';
      } else if (this.opponentScore >= 10) {
        this.gameOverMessage = 'YOU LOSE';
      }
    },
    handleKeyDown(e) {
      e.preventDefault();
      if (e.key === "ArrowUp") {
        this.moveUp = true;
      }
      if (e.key === "ArrowDown") {
        this.moveDown = true;
      }
      
      if (e.key === "Enter" && this.gameOverMessage) {
        this.resetGame();
      }
    },
    handleKeyUp(e) {
      if (e.key === "ArrowUp") {
        this.moveUp = false;
      }
      if (e.key === "ArrowDown") {
        this.moveDown = false;
      }
    },
    resetGame() {
      this.playerScore = 0;
      this.opponentScore = 0;
      this.gameOverMessage = '';
      this.setupGame(); 
    }
  }
};
</script>

<style scoped>
.console-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding-top: 60px;
  overflow: hidden;
}

.game-container {
  background-color: #333;
  padding: 20px;
  border: 10px solid #555;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.game-title {
  font-family: 'Press Start 2P', sans-serif;
  color: #ffcc00;
  font-size: 20px;
  margin-bottom: 10px;
}

.game-screen {
  background-color: #000;
  border: 5px solid #ffcc00;
  width: 300px;
  height: 200px;
}

.score-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.score {
  font-family: 'Press Start 2P', sans-serif;
  color: #fff;
  font-size: 12px;
}

.game-over {
  font-family: 'Press Start 2P', sans-serif;
  color: #ffcc00;
  font-size: 18px;
  margin-top: 10px;
}

.restart-message {
  font-family: 'Press Start 2P', sans-serif;
  color: #fff;
  font-size: 14px;
  margin-top: 5px;
}
</style>
