import React, { useState } from 'react';
import PhoneShell from './components/PhoneShell';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import EstimatorScreen from './screens/EstimatorScreen';
import ReviewsScreen from './screens/ReviewsScreen';
import ServiceModal from './components/ServiceModal';
import CallModal from './components/CallModal';
import ConsultationDrawer from './components/ConsultationDrawer';
import AreaModal from './components/AreaModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [showAreaModal, setShowAreaModal] = useState(false);
  const [selectedArea, setSelectedArea] = useState('Riverside County (Menifee & Murrieta)');

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
  };

  const isModalOpen = !!selectedService || isCallModalOpen || isConsultationOpen || showAreaModal;

  return (
    <PhoneShell isLocked={isModalOpen}>
      <div className="flex flex-col flex-1 relative h-full overflow-hidden bg-slate-50">
        <div className="flex-1 flex flex-col relative h-full min-h-0 overflow-hidden bg-slate-50">
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

        {/* Floating Pill Bottom Navigation Bar */}
        <BottomNav
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />

        {/* Modals & Slide-up Drawers (contained within phone shell) */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectTab={handleSelectTab}
          onOpenCallModal={() => setIsCallModalOpen(true)}
        />

        <CallModal
          isOpen={isCallModalOpen}
          onClose={() => setIsCallModalOpen(false)}
        />

        <ConsultationDrawer
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />

        <AreaModal
          isOpen={showAreaModal}
          onClose={() => setShowAreaModal(false)}
          selectedArea={selectedArea}
          onSelectArea={(area) => setSelectedArea(area)}
        />
      </div>
    </PhoneShell>
  );
}
