const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");
const cors = require("cors");

const port = process.env.PORT || 3000;

const domainsFromEnv = process.env.CORS_DOMAINS || "";
const whitelist = domainsFromEnv.split(",").map((item) => item.trim());

const corsOptions = {
	origin: function (origin, callback) {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};

app.use(cors(corsOptions));

// const static_path = path.join(__dirname, "..");
// app.use(express.static(static_path));
app.use(express.json());
app.options(cors());
// app.set("view engine", "hbs");

app.get("/register/:fn/:ln", (req, res) => {
	const { fn, ln, em, pwd } = req.params;
	console.log(fn);
	console.log(ln);
	res.json("hello");
});

app.listen(port, () => {
	console.log(`Server is running on port no ${port}`);
});
