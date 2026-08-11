// Central content + imagery for the AMAPS marketing site.
// Images use Unsplash CDN (education / children / campus themes).

const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMG = {
  heroChild: u('photo-1503454537195-1dcabb73ffb9', 1400),
  classroom: u('photo-1580582932707-520aed937b7b', 1200),
  reading: u('photo-1544717305-2782549b5136', 1000),
  playground: u('photo-1587653263995-422546a7a569', 1000),
  science: u('photo-1567168544813-cc03465b4fa8', 1000),
  campus: u('photo-1562774053-701939374585', 1400),
  paint: u('photo-1499892477393-f675706cbfac', 1000),
  library: u('photo-1522202176988-66273c2fd55f', 1000),
  band: u('photo-1571260899304-425eee4c7efc', 1000),
  sports: u('photo-1526676037777-05a232554f77', 1000),
  quoteBg: u('photo-1509062522246-3755977927d7', 1600),
}

export const NAV_LINKS = [
  { label: 'About', href: '#about', hasDropdown: true },
  { label: 'Academic', href: '#academics' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Curriculum', href: '#courses' },
  { label: 'Admission', href: '#admissions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'ERP', href: '#erp', hasDropdown: true },
]

export const STATS = [
  { value: 25, suffix: '+', label: 'Years of Legacy' },
  { value: 1200, suffix: '+', label: 'Happy Students' },
  { value: 65, suffix: '+', label: 'Expert Educators' },
  { value: 35, suffix: '', label: 'Acre Green Campus' },
  { value: 99, suffix: '%', label: 'Parent Satisfaction' },
]

export const VISIONARIES = [
  {
    name: 'Tmt. D. Meenakshi Ammal',
    role: 'Founder',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Thiru. A. N. Radhakrishnan, M.A., D.Com.',
    role: 'Co-Founder',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Tmt. Gomathi Radhakrishnan',
    role: 'Co-Founder',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
  },
]

export const FEATURES = [
  {
    title: 'Smart Classrooms',
    desc: 'Interactive, tech-enabled rooms that turn lessons into living experiences.',
    icon: 'monitor',
  },
  {
    title: 'Experiential Learning',
    desc: 'Hands-on labs and projects that build real understanding, not rote memory.',
    icon: 'flask',
  },
  {
    title: 'Sports & Athletics',
    desc: 'Professional coaching across a 35-acre campus of fields and courts.',
    icon: 'trophy',
  },
  {
    title: 'STEAM Curriculum',
    desc: 'Science, tech, arts and math woven into one integrated way of thinking.',
    icon: 'atom',
  },
  {
    title: 'Safe Transport',
    desc: 'GPS-tracked fleet with trained attendants for a worry-free commute.',
    icon: 'bus',
  },
  {
    title: 'Caring Community',
    desc: 'Counsellors and mentors who know every child by name and by heart.',
    icon: 'heart',
  },
]

export const GALLERY = [
  { img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80', label: 'Early Years' },
  { img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80', label: 'Libraries' },
  { img: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80', label: 'Athletics' },
  { img: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=900&q=80', label: 'Science Labs' },
  { img: 'https://images.unsplash.com/photo-1499892477393-f675706cbfac?auto=format&fit=crop&w=900&q=80', label: 'Arts & Craft' },
  { img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80', label: 'Music & Band' },
  { img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80', label: 'Auditorium' },
]

export const AWARDS = [
  { title: '36 pts Academic Excellence Index', detail: 'Ranked among the top CBSE campuses in the region.' },
  { title: '4.9 / 5 Parent Rating', detail: 'Consistently rated for care, safety and outcomes.' },
  { title: '100% Board Success', detail: 'A decade of complete Grade X & XII pass results.' },
]

export const ACCOLADES = [
  { title: 'Global Green League Certification', detail: 'Recognised for our 35-acre carbon-conscious campus.' },
  { title: 'National Robotics & Coding Championship', detail: 'District winners three years running.' },
  { title: 'Exceptional Sports Academy Trophy', detail: 'State medals across athletics, cricket and chess.' },
]

export const TESTIMONIALS = [
  {
    name: 'Meera Nair',
    role: 'Parent, Grade 4',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    text: 'The first morning my daughter refused to leave school, I knew we had chosen right. AMAPS turned learning into something she genuinely looks forward to.',
  },
  {
    name: 'Arjun Rao',
    role: 'Parent, Grade 7',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'The teachers treat curiosity as sacred. My son now explains science experiments to us at the dinner table — that says everything.',
  },
  {
    name: 'Fatima Sheikh',
    role: 'Parent, Grade 2',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    text: 'Safe, warm and genuinely joyful. The campus feels less like an institution and more like a second home for our little one.',
  },
]

export const NEWS = [
  {
    tag: 'Admissions',
    date: 'Aug 04, 2026',
    title: 'Admissions Open for 2026–27 Academic Year',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Culture',
    date: 'Jul 28, 2026',
    title: '79th Independence Day Celebrated Across Campus',
    img: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Achievement',
    date: 'Jul 15, 2026',
    title: 'AMAPS Robotics Team Wins Inter-School Grand Prix',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
]

export const BLOG = [
  {
    cat: 'Parenting',
    read: '5 min read',
    title: 'How Creative Play Builds Critical Logical Thinking',
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
  },
  {
    cat: 'Learning',
    read: '4 min read',
    title: 'De-mystifying Robotics & STEM for Young Learners',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    cat: 'Wellbeing',
    read: '6 min read',
    title: 'Nurturing Child Focus in a Short-Attention Era',
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  },
]

export const FAQS = [
  {
    q: 'What is the admission process at AMAPS Campus?',
    a: 'Admissions run in three simple steps — submit an online enquiry, attend a campus tour and interaction, and complete registration. Our admissions team guides you through documentation and fee structure at every stage.',
  },
  {
    q: 'Which curriculum and board does the school follow?',
    a: 'AMAPS follows the CBSE curriculum, enriched with an in-house STEAM and experiential-learning framework designed to make concepts tangible for every learner.',
  },
  {
    q: 'Is the school and campus transport safe for children?',
    a: 'Absolutely. Our entire fleet is GPS-tracked and staffed with trained attendants, and the campus is monitored, gated and staffed by certified safety and medical personnel.',
  },
  {
    q: 'Does the school focus on sports and co-curricular activities?',
    a: 'Yes. Sports and the arts sit at the core of our day. A 35-acre campus houses courts, fields, studios and labs so every child finds a passion beyond textbooks.',
  },
  {
    q: 'How do you keep class sizes personal?',
    a: 'We cap classroom strength and maintain a healthy student-teacher ratio so mentors know each child individually and can tailor support where it is needed.',
  },
]

export const INSTITUTIONS = [
  'AMAPS Senior Secondary',
  'Meenakshi Vidyalaya',
  'AMM Matriculation',
  'Green Valley Primary',
  'Saraswathi College',
  'Arunachalam Polytechnic',
]
