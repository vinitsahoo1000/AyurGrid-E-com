import express from "express";
import cors from "cors";
import { mainRouter } from "./routes/index.js";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
const app = express();
connectDB();
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(cors());
app.use('/api/v1', mainRouter); // main route
app.get('/health', async (req, res) => {
    res.json({
        message: "OK"
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map