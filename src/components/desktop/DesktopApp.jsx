import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import DesktopHero from './DesktopHero';
import DesktopServices from './DesktopServices';
import DesktopAbout from './DesktopAbout';
import DesktopEstimator from './DesktopEstimator';
import DesktopProjects from './DesktopProjects';
import DesktopTestimonials from './DesktopTestimonials';
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
    <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
      {/* 1. Desktop Navbar */}
      <DesktopNavbar
        onOpenConsultation={onOpenConsultation}
        onOpenCallModal={onOpenCallModal}
        onOpenAreaModal={onOpenAreaModal}
        selectedArea={selectedArea}
      />

      {/* 2. Hero Section with Live Estimator Widget */}
      <DesktopHero
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 3. Services Catalog Grid */}
      <DesktopServices
        onOpenServiceModal={onOpenServiceModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 4. About Jessie Lisardo & Craftsmanship Story */}
      <DesktopAbout
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 5. Interactive Cost Estimator & Diagnostic Tool */}
      <DesktopEstimator
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 6. Completed Projects Portfolio Gallery */}
      <DesktopProjects
        onOpenConsultation={onOpenConsultation}
      />

      {/* 7. Verified Client Testimonials */}
      <DesktopTestimonials
        onOpenConsultation={onOpenConsultation}
      />

      {/* 8. Contact, Map & Free Estimate Form */}
      <DesktopContact
        onOpenCallModal={onOpenCallModal}
      />

      {/* 9. Comprehensive Desktop Footer */}
      <DesktopFooter
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />
    </div>
  );
}
