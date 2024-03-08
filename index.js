import "dotenv/config";
import app from "./src/app.js";
import Connect from "./src/db/index.js";

Connect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
// Initialize Express App
// const app = express();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${processe.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       // In case express  server fails to start, close the MongoDB connection
//       console.log("Application not able to database", error);
//       throw error;
//     });
//     app.listen(processe.env.PORT, () => {
//       console.log(`App is listen in ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
