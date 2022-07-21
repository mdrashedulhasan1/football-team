import React from 'react';
const MyTeam = (props) => {
    const {myPlayer} = props;
    let totalSalary = 0;
    for(const playerSalary of myPlayer){
        totalSalary = parseFloat(totalSalary)+parseFloat(playerSalary.salary);
    }
    let playerName = '';
    for(const playersName of myPlayer){
        playerName = playerName+","+playersName.name;
    }
    return (
        <div>
            <h1>Make My Football Team</h1>
            <h2>Selected Players: {myPlayer.length}</h2>
            <p>Player Name:{playerName}</p>
            <p>Total Salary: {totalSalary.toFixed(2)} million per year</p>
        </div>
    );
};

export default MyTeam;