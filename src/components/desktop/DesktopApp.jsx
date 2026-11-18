import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import DesktopHero from './DesktopHero';
import DesktopServices from './DesktopServices';
import DesktopAbout from './DesktopAbout';
import DesktopCustomerService from './DesktopCustomerService';
import DesktopProjects from './DesktopProjects';
import DesktopTestimonials from './DesktopTestimonials';
import DesktopEstimator from './DesktopEstimator';
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
    <div className="w-full min-h-screen bg-[#f4f2ed] dark:bg-[#121312] font-sans text-[#151614] dark:text-[#f4f2ed] antialiased selection:bg-[#096899] dark:selection:bg-[#8bd4f6] dark:selection:text-[#121312] transition-colors duration-200">
      {/* 1. Desktop Navbar with Authentic Links & Motto */}
      <DesktopNavbar
        onOpenConsultation={onOpenConsultation}
        onOpenCallModal={onOpenCallModal}
        onOpenAreaModal={onOpenAreaModal}
        selectedArea={selectedArea}
      />

      {/* 2. Hero Section: "Full Service Drywall Contractor in Menifee, CA" */}
      <DesktopHero
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 3. Authentic Services Showcase: 8 Real Services from menifeedrywallconstruction.com */}
      <DesktopServices
        onOpenServiceModal={onOpenServiceModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 4. About Jessie Lisardo & Menifee Drywall Construction: "Over Two Decades of Drywall Excellence" */}
      <DesktopAbout
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 5. The Customer Service You Deserve: Authentic Value Proposition */}
      <DesktopCustomerService
        onOpenConsultation={onOpenConsultation}
        onOpenCallModal={onOpenCallModal}
      />

      {/* 6. Latest Projects Gallery: Official Photos from menifeedrywallconstruction.com */}
      <DesktopProjects
        onOpenConsultation={onOpenConsultation}
      />

      {/* 7. Verified Customer Testimonials: Real Reviews from Original Website */}
      <DesktopTestimonials
        onOpenConsultation={onOpenConsultation}
      />

      {/* 8. Interactive Repair Cost Estimator Tool */}
      <DesktopEstimator
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 9. Contact Us & Free Consultation Form */}
      <DesktopContact
        onOpenCallModal={onOpenCallModal}
      />

      {/* 10. Architectural Footer */}
      <DesktopFooter />
    </div>
  );
}
