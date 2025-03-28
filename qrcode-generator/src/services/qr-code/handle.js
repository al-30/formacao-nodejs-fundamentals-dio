import chalk from 'chalk';
import qr from 'qrcode-terminal';

async function handle(err, result) {
  if (err) {
    console.error(chalk.red('Error on application'), err);
    return;
  }
  const isSmall = result.type == 2;
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    if (isSmall) {
      console.log(chalk.yellow('QR Code gerado com sucesso!'));
      console.log(chalk.white(qrcode));
    } else {
      console.log(chalk.yellow('QR Code gerado com sucesso!'));
      console.log(chalk.white(qrcode));
    }
  });
}
export default handle;
