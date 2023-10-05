const cors = require('cors')

const corsMiddleware = (app) => {
    app.use(cors());
};

module.exports = corsMiddleware;