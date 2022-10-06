export default {
	name: 'faqItem',
	title: 'FAQ Questions',
	type: 'object',
	fields: [
		{
			name: 'question',
			title: 'Question',
			type: 'string',
		},
		{
			title: 'Answer',
			name: 'answer',
			type: 'array',
			of: [{ type: 'block' }],
		},
	],
	preview: {
		select: {
			title: 'question',
		},
		prepare({ title }) {
			return {
				title,
				subtitle: 'FAQ Question',
			};
		},
	},
};
