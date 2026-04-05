import type { Redirect } from 'next/dist/lib/load-custom-routes'

// Home page
const homePage: Array<Redirect> = [
  {
    source: '/tontine',
    destination: '/',
    permanent: true,
  },
  {
    source: '/tontine-ira/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/lifetime-income-ira/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/app',
    destination: '/',
    permanent: true,
  },
  {
    source: '/diversified-tontines/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/home(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/governments/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/CitySays',
    destination: '/',
    permanent: true,
  },
  {
    source: '/drafttons(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/crowdfunders(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/pricing',
    destination: '/',
    permanent: true,
  },
  {
    source: '/b/(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/bedroom(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/microcloudbedding(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/launch-the-app/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/mytontine-app/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/joint-tontines/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/en-au/(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/au/(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/uk/(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ru/(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/jp/(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/kr/(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/page(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/assets/null(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/banks(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/issuers(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/landing-pages(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/annuity-search(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/y42(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/3ml(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/2fs(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/$',
    destination: '/',
    permanent: true,
  },
  {
    source: '/whytt(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/affiliates(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/cn(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/C/Users(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/unrivalled-low-fees',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ton-token-sale',
    destination: '/',
    permanent: true,
  },
  {
    source: '/tokenpage',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ton-holders',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ton-money',
    destination: '/',
    permanent: true,
  },
  {
    source: '/smart-contracts-cdc-pensions',
    destination: '/',
    permanent: true,
  },
  {
    source: '/portfolio-management',
    destination: '/',
    permanent: true,
  },
  {
    source: '/peop',
    destination: '/',
    permanent: true,
  },
  {
    source: '/peop-(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/[slug]',
    destination: '/',
    permanent: true,
  },
  {
    source: '/locale/:slug*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/content/:slug*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/detail_(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/idk',
    destination: '/',
    permanent: true,
  },
  {
    source: '/products(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/jackson(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/<(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/eu',
    destination: '/',
    permanent: true,
  },
]

// FAQ
const faqs: Array<Redirect> = [
  {
    source: '/comments(.*)',
    destination: '/faqs/',
    permanent: true,
  },
  {
    source: '/how-it-works',
    destination: '/faqs/',
    permanent: true,
  },
  {
    source: '/tontine-pepps(.*)',
    destination: '/faqs/',
    permanent: true,
  },
  {
    source: '/pepps-as-a-service(.*)',
    destination: '/faqs/',
    permanent: true,
  },
  {
    source: '/learn-more',
    destination: '/faqs/',
    permanent: true,
  },
  {
    source: '/faqs-(.*)',
    destination: '/faqs/',
    permanent: true,
  },
  {
    source: '/faq',
    destination: '/faqs/',
    permanent: true,
  },
  {
    source: '/cn/(.*)',
    destination: '/faqs/',
    permanent: true,
  },
]

// About Us
const aboutUs: Array<Redirect> = [
  {
    source: '/Dean',
    destination: '/about-us',
    permanent: true,
  },
  {
    source: '/admin',
    destination: '/about-us',
    permanent: true,
  },
  {
    source: '/team(.*)',
    destination: '/about-us#the-team',
    permanent: true,
  },
  {
    source: '/styleguide',
    destination: '/about-us#the-team',
    permanent: true,
  },
]

// Contact us
const contactUs: Array<Redirect> = [
  {
    source: '/investors-informations-tontinetrust',
    destination: '/contact-us/',
    permanent: true,
  },
  {
    source: '/contact-pages/(.*)',
    destination: '/contact-us/',
    permanent: true,
  },
  {
    source: '/open-positions',
    destination: '/contact-us/',
    permanent: true,
  },
  {
    source: '/GetTONs',
    destination: '/contact-us/',
    permanent: true,
  },
  {
    source: '/register(.*)',
    destination: '/contact-us/',
    permanent: true,
  },
  {
    source: '/boxtitle(.*)',
    destination: '/contact-us/',
    permanent: true,
  },
  {
    source: '/mailto(.*)',
    destination: '/contact-us/',
    permanent: true,
  },
]

// For Plan Providers
const forProviders: Array<Redirect> = [
  {
    source: '/affiliates',
    destination: '/for-plan-providers/',
    permanent: true,
  },
  {
    source: '/for-business',
    destination: '/for-plan-providers/',
    permanent: true,
  },
  {
    source: '/issuers-pages(.*)',
    destination: '/for-plan-providers/',
    permanent: true,
  },
  {
    source: '/institutional',
    destination: '/for-plan-providers/',
    permanent: true,
  },
  {
    source: '/find-your-solution',
    destination: '/for-plan-providers/',
    permanent: true,
  },
]

// Investors
const investors: Array<Redirect> = [
  {
    source: '/investors/:slug',
    destination: '/investors/',
    permanent: true,
  },
  {
    source: '/eiis(.*)',
    destination: '/investors/',
    permanent: true,
  },
  {
    source: '/eiss(.*)',
    destination: '/investors/',
    permanent: true,
  },
]

// News
const news: Array<Redirect> = [
  {
    source: '/new/:slug*',
    destination: '/news/',
    permanent: true,
  },
  {
    source: '/feed',
    destination: '/news/',
    permanent: true,
  },
  {
    source:
      '/tontinetrust-raises-funding-to-solve-the-nastiest-hardest-problem-in-finance',
    destination: '/news/',
    permanent: true,
  },
  {
    source:
      '/news/tontinetrust-raises-funding-to-solve-the-nastiest-hardest-problem-in-finance',
    destination: '/news/',
    permanent: true,
  },
  {
    source:
      '/news/news/seismic-new-oecd-legal-instrument-calls-for-dc-pensions-to',
    destination: '/news/',
    permanent: true,
  },
  {
    source: '/news/belgiumnationaltontine/',
    destination: '/news/',
    permanent: true,
  },
  {
    source: '/news/news-tontinehistory',
    destination: '/news/',
    permanent: true,
  },
  {
    source: '/moneytalkbe',
    destination: '/news/',
    permanent: true,
  },
  {
    source: '/news/news/',
    destination: '/news/',
    permanent: true,
  },
  {
    source: '/news/[newsSlug]',
    destination: '/news/',
    permanent: true,
  },
  {
    source: '/IBD-Make-Time-For-tontines',
    destination: '/news/',
    permanent: true,
  },
  {
    source:
      '/news/recommendation-of-the-council-for-oecd-legal-instruments-the',
    destination: '/news/',
    permanent: true,
  },
  {
    source: '/OECD',
    destination: '/news/',
    permanent: true,
  },
  {
    source: '/announcements.(.*)',
    destination: '/news/',
    permanent: true,
  },
  {
    source: '/news/theswissairtontine',
    destination: '/news/swissair-the-accidental-tontine/',
    permanent: true,
  },
]

const blog: Array<Redirect> = [
  {
    source: '/news/die-with-zero-by-bill-perkins/',
    destination: '/blog/die-with-zero-by-bill-perkins/',
    permanent: true,
  },
  {
    source: '/news/saunas-and-living-longer/',
    destination: '/blog/saunas-and-living-longer/',
    permanent: true,
  },
]

// Research
const research: Array<Redirect> = [
  {
    source: '/esg-asset-management',
    destination: '/research/',
    permanent: true,
  },
  {
    source: '/research/the-tontine-puzzle/TheTontinePuzzle.pdf',
    destination: '/research/the-tontine-puzzle/The_Tontine_Puzzle.pdf',
    permanent: true,
  },
  {
    source: '/research/[researchSlug]',
    destination: '/research/',
    permanent: true,
  },
  {
    source: '/whitepaper-nt(.*)',
    destination: '/research/',
    permanent: true,
  },
  {
    source: '/pdf(.*)',
    destination: '/research/',
    permanent: true,
  },
  {
    source: '/docs/:slug*',
    destination: '/research/',
    permanent: true,
  },
  {
    source: '/whitepaper-nt(.*)',
    destination: '/research/',
    permanent: true,
  },
]

// Videos
const videos: Array<Redirect> = [
  {
    source: '/videos/videos(.*)',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/[videoSlug]',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/oecd-video',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/History of Tontines',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/interview-for-real-vision-tontine-in-the-us/',
    destination: '/videos/interview-video-for-real-vision-tontine-in-the-us/',
    permanent: true,
  },
  {
    source: '/videos/for-business',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/FAQs',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/contact-us',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/benefits-for-savers',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/about-us',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/website-terms',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/__media__(.*)',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/tontines-brookings-institute',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/tontine-explainer',
    destination: '/videos/explainer/',
    permanent: true,
  },
  {
    source: '/videos/the-baby-boomer(.*)',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/privacy-policy',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/news',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/march-2022(.*)',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/investors',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/videos/learn-more',
    destination: '/videos/',
    permanent: true,
  },
  {
    source: '/explainer',
    destination: '/videos/explainer/',
    permanent: true,
  },
]

// Misc
const misc: Array<Redirect> = [
  {
    source: '/tontineira-download/',
    destination: '/downloads/',
    permanent: true,
  },
  {
    source: '/legal/(.*)',
    destination: '/privacy-policy/',
    permanent: true,
  },
  {
    source: '/tontine-trust-funds/',
    destination: '/tontine-trust-fund/',
    permanent: true,
  },
  {
    source: '/sitemap-pages.xml',
    destination: '/sitemap.xml',
    permanent: true,
  },
  {
    source: '/sitemap-0.xml',
    destination: '/sitemap.xml',
    permanent: true,
  },
  {
    source: '/assets/images/stored/(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/verify/:verify_token',
    destination: '/?ver=:verify_token#tontinator',
    permanent: true,
  },
]

const botRoutes: Array<Redirect> = [
  {
    source: '/(.*).htm',
    destination: '/',
    permanent: true,
  },
  {
    source: '/(.*).html',
    destination: '/',
    permanent: true,
  },
  {
    source: '/.vscode(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/(.*).php',
    destination: '/',
    permanent: true,
  },
  {
    source: '/(.*)alfacgiapi',
    destination: '/',
    permanent: true,
  },
  {
    source: '/ALFA_DATA',
    destination: '/',
    permanent: true,
  },
  {
    source: '/alfacgiapi(.*)',
    destination: '/',
    permanent: true,
  },
  {
    source: '/(.*).phpp',
    destination: '/',
    permanent: true,
  },
  {
    source: '/wp(.*)',
    destination: '/',
    permanent: true,
  },
]

const tontineRedirects: Array<Redirect> = [
  ...homePage,
  ...faqs,
  ...aboutUs,
  ...contactUs,
  ...forProviders,
  ...investors,
  ...news,
  ...blog,
  ...research,
  ...videos,
  ...misc,
  ...botRoutes,
]

function addLocalePrefix(redirects: Array<Redirect>): Array<Redirect> {
  return redirects.map((redirect) => ({
    ...redirect,
    source: redirect.source.startsWith('/')
      ? `/:locale${redirect.source}`
      : `/:locale/${redirect.source}`,
    destination: redirect.destination.startsWith('/')
      ? `/:locale${redirect.destination}`
      : `/:locale/${redirect.destination}`,
  }))
}

const localizedRedirects = addLocalePrefix(tontineRedirects)

export { localizedRedirects, tontineRedirects as devRedirects }
