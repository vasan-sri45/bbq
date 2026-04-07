import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import database from "./utils/database.js";
import employeeRoute from "./routes/auth/employee.route.js";
import productRoute from "./routes/product/product.route.js";
import cartRoute from "./routes/product/cart.route.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

const allowlist = ["https://bbq-client.onrender.com","https://bbq-admin.onrender.com","http://localhost:3000"];


const corsOptions = {
  origin(origin, cb) {
    if (!origin || allowlist.includes(origin)) return cb(null, true);
    return cb(new Error("Not allowed by CORS"));
  },
  methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization","x-client-code"],
  credentials: true,
  maxAge: 600,
};

app.use(cors(corsOptions));          

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/api", employeeRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);

app.all("/api/{*splat}", notFound);        // only for API paths
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`server is updated : ${process.env.PORT}`);
    database();
});

// mongodb+srv://srinivasanaadhi123_db_user:Perumal45@cluster0.x8tlbey.mongodb.net/ -visual
// mongodb+srv://srinivasanaadhi123_db_user:Perumal45@cluster0.x8tlbey.mongodb.net/?appName=Cluster0 -
