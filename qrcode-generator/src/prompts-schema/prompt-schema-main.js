import chalk from 'chalk';

const promptSchemaMain = [
  {
    name: 'select',
    description: chalk.yellow.italic('Escolha a ferramenta que deseja usar (1- QRCODE, 2- PASSWORD).'),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold('Selecione uma opção válida (1 ou 2).'),
    required: true,
  },
];


export default promptSchemaMain;
