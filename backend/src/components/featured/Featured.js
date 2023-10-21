import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Tổng thu nhập</h1>
        {/* <MoreVertIcon fontSize="small" /> */}
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={10} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Tổng doanh thu hôm nay</p>
        <p className="amount">420,000 VNĐ</p>
        {/* <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p> */}
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Mục tiêu hôm nay</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">12,400,000 VNĐ</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Doanh thu tuần trước</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">12,400,000VNĐ</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Doanh thu tháng trước</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">49,600,000 VNĐ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;