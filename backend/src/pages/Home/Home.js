import Widget from "../../components/widget/widget";
import SlideBar from "../../components/slidebar/slidebar";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/chart"
import Navbar from "../../components/Navbar/Navbar";
import "./home.scss"
const Home = () =>{
    return (
        <div className="home">
          <SlideBar />
          <div className="homeContainer">
            <Navbar />
            <div className="widgets">
              <Widget type="user" />
              <Widget type="employee" />
              <Widget type="order" />
              <Widget type="room" />
            </div>
            <div className="charts">
              <Featured />
              <Chart title="6 tháng trước (Doanh thu)" aspect={2 / 1} />
            </div>
            {/* <div className="listContainer">
              <div className="listTitle">Danh sách đặt phòng mới nhất</div>
               <Table /> 
            </div> */}
          </div>
          
        </div>
        
      );
    };
export default Home;