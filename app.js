import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

export default app;
