import freeTrialSample from "../assets/freetrialsample.jpg";

export default function FreeTrial() {
  return (
    <>
      <div
        className="relative h-80 lg:h-60 2xl:h-80 my-12 lg:my-20 2xl:my-28 border border-stone-700 bg-cover bg-center rounded-lg "
        style={{ backgroundImage: `url(${freeTrialSample})` }}
      >
        <div className="relative  z-10 h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center p-4 px-8 lg:px-20 2xl:px-28 gap-16  text-white ">
          <div className="flex flex-col gap-4 items-center lg:items-start ">
            <h4 className="font-bold text-2xl 2xl:text-4xl">Start your free trial today!</h4>
            <p className="text-neutral-400 text-center">
              {" "}
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <div className=" bg-red-700 rounded-lg hover:cursor-pointer hover:scale-105 flex p-2 items-center gap-2 justify-center px-6 lg:px-4 font-bold 2xl:text-xl">
            <p>Start a Free Trial</p>
          </div>
        </div>
        <div
          className="hidden lg:block absolute inset-0 rounded-lg z-0"
          style={{
            background: `linear-gradient(90deg, rgba(15,15,15,1) 10%, rgba(20,15,15,0.97) 39%, rgba(34,14,14,0.91) 80%, rgba(229,0,0,0.5) 100%)`,
            opacity: 1,
          }}
        ></div>
        <div
          className="lg:hidden absolute inset-0 rounded-lg z-0"
          style={{
            background: `linear-gradient(180deg, rgba(15,15,15,1) 10%, rgba(20,15,15,0.97) 39%, rgba(34,14,14,0.91) 80%, rgba(229,0,0,0.5) 100%)`,
            opacity: 1,
          }}
        ></div>
      </div>
    </>
  );
}
