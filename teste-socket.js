// teste-socket.js
const { io } = require("socket.io-client");

// COLE SEU JWT GERADO ABAIXO
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNTE0Yjg5MS1iYjYyLTRhODYtODE5MC0wZTU0YmE3NjhkODIiLCJpYXQiOjE3NTE3NTI3ODksImV4cCI6MTc1MTgzOTE4OSwic3ViIjoiZDUxNGI4OTEtYmI2Mi00YTg2LTgxOTAtMGU1NGJhNzY4ZDgyIn0.RgoThWEVL6KWzwBbwJkotpvmoS1LaFIEFD02QczcKbU";

// Atualize o ID do operador conforme necessário para seu sistema
const operadorTriagemId = "d514b891-bb62-4a86-8190-0e54ba768d82";

const socket = io("http://localhost:3003", {
  auth: { token },
  transports: ["websocket"],
  forceNew: true,
});

socket.on("connect", () => {
  console.log("Conectado! ID do socket:", socket.id);

  // Teste: emitir evento joinQueue
  socket.emit(
    "joinQueue",
    {
      nomeCompleto: "Teste Socket",
      cpf: "12345678900",
      telefone: "67999999999",
      operadorTriagemId: operadorTriagemId,
      tipoAtendimentoId: 1
    },
    (res) => {
      console.log("Resposta do joinQueue:", res);
    }
  );

  // Ouça as atualizações da fila
  socket.on("queueUpdated", (fila) => {
    console.log("Fila atualizada:", fila);
  });
});

socket.on("connect_error", (err) => {
  console.log("Erro ao conectar:", err.message);
});

socket.on("disconnect", () => {
  console.log("Desconectado do servidor.");
});
