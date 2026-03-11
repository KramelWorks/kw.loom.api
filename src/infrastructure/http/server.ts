import { EnvConfig } from "../../core/config/env-config.js";
import { app } from "./app.js";

export function startHttpServer(){
    const PORT=EnvConfig.server.port
    app.listen(PORT,()=>{
        console.log(`\nLOOM - from Kramelworks[T]\n\nrunning on http://localhost:${PORT}`)
    });
}
