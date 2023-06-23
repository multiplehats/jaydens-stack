import perfMiddleware from "../middlewares/perfMiddleware";
import { isAuthed } from "../middlewares/sessionMiddleware";
import { procedure } from "../trpc";

/**
 * THis is just an example, this doesn't include any auth.
 */
const authedProcedure = procedure.use(perfMiddleware).use(isAuthed)

export default authedProcedure;
