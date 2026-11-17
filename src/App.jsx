import React, { useState, useRef, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll in screen container to adjust header transparency
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop > 25 && !isScrolled) {
      setIsScrolled(true);
    } else if (scrollTop <= 25 && isScrolled) {
      setIsScrolled(false);
    }
  };

  // Reset scroll when switching tabs
  const handleSelectTab = (tab) => {
    setActiveTab(tab);
    setIsScrolled(false);
  };

  return (
    <PhoneShell activeTab={activeTab} onTabChange={handleSelectTab}>
      <div 
        className="w-full h-full flex flex-col relative overflow-hidden bg-slate-50"
      >
        {/* Sticky Collapsible Top Header */}
        <TopHeader
          isScrolled={isScrolled}
          onOpenCallModal={() => setIsCallModalOpen(true)}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Screen View Container with scroll detection */}
        <div 
          className="flex-1 w-full overflow-y-auto smooth-scroll hide-scrollbar flex flex-col"
          onScroll={handleScroll}
        >
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
