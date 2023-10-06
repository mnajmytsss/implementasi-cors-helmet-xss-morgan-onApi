const cors = require('cors')

const origin = [
  "http://localhost:5173", 
  "https://week-15-mnajmytsss.cyclic.app/",
  
];
const partnerOrigin = ["http://localhost:5174"];

const corsOptionsDelegate = (req, callback) => {
    const clientOrigin = origin.includes(req.header("Origin"));
    const clientPartnerOrigin = partnerOrigin.includes(req.header("Origin"))

    if (clientOrigin) {
        callback(null, {
          origin: true,
          methods: "GET, POST, DELETE, PUT, OPTIONS, HEAD",
        });
      } else if (clientPartnerOrigin) {
        callback(null, {
          origin: true,
          methods: "GET, POST",
        });
      } else {
        callback(new Error("Blocked by CORS"));
      }
};

const corsMiddleware = (app) => {
    app.use(cors(corsOptionsDelegate));
};

module.exports = corsMiddleware;