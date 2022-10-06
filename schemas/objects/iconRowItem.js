export default {
	title: 'Icon with description',
	name: 'iconRowItem',
	type: 'object',
	fields: [
		{
			title: 'Icon',
			description: 'SVG is the preferred format',
			name: 'icon',
			type: 'image',
		},
		{
			title: 'Symbol',
			description: 'SVG is the preferred format',
			name: 'symbol',
			type: 'image',
		},
		{
			title: 'Heading',
			name: 'heading',
			type: 'string',
		},
		{
			title: 'Text',
			name: 'text',
			type: 'text',
		},
	],
	preview: {
		select: {
			title: 'heading',
			media: 'icon',
		},
	},
};
