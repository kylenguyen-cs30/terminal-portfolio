import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <div className=" sm:p-2 min-h-screen bg-[#F1F0E8] flex flex-col items-center justify-center p-5 space-y-4 ">
      <Terminal />
    </div>
  );
}
