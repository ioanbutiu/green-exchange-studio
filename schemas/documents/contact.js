export default {
	name: 'contact',
	title: 'Contact',
	type: 'document',
	fieldsets: [
		{
			name: 'metadata',
			title: 'SEO & metadata',
		},
	],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'hero',
			title: 'Hero',
			type: 'hero',
		},
		{
			name: 'info',
			title: 'Info',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
		{
			name: 'description',
			type: 'text',
			title: 'Description',
			description: 'This description populates meta-tags on the webpage',
			fieldset: 'metadata',
		},
		{
			name: 'openGraphImage',
			type: 'image',
			title: 'Open Graph Image',
			description: 'Image for sharing previews on Facebook, Twitter etc.',
			fieldset: 'metadata',
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'openGraphImage',
		},
	},
};
