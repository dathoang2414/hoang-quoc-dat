import { Router } from 'express';
import CreateResourceDto from './dto/create.dto';
import SearchParamsDto from './dto/searchParams.dto';
import UpdateResourceDto from './dto/update.dto';
import { ResourceService } from './resource.service';

const router = Router();
const resourceService = new ResourceService();

/**
 * @swagger
 * tags:
 *   - name: Resources
 *     description: Resource management
 */

// GET /api/resources - Get all resources
/**
 * @swagger
 * /api/resources:
 *   get:
 *     summary: Get all resources
 *     description: Return all resources
 *     tags: [Resources]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term for filtering resources
 *       - in: query
 *         name: limit
 *         schema:
 *            type: integer
 *         description: Number of resources to return
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: orderDir
 *         schema:
 *           type: string
 *           enum: ['asc', 'desc']
 *         description: Sort direction
 *       - in: query
 *         name: orderBy
 *         schema:
 *           type: string
 *           enum: ['name', 'createdAt']
 *         description: Sort by field
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', async (req, res) => {
  const params = req.query as SearchParamsDto;
  console.log(params);

  const result = await resourceService.getAllResources(params);

  res.status(200).json(result);
});

// POST /api/resources - Create a new resource
/**
 * @swagger
 * /api/resources:
 *   post:
 *     summary: Create a new resource
 *     description: Add a new resource to the system
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                  example: "Nguyen Van A"
 *                description:
 *                  type: string
 *                  example: "Description"
 *     responses:
 *       201:
 *         description: Resource created successfully
 */
router.post('/', async (req, res) => {
  const data = req.body as CreateResourceDto;
  const resource = await resourceService.createResource(data);
  res.status(201).json(resource);
});

// GET /api/resources/{id} - Get a resource by ID
/**
 * @swagger
 * /api/resources/{id}:
 *   get:
 *     summary: Get a resource by ID
 *     description: Retrieve a single resource using its ID
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1"
 *         description: ID of the resource
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await resourceService.getResourceById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'There was an error', status: 500 });
  }
});

// PATCH /api/resources/{id} - Update a resource
/**
 * @swagger
 * /api/resources/{id}:
 *   patch:
 *     summary: Update a resource
 *     description: Modify an existing resource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1"
 *         description: ID of the resource
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                  example: "Nguyen Van A"
 *                description:
 *                  type: string
 *                  example: "Description"
 *     responses:
 *       200:
 *         description: Resource updated successfully
 */
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body as UpdateResourceDto;
    const result = await resourceService.updateResource(id, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'There was an error', status: 500 });
  }
});

// DELETE /api/resources/{id} - Delete a resource
/**
 * @swagger
 * /api/resources/{id}:
 *   delete:
 *     summary: Delete a resource
 *     description: Remove a resource from the system
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1"
 *         description: ID of the resource
 *     responses:
 *       200:
 *         description: Resource deleted successfully
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await resourceService.deleteResource(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'There was an error', status: 500 });
  }
});

export default router;
