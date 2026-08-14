import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiCheckCircle, FiFileText } from 'react-icons/fi'
import { fadeUp, stagger, viewport } from '../lib/motion'

import heroImg from '../assets/aboutpage/aca2.webp'

import curriculam1 from '../assets/facilities/faci9.jpg'
import curriculam2 from '../assets/facilities/faci8.jpg'
import curriculam3 from '../assets/facilities/curr3.jpg'
import curriculam4 from '../assets/facilities/curr4.jpg'
import curriculam5 from '../assets/facilities/curr5.jpg'
import curriculam6 from '../assets/facilities/curr6.jpg'
import curriculam7 from '../assets/facilities/curr7.jpg'
import curriculam8 from '../assets/facilities/curr8.jpg'
import curriculam9 from '../assets/facilities/curr9.jpg'
import curriculam10 from '../assets/facilities/curr10.jpg'
import curriculam11 from '../assets/facilities/curr11.jpg'

const GRID_COLORS = [
  'bg-brand-leaf/40 border-brand-green/20',
  'bg-brand-purpleLight border-brand-purple/20',
  'bg-blue-50 border-blue-200',
  'bg-amber-50 border-amber-200',
  'bg-pink-50 border-pink-200',
  'bg-cyan-50 border-cyan-200',
  'bg-emerald-50 border-emerald-200',
]

// Each category holds an ordered list of content `blocks` and its own
// `img`. Categories without real copy yet render a "coming soon" placeholder.
const CATEGORIES = [
  {
    slug: 'opportunities',
    title: 'Opportunities Provided by AMACEDU',
    img: curriculam1,
    intro: 'At Arulmigu Meenakshi Amman College of Education (AMACEDU) we are committed to fostering holistic development for our students and staff. Our institution provides opportunities in the following key areas:',
    blocks: [
      { type: 'checklist', heading: 'Development of Knowledge', items: [
        'Comprehensive curriculum aimed at enriching the theoretical and practical knowledge of students.',
        'Focused training on the latest advancements and research in education.',
      ]},
      { type: 'checklist', heading: 'Skills and Professional Abilities of Teachers', items: [
        'Regular workshops, seminars, and training programs to enhance teaching skills.',
        'Exposure to innovative pedagogical techniques and classroom management strategies.',
      ]},
      { type: 'checklist', heading: 'Staff and Student Development with a Future-Oriented Focus', items: [
        'Initiatives that prepare students and staff to adapt to future challenges in education.',
        'Emphasis on lifelong learning and continuous professional development.',
      ]},
      { type: 'checklist', heading: 'Creating Equal Opportunities', items: [
        'A commitment to inclusivity, ensuring access to education for students from all backgrounds.',
        'Scholarships and financial assistance for underprivileged and marginalized communities.',
      ]},
      { type: 'checklist', heading: 'Introducing Women Empowerment', items: [
        'Programs designed to empower women through education and leadership opportunities.',
        'Creating a supportive environment for women to excel academically and professionally.',
      ]},
      { type: 'checklist', heading: 'Leading Career Advancement', items: [
        'Career guidance and placement support for aspiring educators.',
        'Encouraging professional growth through advanced degree programs and certifications.',
      ]},
      { type: 'checklist', heading: 'Developing Critical Thinking Skills', items: [
        'Curriculum integrated with problem-solving and analytical tasks.',
        'Activities and discussions that promote independent thinking and creativity.',
      ]},
      { type: 'checklist', heading: 'Improving Self-Discipline', items: [
        'A structured and well-regulated academic environment fostering discipline and accountability.',
        'Encouragement for self-regulation and time management among students and staff.',
      ]},
      { type: 'checklist', heading: 'Enhancing Productivity', items: [
        'Providing state-of-the-art resources and facilities to support efficient learning and teaching.',
        'Motivating students and staff to achieve their maximum potential through goal-oriented practices.',
      ]},
    ],
  },
  {
    slug: 'focus-areas',
    title: 'Focus Areas of AMACEDU',
    img: curriculam2,
    intro: 'At Arulmigu Meenakshi Amman College of Education (AMACEDU), our educational philosophy revolves around the following focus areas to create a transformative impact on students and society:',
    blocks: [
      { type: 'grid', items: [
        { title: 'Value Education', desc: 'Instilling core values and ethical principles to build morally responsible educators.' },
        { title: 'Character Shaping', desc: 'Developing integrity, empathy, and resilience in students to mold their character for lifelong success.' },
        { title: 'Self-Development', desc: 'Encouraging students to discover their strengths and overcome weaknesses for personal growth.' },
        { title: 'Promoting Use of Technology', desc: 'Integrating cutting-edge technologies into teaching and learning to enhance educational effectiveness.' },
        { title: 'Value System Among Students', desc: 'Fostering respect, honesty, and accountability as essential components of a strong value system.' },
        { title: 'Quest for Excellence', desc: 'Motivating students and faculty to strive for academic and professional excellence.' },
        { title: 'Technology-Enhanced Learning', desc: 'Leveraging digital tools and platforms to deliver innovative and engaging learning experiences.' },
        { title: 'Learning Outcomes and Assessment', desc: 'Ensuring measurable learning outcomes through continuous evaluation and feedback.' },
        { title: 'Imparting Holistic Education', desc: 'Balancing academic knowledge with physical, emotional, and social development for all-rounded growth.' },
        { title: 'Research Capabilities', desc: 'Encouraging inquiry and research to foster critical thinking and innovation in education.' },
        { title: 'Humanity', desc: 'Cultivating compassion, understanding, and a sense of community among students.' },
        { title: 'Man Making', desc: 'Nurturing individuals to be responsible, capable, and impactful contributors to society.' },
        { title: 'Against Corruption', desc: 'Advocating for integrity and transparency as fundamental societal values.' },
        { title: 'Discipline', desc: 'Upholding a structured and respectful environment conducive to effective learning and growth.' },
      ]},
    ],
  },
  {
    slug: 'specialities',
    title: 'Specialities of AMACEDU',
    img: curriculam3,
    intro: 'Arulmigu Meenakshi Amman College of Education (AMACEDU) is renowned for its exceptional facilities, academic achievements, and holistic educational approach. The institution stands out for the following distinctive specialities:',
    blocks: [
      { type: 'checklist', items: [
        'Eligible & Expert Faculty',
        'Excellent Academic Record',
        'Alumni Association and Regular Alumni Meetings',
        'Well-Stocked Sophisticated Library',
        'Well-Equipped, Spacious Laboratories',
        'Full-Furnished Hostels for Boys & Girls',
        'Congenial Atmosphere & Hygienic Food at Hostels',
        'Comfortable Transport Facilities',
        'Activity-Oriented Approach',
        'Reputed Institution',
        'Placement Cell',
      ]},
    ],
  },
  {
    slug: 'med-careers',
    title: 'Career Opportunities for M.Ed. Graduates',
    img: curriculam4,
    intro: 'Graduates of the M.Ed. program are equipped with the skills and knowledge to pursue a variety of roles in education, research, and administration.',
    blocks: [
      { type: 'grid', items: [
        { title: 'Educational Leadership and Administration', desc: 'Positions such as principal, headmaster, or academic coordinator in schools and colleges; leadership roles in curriculum development and policy-making.' },
        { title: 'Higher Education Teaching', desc: 'Eligibility to teach in colleges and universities offering undergraduate education programs.' },
        { title: 'Educational Research', desc: 'Opportunities to contribute to educational advancements through research and publication in academic journals; roles in think tanks and research organizations.' },
        { title: 'Curriculum Developer', desc: 'Designing innovative curricula and learning materials for educational institutions.' },
        { title: 'Government and Policy Roles', desc: 'Contribution to national and regional educational policies and reforms.' },
        { title: 'Consultancy and Training', desc: 'Working as an education consultant or corporate trainer, developing training modules and workshops.' },
        { title: 'Further Studies', desc: 'Pursue advanced doctoral research (Ph.D.) in education for academic and research-oriented careers.' },
      ]},
      { type: 'paragraph', heading: 'Why Choose M.Ed. at AMACEDU?', text: 'AMACEDU’s M.Ed. program stands out due to its focus on holistic development, cutting-edge educational practices, and career readiness. The program equips students with the expertise to address contemporary challenges in education, fostering their growth as transformative leaders and educators.\n\nThis postgraduate course offers a robust platform for those passionate about making a meaningful impact in the field of education while advancing their academic and professional aspirations.' },
      { type: 'stats', heading: 'Sanctioned Seats for B.Ed. and M.Ed. Programs at AMACEDU', items: [
        { label: 'Bachelor of Education (B.Ed.) Programme', stats: [{ k: 'Number of Units', v: '2' }, { k: 'Annual Intake', v: '100 students' }] },
        { label: 'Master of Education (M.Ed.) Programme', stats: [{ k: 'Number of Units', v: '1' }, { k: 'Annual Intake', v: '50 students' }] },
      ]},
    ],
  },
  {
    slug: 'bed-eligibility',
    title: 'Eligibility for Admission to B.Ed. Programme',
    img: curriculam5,
    intro: 'To be eligible for admission to the B.Ed. program offered by government, government-aided, or self-financing colleges of education, candidates must meet the educational qualifications and other criteria prescribed in the B.Ed. Admission Guidelines issued by the Government of Tamil Nadu. These guidelines are subject to periodic updates and must be adhered to at the time of admission.',
    blocks: [
      { type: 'checklist', heading: 'Duration of the B.Ed. Programme', items: [
        'The B.Ed. program spans two academic years, comprising four semesters.',
        'Each semester includes 100 working days and a total of 36 hours per week, distributed across 5 or 6 working days.',
        'Examination and admission periods are excluded from these 100 working days.',
      ]},
      { type: 'paragraph', heading: 'Curriculum of the B.Ed. Programme', text: 'The B.Ed. curriculum is designed to provide a comprehensive and practical learning experience. It includes:' },
      { type: 'checklist', items: [
        'Fourteen Compulsory Theory Courses — covering the foundational aspects of education, pedagogy, and subject-specific methodologies.',
        'One Elective Course — candidates select one course from six elective options tailored to their interests and career goals.',
      ]},
      { type: 'checklist', heading: 'Engagement with the Field', items: [
        'School Internship — a hands-on teaching experience in schools to bridge theoretical learning with real-world application.',
        'Courses on Enhancing Professional Capacities (EPC) — training in communication, critical thinking, and professional development.',
        'Online Course — a module designed to expose candidates to digital education tools and resources.',
      ]},
      { type: 'checklist', heading: 'Medium of Instruction', items: [
        'Candidates admitted to the B.Ed. program must select their medium of instruction, which can be either English or Tamil, depending on the availability in the respective colleges.',
        'Initial Declaration — after admission, colleges must submit a list of enrolled candidates and their chosen medium of instruction to Tamil Nadu Teachers Education University.',
        'Change of Medium — if a candidate wishes to change their medium of instruction later, they must seek written permission from the University before the Nominal Roll is published.',
        'Documentation — the selected medium of instruction will be reflected in the Transfer Certificate issued at the end of the program.',
        'Separate Instruction — classroom teaching is conducted separately for students based on their medium of instruction, ensuring clarity and effective learning.',
      ]},
      { type: 'paragraph', heading: 'Conclusion', text: 'AMACEDU’s commitment to adhering to the standards set by Tamil Nadu Teachers Education University ensures a robust and structured learning environment for aspiring educators. The institution’s focus on practical exposure, flexibility in the medium of instruction, and a comprehensive curriculum equips students with the skills and knowledge needed to excel in their teaching careers.' },
    ],
  },
  {
    slug: 'med-eligibility',
    title: 'Eligibility for Admission to the M.Ed. Degree Programme',
    img: curriculam6,
    intro: 'The Master of Education (M.Ed.) program at AMACEDU is a postgraduate course designed to provide advanced knowledge, skills, and expertise in the field of education. The eligibility criteria for admission to this program are as follows:',
    blocks: [
      { type: 'paragraph', heading: 'Educational Qualification', text: 'Candidates seeking admission to the M.Ed. program must have successfully completed one of the following programs with a minimum of 50% aggregate marks (including both theory and practicum) or an equivalent grade:' },
      { type: 'checklist', items: [
        'B.Ed. (Bachelor of Education) — a foundational degree in education.',
        'B.A.B.Ed. (Bachelor of Arts + Bachelor of Education) — an integrated arts and education program.',
        'B.Sc.B.Ed. (Bachelor of Science + Bachelor of Education) — an integrated science and education program.',
        'B.El.Ed. (Bachelor of Elementary Education) — a degree focused on elementary education.',
      ]},
      { type: 'checklist', heading: 'Reservation and Relaxation of Marks', items: [
        'Reservation and relaxation of marks for candidates belonging to SC, ST, OBC, PWD, and other applicable categories will follow the rules of the Central Government or State Government, whichever is applicable.',
        'These provisions are aimed at promoting inclusivity and equal opportunities for all candidates.',
      ]},
      { type: 'checklist', heading: 'Admission Process', items: [
        'Marks in the Qualifying Examination — the percentage obtained in the eligible degree programs will play a significant role in the admission decision.',
        'Entrance Examination or Selection Process — depending on the policies of the State Government, Central Government, or University, candidates may be required to appear for an entrance examination.',
        'The performance in this entrance test, or any other selection process prescribed at the time of admission, will be considered along with academic records.',
      ]},
      { type: 'paragraph', heading: 'Conclusion', text: 'The eligibility criteria for the M.Ed. program at AMACEDU ensure that only candidates with a strong academic foundation and a commitment to education are admitted. By following a transparent and inclusive admission process, the institution aims to provide equal opportunities for all eligible candidates while maintaining high academic standards.' },
      { type: 'checklist', heading: 'Duration of the M.Ed. Degree Programme', items: [
        'The program follows the Choice Based Credit System (CBCS) and is structured as a two-year academic program, divided into four semesters with a total of 90 credits.',
        'Students are required to complete the program requirements, including passing all theory and practical examinations, within a maximum period of three years from the date of admission.',
        'Each semester consists of 100 working days, which include classroom transactions, practicum activities, field studies, and examinations.',
      ]},
      { type: 'paragraph', heading: 'Content of the M.Ed. Degree Programme', text: 'The curriculum for the two-year M.Ed. program is designed to provide a holistic learning experience through five inter-related curricular areas, ensuring students gain theoretical knowledge, practical expertise, and research skills essential for advanced teacher education:' },
      { type: 'grid', items: [
        { title: 'Perspective Courses', desc: 'Understanding the philosophical, sociological, and psychological foundations of education, providing a broad-based perspective on education as a discipline.' },
        { title: 'Tool Courses', desc: 'Enhancing research and professional skills through training in research methodologies, statistical analysis, and academic writing.' },
        { title: 'Teacher Education Courses', desc: 'Principles and practices of teacher training, covering curriculum development, instructional strategies, and evaluation techniques.' },
        { title: 'Specialization of Core Courses', desc: 'Students choose a core area of specialization aligned with their academic interests, such as curriculum studies or educational leadership.' },
        { title: 'Specialization of Thematic Courses', desc: 'Focus on specific themes or issues in education, such as technology in education, environmental education, or gender studies.' },
      ]},
      { type: 'checklist', heading: 'Additionally, the Programme Includes', items: [
        'Two Online Courses — designed to expose students to digital learning tools and resources.',
        'Field-Based Units of Study — practical exposure through field visits and community-based projects.',
        'Dissertation — a significant research component involving selecting a topic, conducting research, and presenting findings.',
        'Practicum Work — hands-on training tailored to the requirements of prospective teacher educators.',
      ]},
      { type: 'checklist', heading: 'Medium of Instruction', items: [
        'The medium of instruction and examination for the M.Ed. program is available in both Tamil and English, depending on the options offered by the respective colleges or university departments.',
        'Students can select their preferred medium at the time of admission.',
        'The medium of instruction applies to classroom teaching, assignments, and examinations.',
        'This flexibility ensures accessibility for a diverse group of students, catering to their linguistic preferences and regional needs.',
      ]},
    ],
  },
  {
    slug: 'why-choose',
    title: 'Why Choose AMACEDU?',
    img: curriculam7,
    blocks: [
      { type: 'checklist', items: [
        'High-Quality Education — accredited institution with experienced faculty and a strong focus on practical learning.',
        'Comprehensive Curriculum — programs designed to equip students with both theoretical knowledge and real-world teaching experience.',
        'State-of-the-Art Facilities — fully equipped libraries, laboratories, and sports facilities.',
        'Affordable Fee Structure — transparent and inclusive fee, covering all essential academic and extracurricular needs.',
      ]},
    ],
  },
  {
    slug: 'important-info',
    title: 'Important Information',
    img: curriculam8,
    intro: 'Admissions are open on a first-come, first-served basis, subject to the availability of seats. Candidates are encouraged to apply early to secure their spot in the program of their choice. For more details, contact the admissions office or visit the official AMACEDU website.',
    blocks: [
      { type: 'paragraph', heading: 'Co-Curricular and Extra-Curricular Activities at AMACEDU', text: 'At Arulmigu Meenakshi Amman College of Education (AMACEDU), we believe in the holistic development of students, fostering their intellectual, emotional, physical, and social well-being through a variety of co-curricular and extra-curricular activities. These programs are designed to complement academic learning and instill important values, skills, and experiences that extend beyond the classroom.' },
      { type: 'grid', items: [
        { title: 'Yoga Camps', desc: 'Regular yoga camps are organized to promote physical fitness, mental well-being, and stress management among students.' },
        { title: 'Youth Red Cross (YRC)', desc: 'Students participate in YRC activities that emphasize humanitarian services, health awareness, and emergency preparedness.' },
        { title: 'Educational Tours', desc: 'Organized visits to historical, cultural, and educational sites provide real-world learning experiences and exposure to diverse environments.' },
        { title: 'Science Exhibitions and Field Trips', desc: 'Exhibitions encourage creativity and innovation, while field trips provide practical exposure to science, history, and environmental studies.' },
        { title: 'Literary Activities and Debates', desc: 'Essay writing, poetry competitions, and debates foster communication skills, critical thinking, and a love for literature.' },
        { title: 'Club Activities', desc: 'Various student-led clubs provide a platform for exploring interests in arts, culture, technology, and environment.' },
        { title: 'Seminars and Workshops', desc: 'Regular seminars and workshops on contemporary topics, teaching methodologies, and skill development.' },
        { title: 'Music and Arts', desc: 'Music and art sessions encourage creativity and cultural appreciation, allowing students to express themselves artistically.' },
      ]},
    ],
  },
  { slug: 'association-structure', title: 'Structure of the College Association' },
  {
    slug: 'club-functioning',
    title: 'Club Functioning at AMACEDU',
    img: curriculam9,
    intro: 'At Arulmigu Meenakshi Amman College of Education (AMACEDU), a variety of clubs are established to promote holistic development and provide platforms for students to explore and nurture their talents and interests. Each club is designed to cater to specific areas of creativity, skill-building, and pedagogy, encouraging active student engagement beyond academics.',
    blocks: [
      { type: 'grid', heading: 'Clubs at AMACEDU', items: [
        { title: 'Nature Club', desc: 'Creates awareness about environmental conservation and sustainability through plantation drives, eco-awareness campaigns, waste management workshops, and nature study trips.' },
        { title: 'Electronic Club', desc: 'Fosters interest and skills in modern technology and electronic teaching aids through hands-on workshops on ICT tools and audiovisual teaching aids.' },
        { title: 'Pedagogy Clubs', desc: 'Improves teaching methodologies and subject-specific pedagogy through peer teaching sessions and development of teaching-learning materials (TLM).' },
        { title: 'Fine Arts Club', desc: 'A platform for students to showcase and enhance their artistic talents in music, dance, painting, and craft through cultural events and exhibitions.' },
        { title: 'Literary Club', desc: 'Encourages a love for literature and enhances communication and critical thinking skills through debates, essay writing, and creative writing.' },
      ]},
      { type: 'checklist', heading: 'Student Participation', items: [
        'All students are encouraged to take active participation in at least one club, fostering collaboration, leadership, and community spirit.',
        'Students develop their skills and interests while engaging in constructive extracurricular activities.',
        'Club participation builds teamwork and leadership qualities, enhancing overall personality and professional outlook.',
      ]},
      { type: 'paragraph', heading: 'Impact of Club Activities', text: 'The effective functioning of these clubs contributes to the comprehensive development of students by integrating co-curricular learning with real-world applications. Through active participation, students become well-rounded educators equipped with diverse skills and a broad perspective on teaching and learning.\n\nThe club culture at AMACEDU fosters creativity, innovation, and a sense of community, aligning with the institution’s commitment to producing educators who can inspire and lead in various capacities.' },
    ],
  },
  {
    slug: 'courses-offered',
    title: 'Courses Offered',
    img: curriculam10,
    intro: 'In addition to its rigorous academic programs, Arulmigu Meenakshi Amman College of Education (AMACEDU) offers a variety of Add-On Courses aimed at enhancing the professional, personal, and interpersonal skills of its students. These courses are designed to complement the core curriculum and prepare students to excel in their teaching careers and beyond.',
    blocks: [
      { type: 'grid', items: [
        { title: 'Parental Counseling', desc: 'Equips students with the skills to guide and counsel parents effectively, bridging communication gaps between schools and families.' },
        { title: 'Life Skills', desc: 'Teaches decision-making, problem-solving, and emotional intelligence, helping students build resilience and manage stress.' },
        { title: 'Soft Skills', desc: 'Develops teamwork, adaptability, time management, and leadership for diverse classroom environments.' },
        { title: 'Communicative Skills', desc: 'Focuses on enhancing verbal and non-verbal communication abilities essential for effective teaching.' },
        { title: 'Aptitude and Attitude', desc: 'Sharpens analytical thinking, logical reasoning, and positive outlooks for competitive exams and professional challenges.' },
        { title: 'Personality Development', desc: 'Enhances self-awareness, confidence, and personal grooming for professional success.' },
        { title: 'School Management', desc: 'Provides insights into managing academic institutions, including administrative functions and resource allocation.' },
      ]},
      { type: 'checklist', heading: 'Benefits of Add-On Courses', items: [
        'Holistic Development — ensures students are well-rounded individuals ready to face the challenges of modern education.',
        'Career Readiness — the practical skills gained make students more employable and competitive in the job market.',
        'Enhanced Classroom Effectiveness — teachers equipped with counseling, management, and communication skills create more inclusive learning environments.',
        'Leadership Opportunities — training in school management and soft skills prepares students for administrative and leadership roles.',
      ]},
    ],
  },
  {
    slug: 'committees',
    title: 'List of Committees at AMACEDU',
    img: curriculam11,
    intro: 'To ensure smooth functioning, transparency, and the holistic development of the institution, Arulmigu Meenakshi Amman College of Education (AMACEDU) has established the following committees. These committees focus on addressing various aspects of academic, administrative, and student-related activities:',
    blocks: [
      { type: 'names', items: [
        { name: 'Students’ Grievance Cell Committee (SGCC)' },
        { name: 'Anti-Ragging Committee (ARC)', desc: 'Monitors and prevents any incidents of ragging on the campus, creates awareness among students about its adverse effects, and promotes harmonious interactions.' },
        { name: 'Admission Committee (AC)' },
        { name: 'Disciplinary Committee (DC)' },
        { name: 'Library Committee (LC)' },
        { name: 'Remedial & Tutorial Care Committee (RTCC)' },
        { name: 'Sexual Harassment Committee (SHC)' },
        { name: 'Equal Opportunity Committee (EOC)' },
        { name: 'College Magazine/Newsletter Committee (CMNLC)' },
        { name: 'Games & Sports Committee (GSC)' },
        { name: 'Placement Cell Committee (PCC)' },
        { name: 'Programme & Publication Committee (PPC)' },
        { name: 'Alumni Association Committee (AAC)' },
        { name: 'Purchase Committee (PC)' },
        { name: 'Library Purchase Committee (LPC)' },
      ]},
    ],
  },
]

function Block({ block }) {
  if (block.type === 'checklist') {
    return (
      <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
        {block.heading && <h4 className="font-bold text-ink text-lg md:text-xl mb-4">{block.heading}</h4>}
        <div className="space-y-3">
          {block.items.map((item, i) => {
            const isObj = typeof item === 'object'
            return (
              <div key={i} className="flex items-start gap-3">
                <FiCheckCircle className="text-brand-greenDark shrink-0 mt-0.5" size={18} />
                <p className="text-ink-soft text-sm md:text-base leading-relaxed">
                  {isObj ? <><span className="font-semibold text-ink">{item.title}</span> — {item.desc}</> : item}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (block.type === 'grid') {
    return (
      <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
        {block.heading && <h4 className="font-bold text-ink text-lg md:text-xl mb-5">{block.heading}</h4>}
        <div className="grid sm:grid-cols-2 gap-4">
          {block.items.map((item, i) => (
            <div key={i} className={`rounded-xl p-5 border ${GRID_COLORS[i % GRID_COLORS.length]}`}>
              <h5 className="font-bold text-ink text-sm mb-1.5">{item.title}</h5>
              <p className="text-ink-soft text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (block.type === 'paragraph') {
    return (
      <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
        {block.heading && <h4 className="font-bold text-ink text-lg md:text-xl mb-4">{block.heading}</h4>}
        <div className="space-y-3">
          {block.text.split('\n\n').map((para, i) => (
            <p key={i} className="text-ink-soft text-sm md:text-base leading-relaxed">{para}</p>
          ))}
        </div>
      </div>
    )
  }

  if (block.type === 'stats') {
    return (
      <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
        {block.heading && <h4 className="font-bold text-ink text-lg md:text-xl mb-5">{block.heading}</h4>}
        <div className="grid sm:grid-cols-2 gap-4">
          {block.items.map((item, i) => (
            <div key={i} className="rounded-xl p-5 bg-brand-purple text-white">
              <h5 className="font-bold text-sm mb-3">{item.label}</h5>
              <div className="space-y-1">
                {item.stats.map((s, j) => (
                  <p key={j} className="text-xs text-white/85">
                    <span className="font-semibold text-white">{s.k}:</span> {s.v}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (block.type === 'names') {
    return (
      <div className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
        {block.heading && <h4 className="font-bold text-ink text-lg md:text-xl mb-4">{block.heading}</h4>}
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
          {block.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <FiCheckCircle className="text-brand-greenDark shrink-0 mt-0.5" size={18} />
              <p className="text-ink-soft text-sm leading-relaxed">
                <span className="font-semibold text-ink">{item.name}</span>
                {item.desc && <> — {item.desc}</>}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export default function Curriculum() {
  const [activeSlug, setActiveSlug] = useState(CATEGORIES[0].slug)
  const active = CATEGORIES.find((c) => c.slug === activeSlug)

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Curriculum at AMACEDU" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-6xl font-display font-bold mb-4 text-white"
          >
            Curriculum
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold tracking-wider uppercase text-white/80"
          >
            <Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link>
            <FiChevronRight size={14} />
            <span className="text-brand-yellow">Curriculum</span>
          </motion.div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="text-center max-w-3xl mx-auto mb-14">
            <motion.span variants={fadeUp} className="text-brand-greenDark font-bold tracking-wider uppercase text-sm mb-2 block">
              AMACEDU College, Uthiramerur
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink">
              Curriculum — Courses at AMACEDU
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-12 items-start">

            {/* Main Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {active.blocks ? (
                  <>
                    <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white mb-8 h-64 md:h-80">
                      <img src={active.img} alt={active.title} className="w-full h-full object-cover" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-display font-bold text-ink mb-4">{active.title}</h3>
                    {active.intro && (
                      <p className="text-ink-soft leading-relaxed text-sm md:text-base mb-10">{active.intro}</p>
                    )}

                    <div className="space-y-8">
                      {active.blocks.map((block, i) => (
                        <Block key={i} block={block} />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-24 border-2 border-dashed border-gray-200 rounded-3xl">
                    <FiFileText className="text-ink-muted mb-4" size={40} />
                    <h3 className="text-xl font-display font-bold text-ink mb-2">{active.title}</h3>
                    <p className="text-ink-soft text-sm max-w-sm">Content for this section is coming soon.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-28 bg-[#FAFAFA] rounded-2xl border border-gray-100 p-3">
              <h4 className="font-bold text-ink uppercase text-xs tracking-wider px-4 pt-3 pb-2">Categories</h4>
              <nav className="flex flex-col">
                {CATEGORIES.map((cat) => {
                  const isActive = cat.slug === activeSlug
                  return (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveSlug(cat.slug)}
                      className={`group flex items-center justify-between gap-3 text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                        isActive ? 'bg-brand-purple text-white' : 'text-ink-soft hover:bg-white hover:text-ink'
                      }`}
                    >
                      <span>{cat.title}</span>
                      <FiChevronRight
                        size={16}
                        className={`shrink-0 transition-transform ${isActive ? 'translate-x-0.5' : 'opacity-0 group-hover:opacity-60'}`}
                      />
                    </button>
                  )
                })}
              </nav>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
