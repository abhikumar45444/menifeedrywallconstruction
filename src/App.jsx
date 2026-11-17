import React, { useState } from 'react';
import PhoneShell from './components/PhoneShell';
import TopHeader from './components/TopHeader';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import EstimatorScreen from './screens/EstimatorScreen';
import ReviewsScreen from './screens/ReviewsScreen';
import ServiceModal from './components/ServiceModal';
import CallModal from './components/CallModal';
import ConsultationDrawer from './components/ConsultationDrawer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <PhoneShell activeTab={activeTab} onTabChange={handleSelectTab}>
      <div className="w-full h-full flex flex-col relative overflow-hidden bg-slate-50">
        {/* On tabs other than home, render pinned solid header */}
        {activeTab !== 'home' && (
          <TopHeader
            isScrolled={true}
            onOpenCallModal={() => setIsCallModalOpen(true)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onSelectTab={handleSelectTab}
          />
        )}

        {/* Screen View Container */}
        <div className="flex-1 w-full h-full overflow-hidden flex flex-col relative">
          {activeTab === 'home' && (
            <HomeScreen
              onSelectTab={handleSelectTab}
              onOpenServiceModal={(service) => setSelectedService(service)}
              onOpenCallModal={() => setIsCallModalOpen(true)}
              onOpenConsultation={() => setIsConsultationOpen(true)}
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

        {/* Modals & Slide-up Drawers */}
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
      </div>
    </PhoneShell>
  );
}
