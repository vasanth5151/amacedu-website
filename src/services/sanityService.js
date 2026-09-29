// Sanity CMS Integration for Dynamic Blog Updates
const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || '9wt7tjcb'
const DATASET = import.meta.env.VITE_SANITY_DATASET || 'production'
const API_VERSION = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01'
const SITE_ID = import.meta.env.VITE_SANITY_SITE_ID || 'amacedu'

export function slugify(text) {
  if (!text) return ''
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const FALLBACK_POSTS = [
  {
    _id: '1',
    slug: 'b-ed-m-ed-admissions-open-2026-27',
    category: 'Admissions',
    title: 'B.Ed & M.Ed Admissions Now Open for 2026–27 Academic Year',
    excerpt: 'AMACEDU has opened applications for the upcoming academic year, with seats across both our B.Ed. and M.Ed. programs. Here is everything you need to know about eligibility, dates, and the application process.',
    author: 'Admissions Office',
    date: 'August 04, 2026',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    body: `AMACEDU has officially commenced admissions for the 2026–27 academic year for our prestigious Bachelor of Education (B.Ed.) and Master of Education (M.Ed.) degree programs.\n\nWith world-class infrastructure, experienced faculty, and strong placement partnerships with leading educational institutions across Tamil Nadu, AMACEDU prepares educators for rewarding teaching and leadership careers.`,
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
    body: `As classrooms evolve with new technology and diverse learners, the role of a well-trained teacher has never been more critical.\n\nEffective pedagogy is not just about delivering textbook curriculum, but inspiring curiosity, promoting critical inquiry, and understanding every child's individual learning path.`,
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
    body: `Our student-teachers showcased incredible talent, sportsmanship, and creativity at this year’s annual meet, with events spanning athletics, classical arts, and inter-department competitions.\n\nHolistic teacher development requires physical wellness, leadership, team coordination, and cultural appreciation.`,
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
    const ref = source.asset._ref
    const parts = ref.split('-')
    if (parts.length >= 4) {
      const id = parts[1]
      const dimensions = parts[2]
      const format = parts[3]
      return `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${id}-${dimensions}.${format}`
    }
  }
  return ''
}

/**
 * Helper to extract clean plain text excerpt from body / string / blocks
 */
function extractExcerpt(body, explicitExcerpt) {
  if (explicitExcerpt && typeof explicitExcerpt === 'string' && explicitExcerpt.trim()) {
    return explicitExcerpt.trim()
  }
  if (typeof body === 'string' && body.trim()) {
    const clean = body
      .replace(/#+\s+/g, '')
      .replace(/\*{1,3}/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\n+/g, ' ')
      .trim()
    return clean.length > 170 ? clean.slice(0, 167) + '...' : clean
  }
  if (Array.isArray(body)) {
    const text = body
      .filter((b) => b._type === 'block')
      .map((b) => (b.children ? b.children.map((c) => c.text).join('') : ''))
      .join(' ')
      .trim()
    return text.length > 170 ? text.slice(0, 167) + '...' : text
  }
  return ''
}

/**
 * Normalize a raw Sanity post into a standard object structure
 */
function normalizePost(p) {
  const pubDate = p.date || p.publishedAt || p._createdAt
  let dateFormatted = 'Recent'
  if (pubDate) {
    try {
      dateFormatted = new Date(pubDate).toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      })
    } catch {
      dateFormatted = String(pubDate)
    }
  }

  const generatedSlug = slugify(p.title)
  const rawSlug = p.slug?.current || (typeof p.slug === 'string' && p.slug)
  // Use human-readable title slug unless a non-UUID custom slug exists
  const isUuid = rawSlug && (rawSlug.length === 36 || /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}/.test(rawSlug))
  const slug = (rawSlug && !isUuid) ? rawSlug : (generatedSlug || p._id)

  const image =
    p.imageUrl ||
    urlForSanityImage(p.image) ||
    urlForSanityImage(p.mainImage) ||
    FALLBACK_POSTS[0].img

  let category = 'Teacher Education'
  if (typeof p.category === 'string') {
    category = p.category
  } else if (p.category?.title) {
    category = p.category.title
  } else if (Array.isArray(p.categories) && p.categories[0]) {
    category = typeof p.categories[0] === 'string' ? p.categories[0] : p.categories[0].title || 'Education'
  }

  let author = 'AMACEDU'
  if (typeof p.author === 'string') {
    author = p.author
  } else if (p.author?.name) {
    author = p.author.name
  }

  return {
    _id: p._id,
    slug: slug,
    title: p.title || 'Untitled Post',
    category: category,
    author: author,
    date: dateFormatted,
    rawDate: pubDate,
    img: image,
    excerpt: extractExcerpt(p.body, p.excerpt || p.description),
    body: p.body || p.content || '',
    site: p.site || '',
  }
}

/**
 * Fetch dynamic blog posts from Sanity CMS via GROQ query API
 */
export async function fetchBlogPosts() {
  if (!PROJECT_ID) {
    console.info('Sanity Project ID not set. Displaying default blog posts.')
    return FALLBACK_POSTS
  }

  const query = `*[_type in ["blogPost", "post", "blog", "article"] && (site == "${SITE_ID}" || site match "*${SITE_ID}*" || !defined(site))] | order(coalesce(date, publishedAt, _createdAt) desc) {
    _id,
    _type,
    title,
    "slug": coalesce(slug.current, slug, _id),
    site,
    date,
    publishedAt,
    _createdAt,
    category,
    categories[]->{ title },
    author,
    excerpt,
    description,
    body,
    "imageUrl": coalesce(image.asset->url, mainImage.asset->url),
    image,
    mainImage
  }`

  const encodedQuery = encodeURIComponent(query)
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodedQuery}`

  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Sanity query failed: ${res.statusText}`)
    }
    const data = await res.json()
    const rawPosts = data.result || []

    if (rawPosts.length === 0) {
      const generalQuery = `*[_type in ["blogPost", "post", "blog"] && (title match "*B.Ed*" || title match "*M.Ed*" || title match "*Teacher*")] | order(coalesce(date, publishedAt, _createdAt) desc) {
        _id,
        _type,
        title,
        "slug": coalesce(slug.current, slug, _id),
        date,
        publishedAt,
        _createdAt,
        body,
        "imageUrl": coalesce(image.asset->url, mainImage.asset->url),
        image,
        mainImage
      }`
      const resGen = await fetch(
        `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=${encodeURIComponent(generalQuery)}`
      )
      const dataGen = await resGen.json()
      if (dataGen.result && dataGen.result.length > 0) {
        return dataGen.result.map(normalizePost)
      }
      return FALLBACK_POSTS
    }

    return rawPosts.map(normalizePost)
  } catch (err) {
    console.error('Error fetching blogs from Sanity:', err)
    return FALLBACK_POSTS
  }
}

/**
 * Fetch a single blog post by slug or ID
 */
export async function fetchBlogPostBySlug(slugOrId) {
  if (!slugOrId) return null

  const targetSlug = slugify(slugOrId)

  // 1. Try local fallbacks first
  const fallbackMatch = FALLBACK_POSTS.find(
    (p) => p.slug === slugOrId || p._id === slugOrId || slugify(p.title) === targetSlug
  )

  if (!PROJECT_ID) {
    return fallbackMatch || null
  }

  try {
    const allPosts = await fetchBlogPosts()
    const match = allPosts.find(
      (p) =>
        p.slug === slugOrId ||
        p._id === slugOrId ||
        slugify(p.title) === targetSlug ||
        slugify(p.slug) === targetSlug
    )
    if (match) return match
  } catch (err) {
    console.error('Error fetching post by slug from Sanity:', err)
  }

  return fallbackMatch || null
}
