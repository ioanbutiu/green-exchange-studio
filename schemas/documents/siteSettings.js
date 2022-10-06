export default {
	name: 'siteSettings',
	type: 'document',
	title: 'Site settings',
	// https://www.sanity.io/docs/experimental/ui-affordances-for-actions
	__experimental_actions: ['create', 'delete', 'update', 'publish'],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Site title',
		},
		{
			title: 'URL',
			name: 'url',
			type: 'url',
			description: 'The main site url. Used to create canonical url',
		},
		{
			title: 'Site language',
			description: 'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
			name: 'lang',
			type: 'string',
		},
		{
			title: 'Brand logo',
			description: 'Best choice is to use an SVG where the color are set with currentColor',
			name: 'logo',
			type: 'image',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
					description: 'Important for SEO and accessiblity.',
					options: {
						isHighlighted: true,
					},
				},
			],
		},
	],
};
