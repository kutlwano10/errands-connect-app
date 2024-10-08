import GoogleMap from "./components/home/GoogleMap";
import Search from "./components/home/Search";

export default function Home() {
  return (
    <>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-5 ">
        <div>
          <Search/>
        </div>
        <div className="col-span-2">
          <GoogleMap/>
        </div>
      </div>
    </>
  );
}
