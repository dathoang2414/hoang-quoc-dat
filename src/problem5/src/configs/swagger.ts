import { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Cấu hình Swagger
const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Problem5 API with Swagger',
      version: '1.0.0',
      description: 'A simple API documentation using Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Local server',
      },
    ],
  },
  apis: ['./src/*/**/*.routes.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('📃 Swagger Docs available at: http://localhost:3000/docs');
};
