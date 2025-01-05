import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Swagger UI is running on http://localhost:${PORT}/api-docs`);
});

