import WelcomeAnimation from '../WelcomeAnimation';

export default function WelcomeAnimationExample() {
  return <WelcomeAnimation onComplete={() => console.log('Welcome animation complete')} />;
}
