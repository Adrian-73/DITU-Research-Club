export const load = async ({ url }) => {
	const page = url.searchParams.get('page') ?? 1;
	return { Page: page };
};
export const ScrollIntoView = ({ currentTarget }) => {
	const scrollToElement = document.querySelector(currentTarget.getAttribute('href'));
	if (!scrollToElement) return;
	scrollToElement.ScrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
};
