export default {
	type: 'object',
	name: 'textSection',
	title: 'Text Section',
	fields: [
		{
			name: 'heading',
			type: 'string',
			title: 'Heading',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [{ type: 'block' }],
		},
	],
	preview: {
		select: {
			heading: 'heading',
		},
		prepare({ heading }) {
			return {
				title: heading,
				subtitle: 'Text section',
			};
		},
	},
};
