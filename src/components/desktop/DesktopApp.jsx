import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import DesktopHero from './DesktopHero';
import DesktopServices from './DesktopServices';
import DesktopRepairGuide from './DesktopRepairGuide';
import DesktopProjects from './DesktopProjects';
import DesktopAbout from './DesktopAbout';
import DesktopTestimonials from './DesktopTestimonials';
import DesktopFaq from './DesktopFaq';
import DesktopContact from './DesktopContact';
import DesktopFooter from './DesktopFooter';

export default function DesktopApp({
  onOpenServiceModal,
  onOpenCallModal,
  onOpenConsultation,
  onOpenAreaModal,
  selectedArea
}) {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] dark:bg-[#121312] font-sans text-neutral-950 dark:text-neutral-100 antialiased selection:bg-[#096899] dark:selection:bg-[#8bd4f6] dark:selection:text-[#121312] transition-colors duration-200">
      {/* 1. Minimal Top Header */}
      <DesktopNavbar
        onOpenConsultation={onOpenConsultation}
        onOpenCallModal={onOpenCallModal}
        onOpenAreaModal={onOpenAreaModal}
        selectedArea={selectedArea}
      />

      {/* 2. Editorial Hero Section: "Drywall done. Done right." */}
      <DesktopHero
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 3. 2-Column Services Grid: "From the first patch to the final finish." */}
      <DesktopServices
        onOpenServiceModal={onOpenServiceModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 4. Split Repair Guide: "What needs fixing?" */}
      <DesktopRepairGuide
        onOpenConsultation={onOpenConsultation}
        onOpenCallModal={onOpenCallModal}
      />

      {/* 5. 3-Column Project Gallery: "A closer look." */}
      <DesktopProjects
        onOpenConsultation={onOpenConsultation}
      />

      {/* 6. Editorial About Section: 20+ Years Craftsmanship */}
      <DesktopAbout
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 7. Client Reviews: Verified Testimonials */}
      <DesktopTestimonials
        onOpenConsultation={onOpenConsultation}
      />

      {/* 8. Clean FAQ Accordion: "Good to know." */}
      <DesktopFaq />

      {/* 9. Streamlined Contact CTA: "Let's talk drywall." */}
      <DesktopContact
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 10. Quiet Minimal Footer */}
      <DesktopFooter />
    </div>
  );
}
