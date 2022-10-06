export default {
	name: 'textGridItem',
	type: 'object',
	title: 'Text Grid Item',
	fields: [
		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
		},
		{
			name: 'text',
			type: 'text',
			title: 'Text',
		},
	],
	preview: {
		select: {
			title: 'heading',
		},
		prepare({ title }) {
			return {
				title,
				subtitle: 'Text grid item',
			};
		},
	},
};
