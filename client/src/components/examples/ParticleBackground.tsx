import ParticleBackground from '../ParticleBackground';

export default function ParticleBackgroundExample() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <ParticleBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Particle Background</h1>
      </div>
    </div>
  );
}
