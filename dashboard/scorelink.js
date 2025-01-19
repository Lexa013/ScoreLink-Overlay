const myRep = nodecg.Replicant('updateTeamName', {
    defaultValue: {
        home: 'Home',
        away: 'Away'
    }
});

let home_name = document.getElementById('input1');
let away_name = document.getElementById('input2');

document.getElementById('updateTeamButton').addEventListener('click', () => {
    myRep.value = {
        home: home_name.value,
        away: away_name.value
    }
});