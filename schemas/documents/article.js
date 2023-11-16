export default {
	name: 'article',
	title: 'Article',
	type: 'document',
	initialValue: {
		isPodcast: false,
	},
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'isPodcast',
			title: 'Is this article about a podcast episode?',
			description: 'This toggle will enable comments on this page',
			type: 'boolean',
			initialValue: false,
		},
		{
			name: 'lede',
			title: 'Lede',
			type: 'text',
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' },
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					title: 'Alternative Text',
					type: 'string',
					description: 'Important for SEO and accessibility',
					options: {
						isHighlighted: true,
					},
				},
			],
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
