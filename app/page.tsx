import Image from 'next/image';
import SidePanel from './components/SidePanel';

export default function Home() {
  return (
    <section className=" flex items-center justify-center bg-white w-screen h-screen p-10">
      <div className="w-full flex-row items-center justify-center h-screen bg-slate-400 container p-10">
        <SidePanel />
      </div>
    </section>
  );
}
