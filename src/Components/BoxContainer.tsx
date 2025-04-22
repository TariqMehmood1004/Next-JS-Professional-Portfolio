import LocationIcon from "./Icons/LocationIcon";

export default function BoxContainer({ icon = <LocationIcon />, title = "title here", description = "description here" }) {
  return (
    <div className='my-card w-full text-black hover:bg-gray-100 md:w-72 h-44 flex flex-col items-center justify-center rounded-lg p-4 transition-all duration-300 cursor-pointer'>
      {icon}
      <h1 className="text-2xl flex justify-center text-center items-end gap-5">
        <span className="font-bold">{title}</span>
      </h1>
      <p className='text-center'>{description}</p>
    </div>
  );
}
