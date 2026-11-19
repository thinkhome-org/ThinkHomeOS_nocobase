# GitHub workflow

The public repository is [thinkhome-org/ThinkHomeOS_nocobase](https://github.com/thinkhome-org/ThinkHomeOS_nocobase). The default branch is `main`.

Use GitHub Issues for bugs and feature requests. Use the organization’s `Bug`, `Feature`, or `Task` issue type where applicable. Link implementation pull requests to the issue they address. Report security vulnerabilities using [SECURITY.md](SECURITY.md).

Changes to `main` require a pull request and a passing **Compose smoke test**.

The [Compose smoke test](.github/workflows/compose.yml) runs on pushes to `main` and on pull requests. It starts Compose without a `.env` file and checks the app health endpoint and PostgreSQL major version. Reproduce startup locally with `docker compose up --build --wait`. Run `pnpm check` for the upstream application checks.

See [the README](README.MD) for setup and local troubleshooting. This repository defines local development and CI. Releases and hosted deployments require a separate project decision.
