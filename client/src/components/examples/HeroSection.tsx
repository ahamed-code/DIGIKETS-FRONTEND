import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <div className="relative bg-background">
      <HeroSection onNavigate={(section) => console.log('Navigate to:', section)} />
    </div>
  );
}
