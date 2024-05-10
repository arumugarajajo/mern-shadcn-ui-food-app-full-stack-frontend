import landingImg from "../assets/landing.png";
import appDownloadImg from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormvalues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormvalues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="md:text-5xl text-2xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="md:text-xl">Foot is just a click away</span>
        <SearchBar
          onSubmit={handleSearchSubmit}
          placeHolder="Search by city or town"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImg} alt="landing img" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster
          </span>
          <span>
            Download the Whoope app for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImg} alt="appDownloadImg" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
