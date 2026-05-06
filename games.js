const games = [
    {
        name: 'Tetris',
        icon: '🧩',
        category: 'puzzle',
        url: 'https://tetris.com/play-tetris',
        description: 'Classic block-stacking puzzle game'
    },
    {
        name: 'Snake',
        icon: '🐍',
        category: 'puzzle',
        url: 'https://playsnake.org/',
        description: 'Grow your snake, avoid walls'
    },
    {
        name: 'Pong',
        icon: '🎾',
        category: 'sports',
        url: 'https://pong.playtopia.io/',
        description: 'Classic paddle ball game'
    },
    {
        name: 'Flappy Bird',
        icon: '🐦',
        category: 'action',
        url: 'https://flappybird.io/',
        description: 'Navigate through obstacles'
    },
    {
        name: '2048',
        icon: '🔢',
        category: 'puzzle',
        url: 'https://play2048.co/',
        description: 'Merge tiles to reach 2048'
    },
    {
        name: 'Pac-Man',
        icon: '👾',
        category: 'action',
        url: 'https://pacman.playtopia.io/',
        description: 'Eat pellets, avoid ghosts'
    },
    {
        name: 'Space Invaders',
        icon: '🛸',
        category: 'action',
        url: 'https://spaceinvaders.playtopia.io/',
        description: 'Shoot down space enemies'
    },
    {
        name: 'Chess',
        icon: '♟️',
        category: 'puzzle',
        url: 'https://chess.com/play/online',
        description: 'Strategic board game'
    },
    {
        name: 'Tic Tac Toe',
        icon: '⭕',
        category: 'puzzle',
        url: 'https://tictactoe.playtopia.io/',
        description: 'Get three in a row'
    },
    {
        name: 'Breakout',
        icon: '🧱',
        category: 'puzzle',
        url: 'https://breakout.playtopia.io/',
        description: 'Break bricks with a ball'
    },
    {
        name: 'Minesweeper',
        icon: '💣',
        category: 'puzzle',
        url: 'https://minesweeper.online/',
        description: 'Uncover hidden mines'
    },
    {
        name: 'Memory Game',
        icon: '🎴',
        category: 'puzzle',
        url: 'https://memory.playtopia.io/',
        description: 'Match pairs of cards'
    },
    {
        name: 'Dino Runner',
        icon: '🦖',
        category: 'action',
        url: 'https://chromedino.com/',
        description: 'Jump over obstacles'
    },
    {
        name: 'Bubble Shooter',
        icon: '🎯',
        category: 'puzzle',
        url: 'https://bubbleshooteronline.com/',
        description: 'Pop bubbles by matching colors'
    },
    {
        name: 'Sudoku',
        icon: '📊',
        category: 'puzzle',
        url: 'https://sudoku.com/en/play/',
        description: 'Number puzzle challenge'
    }
];

let currentFilter = 'all';

// Initialize games on page load
document.addEventListener('DOMContentLoaded', function() {
    renderGames(games);
    document.getElementById('searchBar').addEventListener('keyup', searchGames);
});

// Render games to the grid
function renderGames(gamesToRender) {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';

    gamesToRender.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game';
        gameCard.innerHTML = `
            <span class="game-icon">${game.icon}</span>
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <button class="play-btn" onclick="loadGame('${game.url}')">Play Now</button>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

// Load game in modal
function loadGame(url) {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameIframe');
    iframe.src = url;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close game modal
function closeGame() {
    const modal = document.getElementById('gameModal');
    const iframe = document.getElementById('gameIframe');
    modal.style.display = 'none';
    iframe.src = '';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target === modal) {
        closeGame();
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGame();
    }
});

// Search games
function searchGames() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filtered = games.filter(game => 
        game.name.toLowerCase().includes(searchTerm) &&
        (currentFilter === 'all' || game.category === currentFilter)
    );
    renderGames(filtered);
}

// Filter games by category
function filterGames(category) {
    currentFilter = category;
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    
    const filtered = games.filter(game => 
        (category === 'all' || game.category === category) &&
        game.name.toLowerCase().includes(searchTerm)
    );
    renderGames(filtered);
}