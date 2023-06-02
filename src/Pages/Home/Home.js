//styles
import "./Home.css";

//components
import Body from "../../Components/Body/Body";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="main-container">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
