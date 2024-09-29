import ParticlesBackground from './components/ParticlesBackground';
import MainPanel from './components/MainPanel';
import { Quattrocento, Roboto } from 'next/font/google';
import SidePanel from './components/SidePanel';

// Correct variable name to reflect the font
const quattrocento = Quattrocento({
  subsets: ['latin'],
  variable: '--font-quattrocento', // Optional: Define a CSS variable for font
  weight: '700',
});

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-black">
      <ParticlesBackground />
      <div className="flex flex-row items-center justify-between container w-full h-[80%] space-x-4 z-10">
        <div className="w-[26%] flex items-center h-full justify-center  overflow-hidden">
          <SidePanel />
        </div>
        <div className="w-[72%] flex items-center h-full justify-center bg-yellow-800 rounded-lg">
          <MainPanel />
        </div>
      </div>
    </div>
  );
}
