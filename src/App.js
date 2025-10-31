import React, { useState } from 'react';
import { Menu, X, Play, Camera, Video, TrendingUp, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSection, setCurrentSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle external link click
  const handleWorkSectionClick = (section) => {
    if (section.externalLink) {
      window.open(section.externalLink, '_blank');
    } else if (section.videos || section.photos) {
      setCurrentSection(section);
    }
  };

  const brandLogos = [
    { name: 'WHITE TIGER FILMS', logo: '/white-tiger-films-logo.png' },
    { name: 'MTV', logo: '/MTV.png' },
    { name: 'ZOMATO', logo: '/ZOMATO.png' },
    { name: 'BLINKIT', logo: '/Blinkit.png' },
    { name: 'GUJJUBOY CLOTHING', logo: '/Gujjuboy Clothing.png' },
    { name: 'UNI SEOUL', logo: '/Uni Seoul.png' },
    { name: 'NEHA JEWELLERS', logo: '/Neha Jewellers.png' },
    { name: 'BMH GYM', logo: '/bmh.png' },
    { name: 'NAMAN ARORA', logo: '/Naman Arora.png' },
    { name: 'VISHAL PANDEY', logo: '/Vishal Pandey.png' },
    { name: 'ALEEN JARIYA', logo: '/Aleen Jariya.png' },
    { name: 'SPORTS COMPLEX', logo: '/Sports Complex.png' },
    { name: 'IT', logo: '/IT.png' },
    { name: 'JAIN DUDHGALAYA', logo: '/Jain Dudhgalaya.png' },
    { name: 'GHAR STORY', logo: '/Gahr Story.png' }
  ];

  const workSections = [
    {
      id: 'video',
      title: 'Long Format Video',
      icon: <Video className="w-8 h-8" />,
      description: 'Professional video production for documentaries, commercials, and brand stories. Click to view our dedicated long-form video reel.',
      projects: ['Corporate Events After Movie', 'Store/ Product Launch', 'Youtube Videos','Music Videos'], 
      bgPattern: '🎬',
      // The videos array is removed as requested.
      // ADD YOUR LINK HERE:
      externalLink: 'https://drive.google.com/drive/folders/148hJRrz5AjPWAcM7l7o-6OjGQxT-XNXO?usp=sharing' 
    },
    {
      id: 'reels',
      title: 'Reels',
      icon: <Play className="w-8 h-8" />,
      description: 'Engaging short-form content for social media platforms. Click to view our viral reels portfolio.',
      projects: ['Product Reveal', 'Viral Marketing/Engaging Reels', 'Behind the Scenes','Promotional Content'],
      bgPattern: '📱',
      // ADD YOUR LINK HERE:
      externalLink: 'https://drive.google.com/drive/folders/1NLbblmfpUGzZMLOjO61tLXpQnttjxvul?usp=sharing'
    },

    {
      id: 'photography',
      title: 'Shoots',
      icon: <Camera className="w-8 h-8" />,
      description: 'High-quality photography for brands, events, and products.',
      projects: ['Drone Shoots', 'Event Coverage', 'Influencer Brand Shoots','Calender Shoots'], 
      bgPattern: '📸',
      photos: [
        {
          category: 'Calender or Model shoots',
          description: 'Professional portrait and fashion shoots for calendars and model portfolios.',
          images: [
            { src: '/FMW.png', title: 'Portrait Shoot 1' },
            // { src: '/_DSC0308.jpg', title: 'Portrait Shoot 2' },
            // { src: '/_DSC1027.jpg', title: 'Model Look 1' },
            // { src: '/_DSC1132.jpg', title: 'Model Look 2' },
            // { src: '/_DSC1187.jpg', title: 'Model Look 3' },
            // { src: '/_DSC1342.jpg', title: 'Fashion Shot 1' },
            // { src: '/_DSC1377.jpg', title: 'Fashion Shot 2' },
            // { src: '/_DSC1400.jpg', title: 'Fashion Shot 3' },
            // { src: '/_DSC1541.jpg', title: 'Studio Portrait 1' },
            // { src: '/_DSC2050.jpg', title: 'Studio Portrait 2' },
            // { src: '/_DSC2152.jpg', title: 'Studio Portrait 3' },
            // { src: '/_DSC3013.jpg', title: 'Outdoor Look 1' },
            // { src: '/_DSC3032.jpg', title: 'Outdoor Look 2' },
            // { src: '/_DSC3057.jpg', title: 'Outdoor Look 3' },
            // { src: '/_DSC3155.jpg', title: 'Outdoor Look 4' },
            // { src: '/_DSC3223.jpg', title: 'Outdoor Look 5' },
            // { src: '/_DSC3370.jpg', title: 'Outdoor Look 6' },
          ]
        },
        {
          category: 'Event Coverage',
          description: 'Capturing memorable moments at corporate and social events.',
          images: [
            // { src: '/_DSC0176.jpg', title: 'Event Photo 1' },
            // { src: '/_DSC1629.jpg', title: 'Event Photo 2' },
            // { src: '/_DSC1700.jpg', title: 'Event Photo 3' },
            // { src: '/_DSC9751.jpg', title: 'Event Photo 4' },
            // { src: '/_DSC9775.jpg', title: 'Event Photo 5' },
            // { src: '/_DSC9830.jpg', title: 'Event Photo 6' },
            // { src: '/IMG_7402.jpg', title: 'Event Photo 7' },
            // { src: '/IMG_7527.jpg', title: 'Event Photo 8' },
            // { src: '/IMG_7771.jpg', title: 'Event Photo 9' },
            // { src: '/IMG_7861.jpg', title: 'Event Photo 10' },
            // { src: '/IMG_8150.jpg', title: 'Event Photo 11' }
          ]
        },
        {
          category: 'Product Photoshoot',
          description: 'Creative brand photography that tells your story.',
          images: [
            // { src: '/_DSC7941.jpg', title: 'Brand Photo 1' },
            // { src: '/_DSC8067.jpg', title: 'Brand Photo 2' },
            // { src: '/_DSC8222.jpg', title: 'Brand Photo 3' },
            // { src: '/_DSC8362.jpg', title: 'Brand Photo 4' },
          ]
        },
         {
          category: 'Drone Shoot',
          description: 'Professional Drone shots .',
          // MODIFIED: ADDED EXTERNAL LINK HERE
          externalLink: 'https://drive.google.com/drive/folders/1uxos0tjMykRlvDSWvHNMpIK-LFoJc9vF', // **<-- REPLACE WITH YOUR ACTUAL LINK**
          
        },
        {
          category: 'Baby PhotoShoot',
          description: 'Adorable and professional baby and family photography.',
          images: [
            // { src: '/DSC08882.jpg', title: 'Portrait 1' },
            // { src: '/DSC08888.jpg', title: 'Portrait 2' },
            // { src: '/DSC08890.jpg', title: 'Portrait 3' },
            // { src: '/DSC08903.jpg', title: 'Portrait 4' },
            // { src: '/DSC08904.jpg', title: 'Portrait 5' },
            // { src: '/DSC08907.jpg', title: 'Portrait 6' },
            // { src: '/DSC08907.jpg', title: 'Portrait 7' },
            // { src: '/IMG_5352.jpg', title: 'Portrait 8' },
            // { src: '/IMG_5382.jpg', title: 'Portrait 9' },
            // { src: '/IMG_5386.jpg', title: 'Portrait 10' },
            // { src: '/IMG_5388.jpg', title: 'Portrait 11' },
            // { src: '/IMG_5400.jpg', title: 'Portrait 12' },
            // { src: '/IMG_5433.jpg', title: 'Portrait 13' },
            // { src: '/IMG_5445.jpg', title: 'Portrait 14' },
            // { src: '/IMG_5450.jpg', title: 'Portrait 15' },
            // { src: '/IMG_5458.jpg', title: 'Portrait 16' },
            // { src: '/IMG_8047.jpg', title: 'Portrait 17' },
            // { src: '/IMG_8048.jpg', title: 'Portrait 18' },
            // { src: '/IMG_8050.jpg', title: 'Portrait 19' },
            // { src: '/IMG_8056.jpg', title: 'Portrait 20' },
            // { src: '/IMG_8157.jpg', title: 'Portrait 21' },
            // { src: '/IMG_8163.jpg', title: 'Portrait 22' }
          ]
        }
      ]
      
    },
    {
      id: 'social-media',
      title: 'Social Media Growth',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Strategic social media management and growth optimization.',
      projects: ['SEO MANAGEMENT', 'SOCIAL MEDIA CONTENT STRATEGY', 'META ADS','INFLUENCER CAMPAIGNS'],
      bgPattern: '📈',
      photos: [
        {
          category: 'Social Media Results',
          description: 'Our proven track record of successful social media campaigns and growth strategies.',
          images: [
            { src: '/one.jpeg', title: 'Growth Analytics 1' },
            { src: '/2.jpeg', title: 'Campaign Results 2' },
            { src: '/3.jpeg', title: 'Engagement Metrics 3' },
            { src: '/4.jpeg', title: 'Audience Growth 4' },
            { src: '/5.jpeg', title: 'Content Performance 5' },
            { src: '/6.jpeg', title: 'Brand Reach 6' },
            { src: '/7.jpeg', title: 'Conversion Stats 7' },
          ]
        }
      ]
    }
  ];
  const Navigation = () => (
    <nav className="bg-white/90 backdrop-blur-lg fixed w-full z-50 border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div 
              onClick={() => setCurrentPage('home')} 
              className="cursor-pointer transform transition-all duration-300 hover:scale-110"
            >
              <img 
                src={process.env.PUBLIC_URL + "/Logo_1_Rev_PNG - Copy.png"} 
                alt="UniCreations Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16"
                onError={(e) => {
                  console.error('Failed to load navigation logo');
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/64x64/22c55e/ffffff?text=UC`;
                }}
              />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['home', 'work', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-100 hover:to-blue-100'
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-lg"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {['home', 'work', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setIsMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="pt-16 relative z-10">
        <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src={process.env.PUBLIC_URL + "/Logo_1_Rev_PNG.png"} 
                    alt="UniCreations Logo" 
                    className="max-w-[80%] w-auto h-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[16rem] transition-all duration-500 ease-in-out transform hover:scale-105"
                    onError={(e) => {
                      console.error('Failed to load hero section logo');
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/400x100/22c55e/ffffff?text=UniCreations`;
                    }}
                  />
                </div>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4">
                  We bring your <span className="font-bold text-green-600">vision</span> to life through stunning 
                  <span className="font-bold text-blue-600"> visuals</span>, compelling videos, and strategic social media growth.
                </p>
                
                <button
                  onClick={() => setCurrentPage('work')}
                  className="group relative bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-white/70 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  About UniCreations
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    We are a <span className="font-semibold text-green-600">full-service creative agency</span> specializing in visual storytelling, content creation, and digital marketing.
                  </p>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    From <span className="font-semibold text-blue-600">long-format documentaries</span> to viral social media content, we handle every aspect with professionalism and innovation.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 max-w-md mx-auto lg:mx-0">
                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-all duration-300">
                      200+
                    </div>
                    <div className="text-gray-600 font-medium text-sm sm:text-base">Projects Completed</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-all duration-300">
                      50+
                    </div>
                    <div className="text-gray-600 font-medium text-sm sm:text-base">Happy Clients</div>
                  </div>
                </div>
              </div>
              
              <div className="relative mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-3xl p-8 sm:p-10 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 text-4xl sm:text-6xl">✨</div>
                    <div className="absolute top-8 right-8 text-3xl sm:text-4xl">🎨</div>
                    <div className="absolute bottom-8 left-8 text-4xl sm:text-5xl">🚀</div>
                    <div className="absolute bottom-4 right-4 text-2xl sm:text-3xl">💡</div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative z-10">Why Choose Us?</h3>
                  <ul className="text-white space-y-4 text-left relative z-10">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-4 animate-pulse flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Professional Quality</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-4 animate-pulse flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Creative Innovation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-4 animate-pulse flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Timely Delivery</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-4 animate-pulse flex-shrink-0"></div>
                      <span className="text-base sm:text-lg">Strategic Approach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const WorkPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16 relative overflow-hidden">
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-green-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              Our Creative Work
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Explore our diverse portfolio of creative projects across different mediums and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24">
            {workSections.map((section, index) => (
              <div 
                key={section.id} 
                className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden transform hover:scale-105 cursor-pointer"
                // MODIFIED: Use the custom handler
                onClick={() => handleWorkSectionClick(section)}
              >
                <div className="absolute top-4 right-4 text-4xl sm:text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {section.bgPattern}
                </div>
                
                <div className="flex items-start sm:items-center mb-6 flex-col sm:flex-row text-center sm:text-left">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-0 sm:mr-6 text-white transform group-hover:scale-110 transition-all duration-300 shadow-lg mx-auto sm:mx-0">
                    {section.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {section.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-center sm:text-left">{section.description}</p>
                
                {/* MODIFIED: Check for externalLink or photos to display the 'Tap to view' hint */}
                {(section.videos || section.photos || section.externalLink) && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-6 border border-green-100">
                    <p className="text-sm text-gray-600 text-center">
                      <span className="font-semibold text-green-600">Tap to view</span> our featured {section.title.toLowerCase()} projects
                      {section.externalLink && <span className='text-blue-500'> (External Link)</span>}
                    </p>
                  </div>
                )}
                
                <div className="space-y-3">
                  <h4 className="text-gray-900 font-bold text-base sm:text-lg text-center sm:text-left">Recent Projects:</h4>
                  {section.projects.map((project, idx) => (
                    <div key={idx} className="text-gray-600 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3 sm:mr-4 animate-pulse flex-shrink-0"></div>
                      <span className="hover:text-gray-900 transition-colors text-sm sm:text-base">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl p-12 text-center border border-gray-200 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 sm:mb-12 relative z-10">
              Trusted by Industry Leaders
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6 sm:gap-8 relative z-10">
              {brandLogos.map((brand, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 sm:p-6 flex items-center justify-center rounded-3xl transition-all duration-300 border border-gray-100 hover:border-gray-300 transform hover:scale-105 hover:shadow-lg group cursor-pointer aspect-square"
                >
                  <img 
                    src={process.env.PUBLIC_URL + brand.logo} 
                    alt={`${brand.name} Logo`} 
                    loading="lazy"
                    className="max-w-full max-h-full object-contain transition-transform duration-500"
                    style={{ backgroundColor: '#ffffff' }}
                    onError={(e) => {
                        console.error(`Failed to load logo for ${brand.name}`);
                        e.target.onerror = null; 
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        let textFallback = parent.querySelector('.logo-text-fallback');
                        if (!textFallback) {
                           textFallback = document.createElement('span');
                           textFallback.className = "text-xs font-bold text-gray-700 text-center logo-text-fallback p-1";
                           parent.appendChild(textFallback);
                        }
                        textFallback.textContent = brand.name;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PhotoSectionPage = ({ section, onBack }) => {
    const initialCategory = (section.photos && section.photos.length > 0) 
      ? section.photos.find(cat => cat.category === 'Calender or Model shoots') || section.photos[0]
      : null;

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedImage, setSelectedImage] = useState(null);

    if (!section.photos || section.photos.length === 0) {
        return (
            <div className="min-h-screen pt-16 flex items-center justify-center">
                <p className="text-xl text-gray-500">No photography content available for this section.</p>
            </div>
        );
    }
    
    const renderContent = () => {
      // MODIFIED: This check ensures that if the selected category is an external link (like Drone Shoot), 
      // no internal content is rendered, and it defaults to the "Select a category" message.
      if (!selectedCategory || selectedCategory.externalLink) {
        return <div className="text-center text-gray-500 mt-10">Select a category to view content.</div>;
      }
      
      if (selectedCategory.images) {
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {selectedCategory.images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gray-200"
              >
                <img
                  src={process.env.PUBLIC_URL + image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error('Image failed to load:', image.src);
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    
                    // Create text fallback
                    let textFallback = parent.querySelector('.image-text-fallback');
                    if (!textFallback) {
                      textFallback = document.createElement('div');
                      textFallback.className = 'image-text-fallback absolute inset-0 flex items-center justify-center text-center p-4 bg-gradient-to-br from-green-100 to-blue-100';
                      const textContainer = document.createElement('div');
                      textContainer.className = 'space-y-2';
                      
                      const textSpan = document.createElement('span');
                      textSpan.className = 'text-sm font-medium text-gray-600 block';
                      textSpan.textContent = image.title;
                      
                      const categorySpan = document.createElement('span');
                      categorySpan.className = 'text-xs text-gray-500 block';
                      categorySpan.textContent = selectedCategory.category;
                      
                      textContainer.appendChild(textSpan);
                      textContainer.appendChild(categorySpan);
                      textFallback.appendChild(textContainer);
                      parent.appendChild(textFallback);
                    }
                  }}
                  style={{ backgroundColor: '#f3f4f6' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm sm:text-base line-clamp-2">{image.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-12 h-12 text-white/30" />
                </div>
              </div>
            ))}
          </div>
        );
      } else if (selectedCategory.videos) {
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {selectedCategory.videos.map((video, index) => (
              <div 
                key={index}
                className="group bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl sm:rounded-3xl"
              >
                <div className="relative overflow-hidden">
                    <video 
                        className="w-full object-cover h-48 sm:h-56 lg:h-64 group-hover:scale-105 transition-transform duration-300"
                        controls
                        controlsList="nodownload"
                        preload="metadata"
                        playsInline
                    >
                        <source src={`${video.filename}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                        {video.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {video.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        );
      }

      return <div className="text-center text-gray-500 mt-10">No content available for this category.</div>;
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16 relative overflow-hidden">
        <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={onBack}
              className="mb-8 sm:mb-10 flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to All Work
            </button>

            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 sm:p-4 rounded-2xl sm:rounded-3xl mr-4 sm:mr-6 text-white shadow-2xl animate-pulse">
                  {section.icon}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {section.title}
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                {section.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12">
              {section.photos.map((photoCategory, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // This click handler redirects immediately for external links
                    if (photoCategory.externalLink) {
                      window.open(photoCategory.externalLink, '_blank');
                    } else {
                      setSelectedCategory(photoCategory);
                    }
                  }}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    // Check if it is the currently selected category AND not an external link
                    (selectedCategory && selectedCategory.category === photoCategory.category && !photoCategory.externalLink)
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg' // SELECTED STYLE
                      // Otherwise, use the default unselected style for all others, including external links (Drone Shoot)
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300' // DEFAULT STYLE
                  }`}
                >
                  {photoCategory.category}
                  {photoCategory.externalLink && (
                    <span className='ml-2 text-xs font-normal'>
                      {/* Added small external link icon for visual cue */}
                      <svg className="w-4 h-4 inline-block -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="text-center mb-8 sm:mb-12">
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                {selectedCategory ? selectedCategory.description : 'Select a category to see its description.'}
              </p>
            </div>

            {renderContent()}

            {selectedImage && selectedCategory && !selectedCategory.videos && (
              <div
                className="fixed inset-0 bg-black/90 z-50 flex flex-col"
                onClick={() => setSelectedImage(null)}
              >
                <div className="flex items-center justify-between p-4 bg-black/50">
                  <button
                    className="flex items-center text-white font-bold transition-colors px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(null);
                    }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <span>Back to Gallery</span> 
                  </button>
                  <button
                    className="text-white hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-white/10"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(null);
                    }}
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>

                <div className="flex-1 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                  <div className="max-w-5xl max-h-full relative">
                    <img
                      src={process.env.PUBLIC_URL + selectedImage.src}
                      alt={selectedImage.title}
                      loading="lazy"
                      className="w-full h-full object-contain max-h-[80vh]"
                      onError={(e) => {
                        console.error('Full size image failed to load:', selectedImage.src);
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        const container = e.target.parentElement;
                        
                        // Create text fallback
                        let textFallback = container.querySelector('.fullscreen-fallback');
                        if (!textFallback) {
                          textFallback = document.createElement('div');
                          textFallback.className = 'fullscreen-fallback w-full h-full min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-green-100/20 to-blue-100/20 rounded-lg border border-white/10';
                          const textContainer = document.createElement('div');
                          textContainer.className = 'text-center space-y-4 p-8';
                          
                          const title = document.createElement('h3');
                          title.className = 'text-2xl font-bold text-white';
                          title.textContent = selectedImage.title;
                          
                          const category = document.createElement('p');
                          category.className = 'text-lg text-white/80';
                          category.textContent = selectedCategory.category;
                          
                          textContainer.appendChild(title);
                          textContainer.appendChild(category);
                          textFallback.appendChild(textContainer);
                          container.appendChild(textFallback);
                        }
                      }}
                      style={{ backgroundColor: '#1a1a1a' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white font-bold text-lg sm:text-xl">{selectedImage.title}</h3>
                      <p className="text-white/80 text-sm mt-1">{selectedCategory.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center mt-12 sm:mt-16">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Need Professional Photography?</h3>
                  <p className="text-base sm:text-lg opacity-90 mb-6">Let's create stunning visuals for your brand.</p>
                  <button
                    onClick={() => {
                      setCurrentPage('contact');
                      setCurrentSection(null);
                    }}
                    className="bg-white text-green-600 px-6 sm:px-8 py-3 rounded-xl sm:rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // The VideoSectionPage is now unreachable because we removed the 'videos' array from 'video' and 'reels' sections.
  // It is left in for other hypothetical sections that might use a 'videos' array in the future.
  const VideoSectionPage = ({ section, onBack }) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="mb-8 sm:mb-10 flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to All Work
          </button>

          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 sm:p-4 rounded-2xl sm:rounded-3xl mr-4 sm:mr-6 text-white shadow-2xl animate-pulse">
                {section.icon}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {section.title}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              {section.description}
            </p>
          </div>
          
          {/* Fallback for when videos array is unexpectedly missing */}
          {!section.videos && (
            <div className="text-center bg-red-50 p-6 rounded-xl border border-red-200 text-red-700">
                Video content for this section is not available internally. Please use the external link feature.
            </div>
          )}

          {section.videos && (
            <div className={`grid gap-6 sm:gap-8 ${
              section.id === 'reels' 
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5' 
                : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
            }`}>
              {section.videos.map((video, index) => (
                <div 
                  key={index}
                  className={`group bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                    section.id === 'reels' 
                      ? 'rounded-3xl aspect-[9/16]' 
                      : 'rounded-2xl sm:rounded-3xl'
                  }`}
                >
                  <div className="relative overflow-hidden h-full">
                    <video 
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                        section.id === 'reels' 
                          ? 'h-full' 
                          : 'h-48 sm:h-56 lg:h-64'
                      }`}
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      poster={video.thumbnail ? `/${video.thumbnail}` : undefined}
                      preload="metadata"
                      playsInline
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <source src={`${video.filename}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {section.id === 'reels' && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
                          {video.title}
                        </h3>
                        <p className="text-white/80 text-xs line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    )}

                    {section.id !== 'reels' && (
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base line-clamp-2">
                          {video.description}
                        </p>
                        
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-gray-500">
                            Long Form
                          </span>
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          

          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Like what you see?</h3>
                <p className="text-base sm:text-lg opacity-90 mb-6">Let's create something amazing together for your brand.</p>
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    setCurrentSection(null);
                  }}
                  className="bg-white text-green-600 px-6 sm:px-8 py-3 rounded-xl sm:rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-green-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
              Get In Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              We'd love to hear from you. Reach out to discuss your next big project.
            </p>
          </div>

          <div className="max-w-xl mx-auto mt-12 sm:mt-16">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100 transition-all duration-500 hover:shadow-3xl">
              
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Contact Details</h2>
              
              <div className="space-y-8 pb-8 border-b border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <Mail className="w-8 h-8 text-green-500 mb-3" />
                  <p className="text-lg font-semibold text-gray-900">Email Us</p>
                  <a href="mailto:workwithunicreations@gmail.com" className="text-blue-600 hover:text-green-600 transition-colors text-base sm:text-lg break-all">
                    workwithunicreations@gmail.com
                  </a>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Phone className="w-8 h-8 text-green-500 mb-3" />
                  <p className="text-lg font-semibold text-gray-900">Call/WhatsApp</p>
                  <a href="tel:+918928738860" className="text-blue-600 hover:text-green-600 transition-colors text-base sm:text-lg">
                    +91 8928738860
                  </a>
                </div>

                <div className="flex flex-col items-center text-center">
                  <MapPin className="w-8 h-8 text-green-500 mb-3" />
                  <p className="text-lg font-semibold text-gray-900">Our Location</p>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Mumbai, India
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.instagram.com/uni.creations_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl group"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-6 transition-transform" />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61581071334807#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl group"
                  >
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-bounce" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/uni-creations/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BNHtvcES3Rvqsufw%2FUKvjqA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-sky-600 to-blue-700 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl group"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-125 transition-transform" />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      <Navigation />
      {currentSection && (currentSection.videos || currentSection.photos) ? (
        currentSection.photos ? (
          <PhotoSectionPage 
            section={currentSection} 
            onBack={() => setCurrentSection(null)} 
          />
        ) : (
          <VideoSectionPage 
            section={currentSection} 
            onBack={() => setCurrentSection(null)} 
          />
        )
      ) : (
        <>
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'work' && <WorkPage />}
          {currentPage === 'contact' && <ContactPage />}
        </>
      )}
    </div>
  );
}

export default App;