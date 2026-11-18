import React from 'react';
import { SERVICES } from '../../data/drywallData';
import { ASSETS } from '../../utils/assets';

export default function DesktopServices({ onOpenServiceModal, onOpenConsultation }) {
  // All 8 authentic services directly from menifeedrywallconstruction.com/services/
  const authenticServices = [
    {
      id: 'drywall-installation',
      title: 'Drywall Installation',
      summary: 'Offering two decades of experience in drywall installation, here at Menifee Drywall Construction we can confidently say we are the perfect professionals for the job. Save yourself the trouble and call Menifee Drywall Construction today to make sure you get the drywall installation you need done right.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3383.jpg',
      tag: 'RESIDENTIAL & COMMERCIAL'
    },
    {
      id: 'drywall-repair',
      title: 'Drywall Repair',
      summary: 'When it comes to repairing drywall, once there is a giant hole in your drywall, you can’t seem to think of anything else. Let us help you out. At Menifee Drywall Construction we make it our main focus to restore peace of mind to your home by restoring your damaged drywall to better than new.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3394.jpg',
      tag: 'HOLES & CRACKS'
    },
    {
      id: 'water-damage',
      title: 'Water Damage',
      summary: 'Water damage happens. When it does happen, the tragic truth is that if it gets excessive some portions of your drywall must be removed and replaced to secure a sound structure and avoid mold growth. When it comes to water stains, we can clean it up with a fresh paint. We know how to fix it and are ready to help.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/MVIMG_20181016_135043.jpg',
      tag: 'LEAKS & RESTORATION'
    },
    {
      id: 'texture-matching',
      title: 'Texture Matching',
      summary: 'Did you just move into a new home and realize that parts of your wall don’t match? Maybe you patched up an area a while back and have been ignoring the bald spot surrounded by textured walls. Whatever the reason, no need to worry. We are fully equipped, experienced and ready to come in and restore your walls with new life, making sure that all of the texture matches throughout your home where it is needed.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3384.jpg',
      tag: 'SEAMLESS BLENDING'
    },
    {
      id: 'popcorn-removal',
      title: 'Acoustic / Popcorn Removal',
      summary: 'Acoustic ceiling or drywall, sometimes known as “Popcorn” ceiling or drywall, has an outdated look and low resale value. But not just that, it can also attract and hang onto dust particles and create an all-over dirty atmosphere. We are the specialists that you need for the job. Reach out today to learn more about what that process looks like.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3382.jpg',
      tag: 'CEILING UPGRADE'
    },
    {
      id: 'smooth-wall',
      title: 'Smooth Wall Finish',
      summary: 'Do your textured walls give you an unfinished feel? Are you simply ready for some change in your home? Not a problem! At Menifee Drywall Construction we get that no questions asked. We are ready to offer smooth wall finish assistance whenever you are ready and needing it. We will come in and smooth out the problem with ease. Give us a call today.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/cache/2018/10/IMG_3382/3002124147.jpg',
      tag: 'CLEAN MODERN WALLS'
    },
    {
      id: 'custom-texture',
      title: 'Custom Texture',
      summary: 'Who says that your drywall can’t come custom? Not us. We believe that your home building or remodeling needs should be about you. That is why we offer custom textures for your drywall. Get the fresh look you want in your walls with the custom textures we have to offer. Give us a call today to find out more.',
      image: ASSETS.heroBanner,
      tag: 'PERSONALIZED TEXTURES'
    },
    {
      id: 'demolition',
      title: 'Demolition Services',
      summary: 'Don’t hire just anyone for demolition services. Hire someone that is confident and experienced in what they are doing with the task at hand. At Menifee Drywall Construction we step beyond our name. That’s right! It’s not all about drywall installation and repair, we offer demolition services too. When you need something torn down and cleared out for remodeling jobs, we are the ones to call.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3380.jpg',
      tag: 'REMODELING & TEAR-OUTS'
    }
  ];

  return (
    <section className="shell py-16 lg:py-24 border-b border-[#cccac3] dark:border-[#2b2d2a]" id="services" aria-labelledby="services-title">
      {/* 1. Section Header with Authentic Copy */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div>
          <p className="eyebrow text-[#4b4c46] dark:text-[#a0a29c]">
            <span className="dot"></span> SERVICES &bull; MENIFEE DRYWALL CONSTRUCTION
          </p>
          <h2 id="services-title" className="editorial-h2 text-[#151614] dark:text-[#f4f2ed] mt-4">
            Riverside County’s Premier<br />
            Drywall Contractor<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span>
          </h2>
          <p className="font-mono text-sm text-[#096899] dark:text-[#8bd4f6] font-semibold mt-2 uppercase tracking-wider">
            No matter where you’re located, we have your back
          </p>
        </div>
        <p className="text-[16px] text-[#4b4c46] dark:text-[#a0a29c] leading-[1.5] max-w-md">
          Our team at Menifee Drywall Construction specializes in professional drywall installation, repair, custom texture, popcorn removal, water damage restoration, smooth wall finish, and demolition services.
        </p>
      </div>

      {/* 2. Authentic Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {authenticServices.map((service) => (
          <article 
            key={service.id} 
            className="group cursor-pointer bg-white dark:bg-[#1a1b18] border border-[#cccac3] dark:border-[#2b2d2a] p-6 shadow-xs hover:border-[#151614] dark:hover:border-white transition-all flex flex-col justify-between"
            onClick={() => {
              const fullService = SERVICES.find(s => s.id === service.id) || SERVICES[0];
              onOpenServiceModal(fullService);
            }}
          >
            <div>
              {/* Image Container with hover zoom */}
              <div className="relative w-full h-[240px] lg:h-[280px] overflow-hidden bg-[#d3c9b8] dark:bg-[#121312] border border-[#cccac3] dark:border-[#2b2d2a] mb-5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#f4f2ed]/95 dark:bg-[#121312]/95 border border-[#cccac3] dark:border-[#2b2d2a] px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider text-[#151614] dark:text-[#f4f2ed]">
                  {service.tag}
                </span>
              </div>

              {/* Service Copy directly from the original website */}
              <h3 className="editorial-h3 text-[#151614] dark:text-[#f4f2ed] group-hover:text-[#096899] dark:group-hover:text-[#8bd4f6] transition-colors flex items-center justify-between">
                <span>{service.title}</span>
                <span aria-hidden="true" className="text-xl font-normal opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </h3>
              <p className="text-[14px] text-[#4b4c46] dark:text-[#a0a29c] leading-relaxed mt-2.5">
                {service.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#e2e0d8] dark:border-[#2b2d2a] mt-5 flex items-center justify-between font-mono text-[11px] text-[#096899] dark:text-[#8bd4f6]">
              <span>LEARN MORE &bull; FREE CONSULTATION</span>
              <span>&rarr;</span>
            </div>
          </article>
        ))}
      </div>

      {/* 3. Bottom Service Action Footer */}
      <div className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-6 font-mono text-[12px] text-[#4b4c46] dark:text-[#a0a29c]">
        <div className="flex items-center gap-6">
          <span>&bull; HOME REMODELING &bull; ROOM ADDITIONS &bull; GARAGE CONVERSIONS &bull; RESTORATION &bull; FLOOD DAMAGE</span>
        </div>
        <button
          onClick={onOpenConsultation}
          className="ref-link text-[#151614] dark:text-[#f4f2ed] hover:text-[#096899] dark:hover:text-[#8bd4f6] cursor-pointer"
        >
          <span>Schedule a free consultation today</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  );
}
