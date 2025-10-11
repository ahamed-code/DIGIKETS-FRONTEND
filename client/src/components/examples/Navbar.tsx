import Navbar from '../Navbar';

export default function NavbarExample() {
  return <Navbar onNavigate={(section) => console.log('Navigate to:', section)} />;
}
