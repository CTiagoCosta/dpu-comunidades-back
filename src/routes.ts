import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import { CreateQueueController } from './controllers/queue/CreateQueueController';
import { ListQueueController } from './controllers/queue/ListQueueController';
import { CreateAttendancesController } from './controllers/attendances/CreateAttendancesController';
import { CreateProcessController } from './controllers/process/CreateProcessController';
import { CreateDocumentsSentController } from './controllers/documentssent/CreateDocumentsSentController';
import { CreateCompletedFormController } from './controllers/completedform/CreateCompletedFormController';
import { ListAttendancesController } from './controllers/attendances/ListAttendancesController';
import { ListCompletedFormController } from './controllers/completedform/ListCompletedFormController';
import { ListDocumentsSentController } from './controllers/documentssent/ListDocumentsSentController';
import { ListProcessController } from './controllers/process/ListProcessController';
import upload from './middlewares/upload';
import { UploadDocumentController } from './controllers/document/UploadDocumentController';

const router = Router();

//Rotas user
router.post('/users', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/me', isAuthenticated, new DetailUserController().handle);

// Rotas de Fila de Atendimento
router.post('/queue', isAuthenticated, async (req, res) => {
  await new CreateQueueController().handle(req, res); 
});

router.get('/list-queue', isAuthenticated, new ListQueueController().handle);

// Atendimento
router.post('/attendances', isAuthenticated, async (req, res) => {
  await new CreateAttendancesController().handle(req, res);
});
 
router.get('/list-attendances', isAuthenticated, new ListAttendancesController().handle);


// Processo
router.post('/process', isAuthenticated, async (req, res) => {
  await new CreateProcessController().handle(req, res);
});

router.get('/list-process', isAuthenticated, new ListProcessController().handle);

// Formulário Preenchido
router.post('/completed-forms', isAuthenticated, async (req, res) => {
  await new CreateCompletedFormController().handle(req, res);
});

router.get('/list-completed-forms', isAuthenticated, new ListCompletedFormController().handle);

// Documento
router.post('/documents-sent', isAuthenticated, upload.array("files"), async (req, res) => {
  await new CreateDocumentsSentController().handle(req, res);
});

router.get('/list-documents-sent', isAuthenticated, new ListDocumentsSentController().handle);

//Enviar arquivos
router.post(
  "/documents/upload",
  isAuthenticated,
  upload.array("files"),
  async (req, res) => {
    await new UploadDocumentController().handle(req, res);
  }
);


export { router };