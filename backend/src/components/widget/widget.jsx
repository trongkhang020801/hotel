import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HouseIcon from '@mui/icons-material/House';
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 0;

  switch (type) {
    case "user":
      data = {
        title: "Người dùng",
        people: true,
        isMoney: false,
        link: "Xem chi tiết",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Đặt phòng",
        order: true,
        people: false,
        isMoney: false,
        link: "Xem chi tiết",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "room":
      data = {
        title: "Phòng & căn hộ",
        room:true,
        people: false,
        isMoney: false,
        link: "Xem chi tiết",
        icon: (
          <HouseIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "employee":
      data = {
        title: "Nhân viên",
        people: true,
        isMoney: false,
        link: "Xem chi tiết",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "VNĐ"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;