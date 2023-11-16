import { PlayIcon } from '@sanity/icons';
import React from 'react';

export default {
	name: 'podcastPlayer',
	title: 'Podcast Player',
	type: 'object',
	fields: [
		{
			name: 'url',
			title: 'Podcast Episode URL',
			type: 'string',
			description: 'Paste the episode embed code',
		},
	],
	preview: {
		select: {
			url: 'url',
		},
		prepare(selection) {
			const { url } = selection;
			const title = url.match(/title="([^"]+)"/)[1];
			return {
				title: title,
				subtitle: 'Podcast Player',
				media: <PlayIcon />,
			};
		},
	},
};
