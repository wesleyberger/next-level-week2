import express from 'express';
import routes from './routes';
import cors from 'cors';

// config express
const app =  express();
// Config cors
app.use(cors());
// Config express for json 
app.use(express.json());
app.use(routes);

// Configurando Porta do servidor.
// Porta 3333 = Network Caller ID server.	
app.listen(3333);
