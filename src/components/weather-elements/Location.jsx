import useCurrent from "../../composable/useCurrent";
import useDate from "../../helper/useDate";

function Location() {
  const { dataCurrent } = useCurrent();
  const date = useDate();

  return (
    <div className="flex items-center ml-10">
      <div className="flex flex-col w-1/2 mt-8">
        <div>
          <span>{dataCurrent?.location.tz_id}</span>
        </div>
        <div>
          <span className="text-slate-400">
            {dataCurrent?.location.country}/{dataCurrent?.location.name}
          </span>
        </div>
      </div>
      <div className="mt-8 ml-4">{date.time}</div>
    </div>
  );
}
export default Location;
