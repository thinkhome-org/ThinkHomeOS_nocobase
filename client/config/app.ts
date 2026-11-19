// ThinkHomeOS changed the display title in this NocoBase template file.
import { defineAppConfig, type AppConfigFactory } from '@nocobase/app-client';

const app: AppConfigFactory<{ title: string }> = defineAppConfig(
  (_runtime) => ({
    title: 'ThinkHomeOS',
  }),
);
export default app;
