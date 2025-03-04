
export default function Home() {
  return (
    <div className="mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%] ">
      <div >
        <div className="sticky top-14 grid grid-rows-[35%_45%_20%] h-screen ">
          <div className="flex flex-col ">
            <div className="text-3xl text-nothing-Navy font-semibold">Software Developer </div>
            <div className="text-2xl text-nothing-Blue font-semibold">Software Developer </div>
            <div className="text-sm w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div className="mt-5">
              <span className="bg-nothing-Navy text-white p-2 px-4">View Resume</span>
            </div>
          </div>
          <div className="">Nav</div>
          <div className="flex items-end">Link</div>
        </div>
      </div>
      <div >
        <div className="">
          <div className="mb-96">Exporience</div>
          <div className="mb-96">Exporience</div>
          <div className="mb-96">Exporience</div>
          <div className="mb-96">Exporience</div>
          <div className="mb-96">Exporience</div>
        </div>
      </div>
    </div>
  );
}
