// Sanity CMS Integration for Dynamic Blog Updates
// Add these variables to your .env file:
// VITE_SANITY_PROJECT_ID=your_sanity_project_id
// VITE_SANITY_DATASET=production (optional, defaults to 'production')

const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || ''
const DATASET = import.meta.env.VITE_SANITY_DATASET || 'production'
const API_VERSION = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01'

const FALLBACK_POSTS = [
  {
    _id: '1',
    slug: 'b-ed-admissions-open-2026-27',
    category: 'Admissions',
    title: 'B.Ed & M.Ed Admissions Now Open for 2026–27 Academic Year',
    excerpt: 'AMACEDU has opened applications for the upcoming academic year, with seats across both our B.Ed. and M.Ed. programs. Here is everything you need to know about eligibility, dates, and the application process.',
    author: 'Admissions Office',
    date: 'August 04, 2026',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
  },
  {
    _id: '2',
    slug: 'why-teacher-education-matters',
    category: 'Insights',
    title: 'Why Teacher Education Matters More Than Ever in 2026',
    excerpt: 'As classrooms evolve with new technology and diverse learners, the role of a well-trained teacher has never been more critical. We explore what modern pedagogy demands of the next generation of educators.',
    author: 'Dr. D. Biruntha',
    date: 'July 22, 2026',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80',
  },
  {
    _id: '3',
    slug: 'annual-sports-cultural-meet-2026',
    category: 'Campus Life',
    title: 'Annual Sports and Cultural Meet 2026: A Celebration of Talent',
    excerpt: 'Our student-teachers showcased incredible talent, sportsmanship, and creativity at this year’s annual meet, with events spanning athletics, classical arts, and inter-department competitions.',
    author: 'Student Affairs',
    date: 'July 05, 2026',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
  },
]

/**
 * Converts a Sanity image asset ref or object to a CDN image URL
 */
export function urlForSanityImage(source) {
  if (!source) return ''
  if (typeof source === 'string' && source.startsWith('http')) return source
  if (source?.asset?.url) return source.asset.url
  if (source?.asset?._ref && PROJECT_ID) {
    // Format: image-tb9889f02931-1000x800-jpg -> https://cdn.sanity.io/images/PROJECT_ID/DATASET/tb9889f02931-1000x800.jpg
    const ref = source.asset._ref
    const [, id, dimensions, format] = ref.split('-')
    return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${id}-${dimensions}.${format}`
  }
  return ''
}

/**
 * Fetch dynamic blog posts from Sanity CMS via GROQ query API
 */
export async function fetchBlogPosts() {
  if (!PROJECT_ID) {
    console.info('Sanity Project ID not set in VITE_SANITY_PROJECT_ID. Displaying default blog posts.');
    return FALLBACK_POSTS
  }

  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    description,
    "img": mainImage.asset->url,
    mainImage,
    "category": category->title,
    categories[0]->title,
    "author": author->name,
    publishedAt,
    _createdAt
  }`

  const encodedQuery = encodeURIComponent(query)
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodedQuery}`

  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Sanity query failed: ${res.statusText}`)
    }
    const data = await res.json()
    const posts = data.result || []

    if (posts.length === 0) return FALLBACK_POSTS

    return posts.map((p) => {
      const pubDate = p.publishedAt || p._createdAt
      const dateFormatted = pubDate
        ? new Date(pubDate).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })
        : 'Recent'

      return {
        _id: p._id,
        slug: p.slug || p._id,
        category: p.category || p.categories || 'Education',
        title: p.title,
        excerpt: p.excerpt || p.description || '',
        author: p.author || 'AMACEDU',
        date: dateFormatted,
        img: p.img || urlForSanityImage(p.mainImage) || FALLBACK_POSTS[0].img,
      }
    })
  } catch (err) {
    console.error('Error fetching blogs from Sanity:', err)
    return FALLBACK_POSTS
  }
}
