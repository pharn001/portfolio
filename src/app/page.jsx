import LeftSection from "./_component/section/LeftSection";
import RighSection from "./_component/section/RighSection";

export default function Home() {
  return (
    <div className="mt-14 mx-auto max-w-6xl grid lg:grid-cols-[40%_60%] ">
      <LeftSection/>
      <RighSection/>
     
    </div>
  );
}
