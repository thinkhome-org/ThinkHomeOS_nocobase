# ThinkHomeOS bootstrap implementation plan

> Execute in the current checkout and verify the initial commit from a clean clone.

**Goal** — Publish a runnable ThinkHomeOS app in a new public GitHub repository.

**Architecture** — Use the official NocoBase 3 beta app template and PostgreSQL driver. Build the app with its Dockerfile and start it alongside PostgreSQL 16 using Compose. GitHub Actions exercises the same startup command.

**Spec** — [Bootstrap design](../specs/2026-11-19-nocobase-bootstrap-design.md)

## Bootstrap and verify

- [ ] Generate the official default template, pin dependencies in the lockfile, register PostgreSQL and preserve upstream notices.
- [ ] Add Compose, optional environment overrides and README instructions. Wait for database readiness and persist configuration and data.
- [ ] Add the Actions workflow and use the same checks locally. Verify health, PostgreSQL major version, sign-in and persistence. Exercise custom port and database credentials on a fresh volume.
- [ ] Commit together and rerun the default command from a clean clone. Publish the verified commit to the public repository and read back the default branch and CI result.

## Review focus

- The no-file happy path must boot with Compose defaults.
- A fresh project with overrides must boot on the supplied port using the supplied database credentials.
- Recreated containers must retain app configuration and database contents.
- Only the loopback app port is published. Git and Docker exclude local override files.
- The initial repository contains the upstream app and fresh runtime configuration instructions. ThinkHomeOSash and hosted deployment are outside scope.
