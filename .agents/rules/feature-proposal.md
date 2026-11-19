# Feature proposal

Use this workflow only on an explicit request to design a feature, such as “navrhni funkci”. Ordinary implementation requests and fixes follow the existing workflow.

1. Read the [local NocoBase 3 development Skill](../skills/nocobase-app-development/SKILL.md) and the local Skills relevant to the requested behavior. Inspect existing application code and package manifests. For each proposed plugin, check its applicable registration in `client/plugins.ts`, `server/plugins.ts` or `cli/plugins.ts` and any configuration the feature depends on.
2. Present a concise proposal in Czech in the chat. Identify the user, intended outcome, capabilities already available (with source paths), and the smallest changes needed. Identify any plugin that still needs installation or registration. If a decision materially affects the proposal, ask through the picker.
3. Include acceptance scenarios with an action and an observable result. For permission-sensitive features, include both an authorized action and a direct API request rejected for a user without the grant.
4. Offer “Implementovat návrh”, “Upravit návrh” and “Ponechat jako návrh” in the picker. Begin implementation only when the user chooses it.
