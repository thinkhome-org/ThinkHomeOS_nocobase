# ThinkHomeOS NocoBase 3 beta bootstrap

## Goal

Create `thinkhome-org/ThinkHomeOS_nocobase` as a public GitHub repository. Its first commit should contain a runnable ThinkHomeOS application generated from the official NocoBase 3 beta default template. A fresh clone starts ThinkHomeOS and PostgreSQL 16 together with `docker compose up --build --wait` using built-in local defaults. Migration of code, data, schemas, or configuration from ThinkHomeOSash is permanently out of scope. Business modules and hosted deployment are outside this bootstrap.

## Approaches

| Approach                                               | Trade-off                                                                                                    | Decision                 |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------ |
| Official template with PostgreSQL 16 in Docker Compose | Requires Docker with Compose and starts the app with the PostgreSQL version in NocoBase's integration tests. | Selected.                |
| Official template with SQLite                          | Requires no separate database service and uses a different database driver.                                  | Considered.              |
| Official template with managed PostgreSQL              | Uses the same driver and requires a provider and hosted database credentials.                                | Can be configured later. |

## Bootstrap

- Use the official beta generator at the repository root and keep the generated dependency lockfile. Identify the app as ThinkHomeOS using supported template settings.
- Build the app with the template's Dockerfile and configure the official PostgreSQL driver. Compose starts PostgreSQL 16, waits for it to become ready, then starts ThinkHomeOS. Publish the app port on loopback and keep PostgreSQL on the Compose network.
- Include `.env.example` with optional overrides for the local app port and PostgreSQL database name, username, and password. Compose supplies development defaults when `.env` is absent. Pass the same PostgreSQL settings to the database and app. Ignore `.env` in Git and exclude it from the Docker build context.
- Add a GitHub Actions workflow for pushes and pull requests. Run the documented Compose command without an override file, check the ThinkHomeOS health endpoint and confirm the database reports PostgreSQL 16.
- Persist database data, app storage, and generated runtime configuration across container recreation. Keep generated configuration and credentials out of Git.
- Document Docker prerequisites, the startup command, local sign-in, and how to stop the stack in the README. Explain that PostgreSQL initialization variables only apply to a fresh database volume. Keep the PostgreSQL connection configurable for a future hosted database.

## Acceptance checks

- [ ] Install dependencies from the committed lockfile and run the template's available project checks.
- [ ] Start both services from a clean checkout without `.env`, verify the health endpoint, and sign in locally.
- [ ] On a fresh Compose project, use `.env` to override the app port and PostgreSQL credentials. Verify that the app is healthy on the configured port.
- [ ] Recreate the containers and verify that the app configuration and database persist.
- [ ] Verify a passing GitHub Actions run on the published commit.
- [ ] Read back GitHub visibility and confirm the public repository's default branch points to the verified initial commit.

[Official NocoBase 3 quickstart](https://docs.nocobase.com/core/getting-started/create-app/) · [Database compatibility](https://docs.nocobase.com/core/reference/compatibility/) · [NocoBase 3 Docker guide](https://docs.nocobase.com/core/tutorials/deploy-with-docker/)
