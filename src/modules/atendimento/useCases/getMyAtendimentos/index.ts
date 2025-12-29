import { GetMyAtendimentosUseCase } from "./GetMyAtendimentosUseCase";
import { GetMyAtendimentosController } from "./GetMyAtendimentosController";

const getMyAtendimentosUseCase = new GetMyAtendimentosUseCase();
const getMyAtendimentosController = new GetMyAtendimentosController(getMyAtendimentosUseCase);

export { getMyAtendimentosController };
