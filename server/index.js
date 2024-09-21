const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Apply CORS globally
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./Routes/downloadRoutes'));

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
