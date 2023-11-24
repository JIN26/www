import app from './src/app.js'
import 'dotenv/config'
import { connectDB } from "./src/dbcofing.js";
import { PORT } from "./src/config.js";


async function main() {

    try {
      await connectDB();
      app.listen(PORT);
      console.log(`Listening on port http://localhost:${PORT}`);
      //console.log(`Environment: ${process.env.NODE_ENV}`)
    } catch (error) {
      console.error(error);
    }
}
  
main();