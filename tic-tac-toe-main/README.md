# 🎮 Tic-Tac-Toe Game

A classic Tic-Tac-Toe game built with pure HTML, CSS, and JavaScript. This interactive web-based game features a clean, modern design with sound effects and smooth gameplay.
Build when got bored in weekend.

## 🚀 Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling and animations
- **JavaScript (ES6)** - Game logic and interactivity
- **Audio API** - Sound effects implementation


## 💻 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sharibraza/tic-tac-toe.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd tic-tac-toe
   ```

3. **Open the game**
   - Simply open `index.html` in your web browser
   - Or use a local server (e.g., Live Server extension in VS Code)

## 🎮 How to Play

1. **Start the Game** - Open `index.html` in your browser
2. **Make Your Move** - Player X starts first; click on any empty cell in the 3x3 grid
3. **Take Turns** - Players automatically alternate between X and O
4. **Win the Game** - Get three of your symbols in a row (horizontal, vertical, or diagonal)
5. **Restart** - Click the "Restart" button to play again

## 📁 Project Structure

```
tic-tac-toe/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet for the game
├── script.js           # Game logic and functionality
├── README.md           # Project documentation
│
└── assets/
    ├── img/            # Image assets
    │   ├── main.jpeg
    │   ├── main.webp
    │   └── background.jpg
    ├── sounds/         # Audio files
    │   ├── click.mp3       # Click sound effect
    │   ├── crackers.mp3    # Victory celebration sound
    │   └── winning.mp3     # Additional sound asset
    └── celebration.mp4 # Victory celebration video
```

## 🎯 Game Rules

1. The game is played on a 3x3 grid
2. Player X always goes first
3. Players take turns placing their marks (X or O) in empty cells
4. The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all 9 cells are filled and no player has 3 in a row, the game is a draw

## 🎨 Features in Detail

### Sound Effects
- **Click Sound** - Plays when a cell is clicked (click.mp3)
- **Celebration Sound** - Plays fireworks/crackers sound when a player wins (crackers.mp3)

### Win Conditions
The game checks for wins in 8 possible patterns:
- 3 horizontal rows
- 3 vertical columns
- 2 diagonal lines

### UI/UX
- Purple-themed interface with black background
- Large, readable text and buttons
- Hover effects for better interactivity
- Status updates showing current player's turn
- Clear win/draw messages

## 🔮 Future Enhancements*

Potential features for future versions:
- [ ] AI opponent with difficulty levels
- [ ] Score tracking across multiple games
- [ ] Player name customization
- [ ] Online multiplayer support
- [ ] Game history/replay feature
- [ ] Theme customization options
- [ ] Mobile app version
- [ ] Leaderboard system

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 License

This project is open source and available for use.

## 👨‍💻 Author

**Sharibraza**
- GitHub: [@Sharibraza](https://github.com/Sharibraza)
- Repository: [tic-tac-toe](https://github.com/Sharibraza/tic-tac-toe)
  
---
**Made with ❤️ by Sharibraza**
