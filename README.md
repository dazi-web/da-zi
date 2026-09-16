# About Me Docusaurus

Personal about-me site built with Docusaurus.

## Local DDEV deployment

```bash
ddev start
ddev npm install
ddev npm run build
ddev launch
```

DDEV serves the static output from `build/`. After edits, run:

```bash
ddev npm run build
ddev launch
```

For Docusaurus' live development server:

```bash
ddev npm run start
```

Then open the forwarded DDEV URL for port `3000`, or run the same command outside DDEV and open `http://localhost:3000`.

## Webserver deployment

Pushes to `main` are built and deployed automatically by the
`Deploy website` GitHub Actions workflow. The generated files are synchronized
to the production webroot over SSH.

The workflow expects these GitHub Actions settings:

- Secrets: `DEPLOY_SSH_KEY`, `DEPLOY_KNOWN_HOSTS`
- Variables: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PORT`, `DEPLOY_PATH`

It can also be started manually from the Actions tab with `workflow_dispatch`.

### Manual deployment

This project needs Node.js 18 or newer to build. Node.js 20 is recommended and declared in `.nvmrc` and `.node-version`.

If your webserver has a modern Node.js version:

```bash
npm install
npm run build
```

Then point the webserver document root to `build/`, or copy the contents of `build/` into the public web directory.

If your webserver has an older Node.js version, build locally with DDEV and deploy only the generated static files:

```bash
ddev npm install
ddev npm run build
```

Then upload the contents of `build/` to the webserver. The live server does not need Node.js after the build has been generated.
