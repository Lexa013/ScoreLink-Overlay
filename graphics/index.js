const myRep = nodecg.Replicant('updateTeamName');

// Listen for replicant changes and update the display
myRep.on('change', (newValue, oldValue) => {
    document.getElementById('home-name').textContent = newValue.home;
    document.getElementById('away-name').textContent = newValue.away;
});