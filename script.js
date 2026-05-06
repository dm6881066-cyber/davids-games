function loadGame(gameURL) {
    const gameFrame = document.getElementById('gameFrame');
    gameFrame.src = gameURL;
    
    // Scroll to the game container smoothly
    document.querySelector('.game-container').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Optional: Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('gameFrame').src = '';
    }
});