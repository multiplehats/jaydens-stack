import perfMiddleware from "../middlewares/perfMiddleware";
import { procedure } from "../trpc";

/**
 * THis is just an example, this doesn't include any auth.
 */
const authedProcedure = procedure.use(perfMiddleware);

export default authedProcedure;
