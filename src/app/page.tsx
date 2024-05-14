import Header from "./components/Header/Header";
import SearchInput from "./components/Inputs/SearchInput/SearchInput";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <SearchInput />
      </div>
    </>
  );
};

export default Home;
