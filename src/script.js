function victoriesBalance(wins = 0, defeats = 0) {

    let balance = wins - defeats;

    let levelsFighter = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal'];

    if (balance < 10) {
        let level = levelsFighter[0];
        console.log(`O Heroí tem de saldo ${balance} e está no nível ${level}`);
    } else if (balance >= 11 && balance <= 20) {
        let level = levelsFighter[1];
        console.log(`O Heroí tem de saldo ${balance} e está no nível ${level}`);
    } else if (balance >= 21 && balance <= 50) {
        let level = levelsFighter[2];
        console.log(`O Heroí tem de saldo ${balance} e está no nível ${level}`);
    } else if (balance >= 51 && balance <= 80) {
        let level = levelsFighter[3];
        console.log(`O Heroí tem de saldo ${balance} e está no nível ${level}`);
    } else if (balance >= 81 && balance <= 90) {
        let level = levelsFighter[4];
        console.log(`O Heroí tem de saldo ${balance} e está no nível ${level}`);
    } else if (balance >= 91 && balance <= 100) {
        let level = levelsFighter[5];
        console.log(`O Heroí tem de saldo ${balance} e está no nível ${level}`);
    } else {
        let level = levelsFighter[6];
        console.log(`O Heroí tem de saldo ${balance} e está no nível ${level}`);
    }
} 

victoriesBalance(50, 10);
