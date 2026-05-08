const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json());

let historico_sensores = [
    {id:1, temperatura:30, umidade:40, hora:"09:03"}, 
    {id:2, temperatura:27, umidade:50, hora:"10:03"}, 
    {id:3, temperatura:26, umidade:35, hora:"11:03"} 
];

app.get('/api/dados', (req, res) => {
    res.json(historico_sensores);
});


app.get('/api/dados/:id', (req, res) => { 
    
    const id = parseInt(req.params.id); 
    const dados_id = historico_sensores.find(s => s.id === id);
    
    if (!dados_id){
        return res.status(404).json({mensagem: "ID não encontrado!"});
    }
    res.json(dados_id);
}); 

app.post('/api/dados', (req, res) => {
    const {temperatura, umidade, hora} = req.body;

    if (!temperatura || !umidade || !hora){
        return res.status(400).json({mensagem: "Dados incompletos!"});
    }

    const novos_dados = {
        id: historico_sensores.length + 1,
        temperatura,
        umidade,
        hora
    };
    
    historico_sensores.push(novos_dados);
    res.status(201).json({mensagem: "Dados enviados com sucesso!", dados: novos_dados});
});

app.put('/api/dados/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = historico_sensores.findIndex (s => s.id === id);
    if (index === -1){
        return res.status(404).json({mensagem: "Não é possivel atualizar algo inexistente!"});
    }
    const{temperatura, umidade, hora}=req.body;
    historico_sensores[index] = {id,temperatura,umidade,hora}
    res.json({mensagem:"Dados atualizados com sucesso!"})

});
app.delete('/api/dados/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = historico_sensores.findIndex (s => s.id === id);

    if (index === -1){
        return res.status(404).json({mensagem: "Não é possivel deletar algo inexistente!"});
    }

    historico_sensores.splice(index, 1)
    res.json({mensagem:"Dados excluidos com sucesso!"});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});