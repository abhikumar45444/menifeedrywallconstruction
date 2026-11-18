import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import EstimatorScreen from './screens/EstimatorScreen';
import ReviewsScreen from './screens/ReviewsScreen';
import ServiceModal from './components/ServiceModal';
import CallModal from './components/CallModal';
import ConsultationDrawer from './components/ConsultationDrawer';
import EstimateDrawer from './components/EstimateDrawer';
import AreaModal from './components/AreaModal';
import DesktopApp from './components/desktop/DesktopApp';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isEstimateDrawerOpen, setIsEstimateDrawerOpen] = useState(false);
  const [estimatePresetService, setEstimatePresetService] = useState('Drywall Repair');
  const [showAreaModal, setShowAreaModal] = useState(false);
  const [selectedArea, setSelectedArea] = useState('Riverside County (Menifee & Murrieta)');

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
  };

  const handleOpenEstimate = (preset = 'Drywall Repair') => {
    setEstimatePresetService(typeof preset === 'string' ? preset : 'Drywall Repair');
    setIsEstimateDrawerOpen(true);
  };

  return (
    <>
      {/* =========================================================================
          1. DESKTOP VIEWPORT (md: breakpoint and up)
          Full modern desktop website redesign with multi-column layouts,
          sticky desktop navbar, interactive estimator widget, and full sections.
          ========================================================================= */}
      <div className="hidden md:block w-full min-h-screen bg-[#f4f2ed] dark:bg-[#121312]">
        <DesktopApp
          onOpenServiceModal={(service) => setSelectedService(service)}
          onOpenCallModal={() => setIsCallModalOpen(true)}
          onOpenConsultation={handleOpenEstimate}
          onOpenAreaModal={() => setShowAreaModal(true)}
          selectedArea={selectedArea}
        />
      </div>

      {/* =========================================================================
          2. REAL MOBILE DEVICE VIEWPORT (< md breakpoint)
          100% native edge-to-edge mobile web app with bottom floating pill nav,
          auto-advancing touch carousel, mobile tabs, and fast micro-flows.
          ========================================================================= */}
      <div className="block md:hidden w-full h-[100dvh] overflow-hidden bg-[#f4f2ed] dark:bg-[#121312] font-sans">
        <div className="flex flex-col w-full h-full relative overflow-hidden bg-[#f4f2ed] dark:bg-[#121312]">
          <div className="flex-1 flex flex-col relative h-full min-h-0 overflow-hidden bg-[#f4f2ed] dark:bg-[#121312]">
            {activeTab === 'home' && (
              <HomeScreen
                onSelectTab={handleSelectTab}
                onOpenServiceModal={(service) => setSelectedService(service)}
                onOpenCallModal={() => setIsCallModalOpen(true)}
                onOpenConsultation={() => setIsConsultationOpen(true)}
                selectedArea={selectedArea}
                onOpenAreaModal={() => setShowAreaModal(true)}
              />
            )}

            {activeTab === 'services' && (
              <ServicesScreen
                onSelectTab={handleSelectTab}
                onOpenServiceModal={(service) => setSelectedService(service)}
                onOpenCallModal={() => setIsCallModalOpen(true)}
              />
            )}

            {activeTab === 'estimate' && (
              <EstimatorScreen
                onOpenCallModal={() => setIsCallModalOpen(true)}
              />
            )}

            {activeTab === 'reviews' && (
              <ReviewsScreen
                onOpenCallModal={() => setIsCallModalOpen(true)}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}
          </div>

          {/* Floating Pill Bottom Navigation Bar on Mobile */}
          <BottomNav
            activeTab={activeTab}
            onSelectTab={handleSelectTab}
          />
        </div>
      </div>

      {/* =========================================================================
          3. SHARED MODALS & DRAWERS (Architectural dialogs on desktop, bottom-sheet on mobile)
          ========================================================================= */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectTab={handleSelectTab}
        onOpenCallModal={() => setIsCallModalOpen(true)}
        onOpenEstimate={handleOpenEstimate}
      />

      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      <ConsultationDrawer
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <EstimateDrawer
        isOpen={isEstimateDrawerOpen}
        onClose={() => setIsEstimateDrawerOpen(false)}
        initialService={estimatePresetService}
      />

      <AreaModal
        isOpen={showAreaModal}
        onClose={() => setShowAreaModal(false)}
        selectedArea={selectedArea}
        onSelectArea={(area) => setSelectedArea(area)}
      />
    </>
  );
}
