export default {
	name: 'hero',
	title: 'Hero',
	type: 'object',
	fields: [
		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true, // <-- Defaults to false
			},
			fields: [
				{
					name: 'alt',
					title: 'Alternative Text',
					type: 'string',
					description: 'Important for SEO and accessibility',
					options: {
						isHighlighted: true, // <-- make this field easily accessible
					},
				},
			],
		},
	],
};
