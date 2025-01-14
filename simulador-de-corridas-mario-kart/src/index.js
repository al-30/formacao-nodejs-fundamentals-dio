const player1 = {
  NOME: 'Mario',
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: 'Luigi',
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = 'RETA';
      break;
    case random < 0.66:
      result = 'CURVA';
      break;
    default:
      result = 'CONFRONTO';
      break;
  }
  return result;
}

async function logRollResult(person, block, diceResult, attribute) {
  console.log(`${person.NOME} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}
async function declareWinner(person1, person2) {
  console.log(`Resultado final:`);
  console.log(`${person1.NOME}: ${person1.PONTOS} ponto(s)`);
  console.log(`${person2.NOME}: ${person2.PONTOS} ponto(s)`);

  if (person1.PONTOS > person2.PONTOS) {
    console.log(`${person1.NOME} venceu a corrida! Parabéns!\n`);
  } else if (person2.PONTOS > person1.PONTOS) {
    console.log(`${person2.NOME} venceu a corrida! Parabéns!\n`);
  } else {
    console.log(`A corrida terminou em empate\n`);
  }
}
async function playRaceEngine(person1, person2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`Rodada ${round}`);

    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    const diceResult1 = await rollDice();
    const diceResult2 = await rollDice();

    // teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === 'RETA') {
      totalTestSkill1 = diceResult1 + person1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + person2.VELOCIDADE;

      await logRollResult(person1, 'velocidade', diceResult1, person1.VELOCIDADE);
      await logRollResult(person2, 'velocidade', diceResult2, person2.VELOCIDADE);
    }

    if (block === 'CURVA') {
      totalTestSkill1 = diceResult1 + person1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + person2.MANOBRABILIDADE;
      await logRollResult(person1, 'manobrabilidade', diceResult1, person1.MANOBRABILIDADE);
      await logRollResult(person2, 'manobrabilidade', diceResult2, person2.MANOBRABILIDADE);
    }

    if (block === 'CONFRONTO') {
      let porwerResult1 = diceResult1 + person1.PODER;
      let porwerResult2 = diceResult2 + person2.PODER;
      console.log(`${person1.NOME} confrontou com ${person2.NOME}!!!`);

      await logRollResult(person1, 'poder', diceResult1, person1.PODER);
      await logRollResult(person2, 'poder', diceResult2, person2.PODER);

      if (porwerResult1 > porwerResult2 && person2.PONTOS > 0) {
        console.log(`${person1.NOME} venceu o confronto! \n ${person2.NOME} perdeu 1 ponto`);
        person2.PONTOS--;
      } else if (porwerResult1 < porwerResult2 && person1.PONTOS > 0) {
        console.log(`${person2.NOME} venceu o confronto! \n${person1.NOME} perdeu 1 ponto`);
        person1.PONTOS--;
      } else {
        console.log('Confronto empatado! Nenhum ponto foi perdido');
      }
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${person1.NOME} marcou um ponto`);
      person1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${person2.NOME} marcou um ponto`);
      person2.PONTOS++;
    }
    console.log('------------------------------------------');
  }
}

(async function main() {
  console.log('Corrida entre Mario e Luigi comecando...\n');
  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
