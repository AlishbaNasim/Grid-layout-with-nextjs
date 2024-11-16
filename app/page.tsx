import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-3  w-[900px] gap-4 m-6 ">
      <div className="bg-blue-500 text-center justify-self-end w-[150px]">AG1<br />2 of 10</div>
      <div className="text-center grid grid-cols-2 grid-rows ">
        <div className="bg-orange-200 col-span-2">AG2<br />6 of 10</div>
        <div className="bg-pink-600 col-span-1"> AG4<br />3 of 6</div>
        <div className="bg-pink-600 col-span-1"> AG5<br />3 of 6(0mega)</div>
        <div className="bg-orange-500 row-span-4">AG6 <br />2 of 6 </div>
        <div className="bg-yellow-300 "> AG7 <br /> 4 of 6 (Omega)</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-pink-600 col-span-1"> AG8<br />2 of 4</div>
          <div className="bg-pink-600 col-span-1"> AG9<br />2 of 4(0mega)</div>
        </div>
        <div className="bg-purple-400">AG10<br />auto</div>
      </div>
      <div className="bg-blue-500 text-center w-[150px] z-40"> AG3<br />2of 10(0mega)</div>
    </div>
  );
}
