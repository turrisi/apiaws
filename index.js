
import server from "./src/app.js"
import { init } from "./src/init.js"


server.set("port", 3000)


server.listen(server.get("port"), async ()=> {
    await init();
    console.log(`server running on port ${server.get("port")}`)
})