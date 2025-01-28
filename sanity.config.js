import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { dashboardTool } from '@sanity/dashboard';
import { schemaTypes } from './schemas';
import { structure } from './structure';

export default defineConfig({
	name: 'default',
	title: 'Green Exchange',

	projectId: '6th4i42j',
	dataset: 'production',

	basePath: '/studio',

	plugins: [
		structure,
		dashboardTool(),
		vercelDeployTool(),
		// Only load vision tool in development
		process.env.NODE_ENV === 'development' ? visionTool() : null,
	].filter(Boolean),

	schema: {
		types: schemaTypes,
	},
});
