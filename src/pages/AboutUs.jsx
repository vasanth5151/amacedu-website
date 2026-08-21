import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../lib/motion'
import { Link } from 'react-router-dom'

import aboutBg from '../assets/facilities/faci9.jpg'
import drGokul from '../assets/aboutpage/manage1.webp'
import drBiruntha from '../assets/aboutpage/principal2.webp'
import school1 from '../assets/groupofscl_about/maptc.png'
import school2 from '../assets/groupofscl_about/maiti.png'
import school3 from '../assets/groupofscl_about/amace.png'
import school4 from '../assets/groupofscl_about/amahss.png'
import school5 from '../assets/groupofscl_about/mamhss.png'
import school6 from '../assets/groupofscl_about/mce.png'
import school7 from '../assets/groupofscl_about/maasc.png'
import school8 from '../assets/groupofscl_about/vani.png'
import school9 from '../assets/groupofscl_about/matti.png'
import school10 from '../assets/groupofscl_about/amacedu.png'
import school11 from '../assets/groupofscl_about/amaps.png'
import school12 from '../assets/groupofscl_about/mags.png'
import school13 from '../assets/groupofscl_about/kvvs.png'
import school14 from '../assets/groupofscl_about/anrcas.png'


 const trustInstitutions = [
    {
      year: '1983',
      name: 'Meenakshi Ammal Polytechnic College Uthiramerur - 603 406',
      logo: school1
    },
    {
      year: '1985',
      name: 'Meenakshi Ammal Industrial Training Institute (MAITI) Uthiramerur - 603 406',
      logo: school2
    },
    {
      year: '1983',
      name: 'Arulmigu Meenakshi Amman College of Engineering (AMACE) Vadamavandal, Near Kanchipuram - 604 410',
      logo: school3
    },
    {
      year: '1995',
      name: 'Arulmigu Meenakshi Amman Higher Secondary School (AMAHSS) Alapakkam Main Road, Chennai - 600 116',
      logo: school4
    },
    {
      year: '1998',
      name: 'Meenakshi Ammal Matriculation Higher Secondary School (MAMHSS)Uthiramerur - 603 406',
      logo: school5
    },
    {
      year: '2001',
      name: 'Meenakshi College of Engineering (MCE) Vembuliamman Koil Street, West K.K. Nagar, Chennai - 600 078',
      logo: school6
    },
    {
      year: '2001',
      name: 'Meenakshi Ammal Arts and Science College (MAASC) Uthiramerur - 603 406',
      logo: school7
    },
    {
      year: '2002',
      name: 'Vani Vidyalaya Senior Secondary & Junior College Vembuliamman Koil Street, West K.K. Nagar, Chennai - 600 078',
      logo: school8
    },
    {
      year: '2005',
      name: 'Meenakshi Ammal Teacher Training Institute (MATTI) Uthiramerur - 603 406',
      logo: school9
    },
    {
      year: '2006',
      name: 'Arulmigu Meenakshi Amman College of Education (AMACEDU) Uthiramerur - 603 406',
      logo: school10
    },
    {
      year: '2010',
      name: 'Arulmigu Meenakshi Amman Public School (AMAPS) Alapakkam Main Road, Chennai - 600 116',
      logo: school11
    },
    {
      year: '2010',
      name: 'Meenakshi Ammal Global School (MAGS) Uthiramerur - 603 406',
      logo: school12
    },
    {
      year: '2014',
      name: 'Kanchi Vani Vidyalaya Enathur Village, Kanchipuram - 631 561',
      logo: school13
    },
    {
      year: '2022',
      name: 'ANR College of Arts & Science Vadamavandal, Vembakkam Taluk, Tiruvannamalai - 604 410',
      logo: school14
    }
  ];


export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutBg} alt="About AMACEDU" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            About Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold tracking-wider uppercase text-white/80"
          >
            <Link to="/" className="text-white hover:text-brand-yellow transition-colors">Home</Link>
            <span className="text-white">&gt;</span>
            <span className="text-brand-yellow">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* 2. About AMACEDU College */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container-x max-w-6xl mx-auto">
          
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-ink mb-2">
              About AMACEDU College, Uthiramerur
            </motion.h2>
            <motion.div variants={fadeUp} className="w-24 h-1 bg-brand-green rounded-full"></motion.div>
          </motion.div>

          {/* Dr. Gokul Profile */}
          <motion.div 
            initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)}
            className="bg-[#E6F4EA] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center shadow-lg mb-16 border border-[#C6E5D0]"
          >
            <motion.div variants={fadeUp} className="w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img src={drGokul} alt="Dr. G. Ra. Gokul" className="w-full h-full object-cover object-top" />
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-ink mb-1">Dr. G. Ra. Gokul, <span className="text-lg md:text-xl text-ink/70 font-normal">M.B.B.S., M.D. (General Medicine)</span></h3>
              <p className="text-brand-greenDark font-bold text-lg mb-6 uppercase tracking-wider">Managing Trustee</p>
              
              <div className="space-y-4 text-ink-soft leading-relaxed text-sm md:text-base">
                <div className="border-l-4 border-[#A31E69] pl-4 text-ink font-medium">
                  <p>It gives me immense pride and pleasure to welcome you to Arulmigu Meenakshi Amman College of Education (AMACEDU), an institution devoted to shaping the future of teacher education in our country.</p>
                </div>
                <p>
                  At AMACEDU, we are committed to providing high-quality education that blends academic rigor with holistic development. As educators, you hold the power to transform society, and our mission is to equip you with the skills, knowledge, and values needed to inspire and lead.
                </p>
                <p>
                  Our focus extends beyond academic excellence to nurturing qualities such as integrity, empathy, and professionalism. Through a comprehensive curriculum, state-of-the-art infrastructure, and dedicated faculty, we ensure that every student is prepared to face the challenges of a dynamic and competitive world.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* College Paragraphs */}
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} className="text-center text-ink-soft leading-relaxed max-w-4xl mx-auto mb-20 text-sm md:text-base space-y-4">
            <p>
              We place a strong emphasis on community engagement, ethical practices, and lifelong learning. I encourage all students to fully utilize the opportunities and resources available here, and to strive not only to become outstanding educators but also exemplary citizens.
            </p>
            <p>
              I would like to express my sincere gratitude to our faculty and staff for their unwavering dedication, and to our students for their enthusiasm and commitment. Together, let us continue to achieve new heights of excellence and make a meaningful contribution to the field of education.
            </p>
          </motion.div>

          {/* Dr. Biruntha Profile */}
          <motion.div 
            initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)}
            className="bg-[#F3E8FF] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row-reverse gap-10 items-center shadow-lg mb-16 border border-[#E9D5FF]"
          >
            <motion.div variants={fadeUp} className="w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img src={drBiruntha} alt="Dr. D. Biruntha" className="w-full h-full object-cover object-top" />
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex-1 text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-ink mb-1">Dr. D. Biruntha, <span className="text-lg md:text-xl text-ink/70 font-normal">M.Com., M.Phil., Ph.D., M.Ed., M.Sc. (Psychology), M.A. (Sociology)</span></h3>
              <p className="text-[#8B5CF6] font-bold text-lg mb-6 uppercase tracking-wider">Principal</p>
              
              <div className="space-y-4 text-ink-soft leading-relaxed text-sm md:text-base">
                <p>
                  It is a great honor and privilege to serve as the Principal of Arulmigu Meenakshi Amman College of Education (AMACEDU), a premier institution dedicated to excellence in teacher education. At AMACEDU, we believe that education is the foundation of a progressive society and that teachers are the architects of the future. Our institution is committed to nurturing aspiring educators by providing a dynamic and supportive learning environment that fosters intellectual growth, professional skills, and ethical values.
                </p>
                <p>
                  Our mission is to prepare teachers who are not only academically competent but also compassionate, socially responsible, and visionary. The academic programs at AMACEDU are carefully designed to integrate theory with practice, ensuring that students are well-equipped to address the challenges of modern education.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* College Info Paragraphs */}
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp} className="text-center text-ink-soft leading-relaxed max-w-4xl mx-auto text-sm md:text-base space-y-4">
            <p>
              Through rigorous coursework, innovative teaching methodologies, and extensive field experiences, we aim to shape educators who can inspire, lead, and make a lasting impact. We encourage all students to actively participate in academic, cultural, and extracurricular activities, which are essential for developing a well-rounded personality and preparing for the multifaceted role of a teacher.
            </p>
            <p>
              I am deeply grateful to our dedicated faculty and staff, whose relentless efforts ensure that we maintain the highest standards of education. I also extend my heartfelt appreciation to our students, who bring energy, curiosity, and enthusiasm to our campus. Together, we strive to create a vibrant, inclusive, and inspiring learning community.
            </p>
            <p>
              Let us continue to uphold the values of integrity, respect, and lifelong learning as we work towards transforming education and contributing meaningfully to society.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. Meenakshi Ammal Trust */}
      <section className="py-16 md:py-20 bg-[#FAFAFA] relative border-t border-gray-100">
        <div className="container-x max-w-7xl mx-auto">
          
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="mb-10 text-center">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-ink uppercase tracking-wider">
              Meenakshi Ammal Trust
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.15)} className="space-y-6 text-ink-soft leading-relaxed text-center md:text-justify mb-20 text-sm md:text-base">
            <motion.p variants={fadeUp}>
              Ever since the dawn of independence, leaders in our country have been laying stress on the importance of imparting quality education in the country, as good education alone will help people to rise in the various walks of life. Education involves investment of huge amounts running to several crores of rupees. In addition to allocation of funds for education, the Government have to pay attention to poverty alleviation measures. The Government alone may not be able to develop education exclusively in the public sector. Hence the development of educational facilities have also been permitted to be undertaken by Public Charitable Trusts and private organizations also.
            </motion.p>
            <motion.p variants={fadeUp}>
              Against the above background Meenakshi Ammal Trust was formed in the year 1983 as a Public Charitable and Educational Trust with its Registered office in Uthiramerur 600 078. The following are the Hereditary Trustees of Meenakshi Ammal Trust: Late Smt.Meenakshi Ammal - Hereditary Trustee, Late Shri.A.N. Radhakrishnan, M.A., D.Com. - Hereditary Trustee, Mrs. Gomathy Ammal - Hereditary Trustee, Dr.G.Ra.Gokul - Hereditary Trustee and Managing Trustee. The Trust members do not have any political connections. They are not members of any political party. Further, they do not have any business dealing and they have no profit motive.
            </motion.p>
            <motion.p variants={fadeUp}>
              The Trust has been started with the sole object of establishing educational institutions. In fact the only aim is to spread knowledge and promote education in all fields, viz Polytechnic, Engineering and Technology, Architecture, Schools, College of Education, Teacher Training Institute etc. Ever since the establishment of the Trust, the members of the Trust have been functioning with missionary zeal and dedication striving every nerve to spread education to all section of people, without any discrimination of religion, caste, community, region etc.
            </motion.p>
            <motion.p variants={fadeUp}>
              The Trust has established several educational institutions, namely Engineering Colleges, Polytechnic College, Industrial Training Institute, College, Matriculation Higher Secondary School, CBSE Schools, College of Education and a Teacher Training Institute. All the above institutions have been established from 1983 – 84 and the list of the institutions and the year of establishment are given below:-
            </motion.p>
          </motion.div>

          {/* Institutions Grid Cards (Matching screenshot style) */}
          <motion.div 
            initial="hidden" whileInView="show" viewport={viewport} variants={stagger(0.1)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10"
          >
            {trustInstitutions.map((inst, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="bg-white p-4 md:p-5 border-2 border-dashed border-[#A31E69]/40 rounded-xl text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between min-h-[200px] group hover:-translate-y-1 hover:border-[#A31E69]"
              >
                <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 mb-3 flex items-center justify-center overflow-hidden rounded-full bg-[#F5E7F0] shadow-sm group-hover:scale-105 transition-transform">
                  <img
                    src={inst.logo}
                    alt={inst.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h4 className="text-sm sm:text-base font-bold text-[#A31E69] mb-1 font-parkinsans">
                    Since {inst.year}
                  </h4>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#2D1826]/90 leading-snug font-parkinsans">
                    {inst.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  )
}
