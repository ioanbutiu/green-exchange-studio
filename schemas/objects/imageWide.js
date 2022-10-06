export default {
	type: 'object',
	name: 'imageWide',
	title: 'Full-Width Image',
	fields: [
		{
			name: 'heading',
			type: 'string',
			title: 'Heading',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
		},
		{
			name: 'cta',
			type: 'cta',
			title: 'Call to action',
		},
	],
	preview: {
		select: {
			title: 'heading',
			media: 'image',
		},
		prepare({ title, media }) {
			return {
				title,
				subtitle: 'Full-Width Image',
				media,
			};
		},
	},
};
