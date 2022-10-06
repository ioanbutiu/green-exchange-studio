export default {
	name: 'imageSection',
	title: 'Image with Text',
	type: 'object',
	fields: [
		{
			name: 'text',
			title: 'Text',
			type: 'text',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
		},
		{
			name: 'cta',
			type: 'cta',
			title: 'Call to action',
		},
	],
};
