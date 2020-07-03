import knex from 'knex';
import path from 'path'

// O path.resolve serve para padronizar uma rota dentro de nosso projeto. Exemplo: pra salvar um arquivo sem
// digitar: exemplo/exemplo2

// __dirname váriavel global que serve para retornar o diretório do arquivo que estamos executando que contem
// essa váriaveç

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
})

export default connection;

// Migrations: Histórico do banco de dados

