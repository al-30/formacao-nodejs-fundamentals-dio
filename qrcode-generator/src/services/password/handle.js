import permittedCharacters from './utils/permitted-characters.js';

async function handle(params) {
  let caracters = await permittedCharacters();
  let password = '';

  const passwordLength = process.env.PASSWORD_LENGTH;

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * caracters.length);
    password += caracters[randomIndex];
  }
  return password;
}

export default handle;
