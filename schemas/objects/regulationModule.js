// Global regulationModule type used by listing and trading pages.
// Note: A different inline definition of 'regulationModule' exists in
// documentCategory.js for the regulatory page. See the TODO there.
export default {
	name: 'regulationModule',
	title: 'Regulation Module',
	type: 'object',
	fields: [
		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'items',
			title: 'Items',
			type: 'array',
			of: [{ type: 'regulationItem' }],
		},
	],
	preview: {
		select: {
			title: 'heading',
		},
	},
};
