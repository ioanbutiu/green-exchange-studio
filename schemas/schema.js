// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import siteSettings from './documents/siteSettings';

import home from './documents/home';
import about from './documents/about';
import team from './documents/team';
import news from './documents/news';
import faq from './documents/faq';
import contact from './documents/contact';
import privacyPolicy from './documents/privacyPolicy';
import givingBack from './documents/givingBack';

import page from './documents/page';
import category from './documents/category';
import article from './documents/article';
import author from './documents/author';

// Object schemas
import blockContent from './objects/blockContent';
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import imageWide from './objects/imageWide';
import faqItem from './objects/faqItem';
import teamMember from './objects/teamMember';
import textGridItem from './objects/textGridItem';
import textSection from './objects/textSection';
import cta from './objects/cta';
import iconRowItem from './objects/iconRowItem';
import podcastPlayer from './objects/podcastPlayer';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// The following are document types which will appear
		// in the studio.
		siteSettings,
		home,
		about,
		team,
		news,
		faq,
		contact,
		article,
		author,
		category,
		privacyPolicy,
		givingBack,
		// When added to this list, object types can be used as
		// { type: 'typename' } in other document schemas
		hero,
		imageSection,
		imageWide,
		blockContent,
		faqItem,
		teamMember,
		textGridItem,
		textSection,
		cta,
		iconRowItem,
		podcastPlayer,
	]),
});
