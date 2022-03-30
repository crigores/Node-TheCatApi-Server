## Run the Project

Install the project dependencies:

```bash
npm install
```

Create a `.env` file under the root project directory and populate it with the following environment variables:

```bash
PORT=6060
CLIENT_ORIGIN_URL=http://localhost:4040
AUTH0_AUDIENCE=https://TheCatApi.Rigores.com
AUTH0_DOMAIN=dev-1v4x462d.us.auth0.com
```

Run the project in development mode:

```bash
npm run dev
```