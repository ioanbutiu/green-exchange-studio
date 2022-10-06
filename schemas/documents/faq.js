export default {
	name: 'faq',
	title: 'FAQ',
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
			name: 'general',
			title: 'General Questions',
			type: 'array',
			of: [{ type: 'faqItem' }],
		},
		{
			name: 'issuers',
			title: 'Issuer Questions',
			type: 'array',
			of: [{ type: 'faqItem' }],
		},
		{
			name: 'investors',
			title: 'Investor Questions',
			type: 'array',
			of: [{ type: 'faqItem' }],
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
