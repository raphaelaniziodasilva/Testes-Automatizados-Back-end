/* Instalação
    Instalando todas dependências

    instalar o typescript:
    npm init -y
    npm install -D typescript ts-node @types/node 

    instalar o Jest:
    npm install -D jest ts-jest @types/jest

    instalar o Babel:
    npm install -D babel @babel/preset-env @babel/preset-typescript babel-jest

    Iniciando o typescript:
    criando pastas
    mkdir src, dist
    na pasta src vai ficar os arquivos ts e na pasta dist os arquivos js
    npx tsc --init --rootDir src --outDir dist

    Iniciando a configuração do jest:
    npx jest --init
    respondendo as perguntas:
    ? Would you like to use Jest when running "test" script in "package.json"? » (Y/n) yes
    ? Would you like to use Typescript for the configuration file? » (y/N) no
    ? Choose the test environment that will be used for testing » - Use arrow-keys. Return to submit.
    >   node
    jsdom (browser-like) --> node
    ? Do you want Jest to add coverage reports? » (y/N) no
    ? Which provider should be used to instrument code for coverage? » - Use arrow-keys. Return to submit.
    >   v8
    babel --> babel
    ? Automatically clear mock calls, instances, contexts and results before every test? » (y/N) no
    A gente vai obrigatoriamente fazer essa chamada explícita
    
    Vamos criar um arquivo de configuração do babel para poder usar o babel com os seus presets:
    babel.config.js e coloque esse codigo:
    
    module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
    ]
    }   
*/