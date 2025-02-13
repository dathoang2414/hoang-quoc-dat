# Express TypeScript CRUD API

This project is a simple CRUD API built using ExpressJS, TypeScript, and Prisma ORM with SQLite for data persistence.

## Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <repo-url>
cd <project-folder>
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure the Database

```sh
npx prisma migrate dev --name init
npx prisma generate
```

### 4. Start the Server

```sh
npm run dev
```

The server will run on `http://localhost:3001` by default.

## API Endpoints

### 1. Create a Resource

**POST** `/api/resources`

```json
{
  "name": "Sample Resource",
  "description": "This is a sample description."
}
```

### 2. Get All Resources

**GET** `/api/resources`

#### Query Parameters:

- `search` (optional) - Filter resources by name (partial match).
- `limit` (optional) - Number of results to return.
- `page` (optional) - Page number for pagination.
- `orderDir` (optional) - Sorting direction (asc or desc).
- `orderBy` (optional) - Field to sort results by.

**Example Request:**

```
GET /resources?name=Sample&limit=10&offset=0
```

### 3. Get Resource by ID

**GET** `/api/resources/:id`

### 4. Update a Resource

**PUT** `/api/resources/:id`

```json
{
  "name": "Updated Name",
  "description": "Updated description."
}
```

### 5. Delete a Resource

**DELETE** `/api/resources/:id`

## License

This project is open-source and available under the MIT license.
