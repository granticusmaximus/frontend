import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: '7ijjg8j2',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2022-07-27', // use a UTC date string
});
