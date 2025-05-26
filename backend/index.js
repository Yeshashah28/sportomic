const express = require("express");
const cors = require("cors");
const dbconnect = require("./dbconnect.js");
const {getvenue,getdate,gettime,booking}=require("./userRoute.js");
const router=express.Router();

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
dbconnect();

router.route("/api/venue").post(getvenue);
router.route("/api/date").post(getdate);
router.route("/api/time").post(gettime);
router.route("/api/booking").post(booking);
app.use("/", router);


app.listen(5000, () => {
  console.log("Server working on port 5000");
});
