import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import DesktopHero from './DesktopHero';
import DesktopServices from './DesktopServices';
import DesktopRepairGuide from './DesktopRepairGuide';
import DesktopProjects from './DesktopProjects';
import DesktopAbout from './DesktopAbout';
import DesktopEstimator from './DesktopEstimator';
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
    <div className="w-full min-h-screen bg-[#f4f2ed] font-sans text-[#151614] antialiased selection:bg-[#096899] selection:text-white">
      {/* 1. Desktop Navbar with Monospace Ticker & Minimal Header */}
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

      {/* 3. Flagship Services Showcase: "From the first patch to the final finish." */}
      <DesktopServices
        onOpenServiceModal={onOpenServiceModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 4. Interactive Repair Guide: "What needs fixing?" */}
      <DesktopRepairGuide
        onOpenConsultation={onOpenConsultation}
        onOpenCallModal={onOpenCallModal}
      />

      {/* 5. Dark Graphite Project Gallery: "A closer look." with Lightbox */}
      <DesktopProjects
        onOpenConsultation={onOpenConsultation}
      />

      {/* 6. Craftsman Story: "Local with 20+ years." */}
      <DesktopAbout
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 7. Interactive Repair Cost Estimator Tool */}
      <DesktopEstimator
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 8. Verified Homeowner Testimonials */}
      <DesktopTestimonials
        onOpenConsultation={onOpenConsultation}
      />

      {/* 9. Common Questions Accordion: "Good to know." */}
      <DesktopFaq />

      {/* 10. High-Impact Contact & Estimate Form: "Let's talk drywall." */}
      <DesktopContact
        onOpenCallModal={onOpenCallModal}
      />

      {/* 11. Architectural Footer */}
      <DesktopFooter />
    </div>
  );
}
