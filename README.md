# TaskMate

TaskMate is a simple and efficient Todo app built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to perform basic CRUD (Create, Read, Update, Delete) operations to manage their tasks.

## Features

- **Add Tasks**: Easily create new tasks with a title.
- **View Tasks**: View a list of all tasks.
- **Update Tasks**: Mark tasks as complete or update task details.
- **Delete Tasks**: Remove tasks that are no longer needed.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: RESTful API for managing tasks

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/taskmate.git
   ```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd frontend
npm install
```

4. Set up environment variables:

- `Create a .env file in the root directory of the server and add the following:`

```env
MONGO_URI=<your_mongodb_connection_string>
```

5. Start the development servers:

```bash
    # In the backend folder
    node index.js

    # In the frontemnd folder
    npm run dev
```

## Usage

- Open the app in your browser at http://localhost:5173.
- Create, update, or delete tasks to manage your todo list.

API Endpoints

- GET /todo: Fetch all todos.
- POST /todo: Create a new todo.
- PUT /completed: Mark a todo as complete by ID.
- DELETE /todo/:id: Delete a todo by ID.

## Example Request/Response

- **POST /todo**

Request:

```json
{
  "title": "Buy groceries"
}
```
