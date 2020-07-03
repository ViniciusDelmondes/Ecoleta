import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

// O path serve para padronizar o endereçamento de arquivos.

// O file serve para coletar todas as informações do arquivo de imagem.

// O callback retornará um nome único para cada upload de imagem, mesmo que o usuário realize todos os 
// uploads com o mesmo nome para não duplicar e gerar erros.

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex');

            const fileName = `${hash}-${file.originalname}`;

            callback(null, fileName);
        }
    })
}