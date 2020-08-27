const title = "Luke Dunscombe's Site"
const description = "I'm a software developer, I like to read, and write about things.";

const SEO = {
  title,
  description,
  canonical: 'https://ludu.io',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://ludu.io',
    title,
    description
  },
  twitter: {
    handle: '@LukeDunscombe',
    site: '@LukeDunscombe',
    cardType: 'summary_large_image'
  }
};

export default SEO;