# GitHub workflow

The public repository is [thinkhome-org/ThinkHomeOS_nocobase](https://github.com/thinkhome-org/ThinkHomeOS_nocobase). The default branch is `main`.

Use GitHub Issues for bugs and feature requests. Use the organization’s `Bug`, `Feature`, or `Task` issue type where applicable. Link implementation pull requests to the issue they address. Report security vulnerabilities using [SECURITY.md](SECURITY.md).

Changes to `main` require a pull request and a passing **Compose smoke test**.

The [Compose smoke test](.github/workflows/compose.yml) runs on pushes to `main` and on pull requests. It starts Compose without a `.env` file and checks the app health endpoint and PostgreSQL major version. Reproduce startup locally with `docker compose up --build --wait`. Run `pnpm check` with Node.js 24, the version used in the Dockerfile, for the upstream application checks.

See [the README](README.MD) for setup and local troubleshooting. This repository defines local development and CI. Releases and hosted deployments require a separate project decision.

## Codex pull request reviews

Ask Codex “zkontroluj PR #5” to run the project reviewer. The parent chat displays the Czech report first. When there are findings, use the ChatGPT picker to select them individually for publication or choose “Nic nezveřejnit”. If the picker is unavailable, keep the findings in chat until the user explicitly selects them.

Immediately before posting the selected findings, fetch the current PR head and verify each finding and diff location. If the affected code changed, show the revised comment in chat for a fresh selection. Drop resolved findings. Publish only confirmed comments on the verified revision.
