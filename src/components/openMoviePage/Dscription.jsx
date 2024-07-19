export default function Description({ Description }) {
  return (
    <>
      <div className="bg-neutral-800 rounded-lg border border-neutral-700 flex flex-col gap-2 p-6 ">
        <h5 className="text-neutral-400">Description</h5>
        <p className="text-sm lg:text-base">{Description}</p>
      </div>
    </>
  );
}
