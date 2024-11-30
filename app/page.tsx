export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[900px] gap-4 m-6 bg-orange-200">
      {/* First Box */}
      <div className="bg-blue-500 text-center justify-self-center md:justify-self-end w-[150px]">
        AG1<br />2 of 10
      </div>
      
      {/* Middle Section */}
      <div className="text-center grid grid-cols-2 gap-2">
        <div className="bg-orange-300 col-span-2">AG2<br />6 of 10</div>
        <div className="bg-pink-600 col-span-1">AG4<br />3 of 6</div>
        <div className="bg-pink-600 col-span-1">AG5<br />3 of 6(0mega)</div>
        <div className="bg-orange-500 row-span-4 col-span-2 md:col-span-1">AG6 <br />2 of 6</div>
        <div className="bg-yellow-300 col-span-2 md:col-span-1">AG7<br />4 of 6 (Omega)</div>
        <div className="grid grid-cols-2 gap-2 col-span-2 md:col-span-1">
          <div className="bg-pink-600">AG8<br />2 of 4</div>
          <div className="bg-pink-600">AG9<br />2 of 4(0mega)</div>
        </div>
        <div className="bg-purple-400 col-span-2 md:col-span-1">AG10<br />auto</div>
      </div>
      
      {/* Third Box */}
      <div className="bg-blue-500 text-center w-[150px] z-40 justify-self-center md:justify-self-start">
        AG3<br />2 of 10(0mega)
      </div>
    </div>
  );
}
