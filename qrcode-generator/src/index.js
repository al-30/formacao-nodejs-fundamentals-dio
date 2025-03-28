import chalk from 'chalk';
import prompt from 'prompt';
import promptSchemaMain from './prompts-schema/prompt-schema-main.js';
import createPassword from './services/password/create.js';
import createQRCode from './services/qr-code/create.js';

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) {
      console.log(chalk.red(err));
      return;
    }
    if (choose.select == 1) {
      await createQRCode();
      // console.log('Você escolheu a opção 1 - QRCODE');
    }
    if (choose.select == 2) {
      await createPassword();
    }
  });
  prompt.start();
}

main();
