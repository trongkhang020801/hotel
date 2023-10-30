import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HouseIcon from '@mui/icons-material/House';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocalAtmSharpIcon from '@mui/icons-material/LocalAtmSharp';
import PinIcon from '@mui/icons-material/Pin';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import BedIcon from '@mui/icons-material/Bed';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";

import "./slidebar.scss"
const SlideBar = () =>{
    return (
    <div className="sidebar">
            <div className="top">
              <Link to="/" style={{ textDecoration: "none" }}>
                <img 
                    src="logo.png" 
                    alt="logo"
                    className="imagelogo"
                />
                <span className="logo">Lê House Boutique</span>
              </Link>
            </div>
          <hr />
          <div className="center">
            <ul>
              <p className="title">Trang chủ</p>
              <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Trang chủ</span>
              </li>
              </Link>
              <p className="title">Quản lý chung</p>
                <li>
                  <AssignmentTurnedInIcon className="icon" />
                  <span>Duyệt bài</span>
                </li>
                <li>
                  <LocalAtmSharpIcon className="icon" />
                  <span>Thông kê & báo cáo</span>
                </li>
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Quản lý tài khoản nhân viên</span>
                </li>
              <p className="title">Danh sách xử lý</p>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                  <ListAltIcon className="icon" />
                  <span>Danh sách đặt phòng</span>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                  <ListAltIcon className="icon" />
                  <span>Xử lý nhận phòng</span>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                  <ListAltIcon className="icon" />
                  <span>Xử lý trả phòng</span>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                  <ListAltIcon className="icon" />
                  <span>Xử lý sử dụng dịch vụ</span>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li>
                  <ListAltIcon className="icon" />
                  <span>Xử lý đổi phòng</span>
                </li>
              </Link>
              <p className="title">Quản lý thông tin phòng</p>
              <li>
                <HouseIcon className="icon" />
                <span>Xem danh sách phòng</span>
              </li>
              <li>
                <AddHomeWorkIcon className="icon" />
                <span>Thêm phòng</span>
              </li>
              <p className="title">Quản lý dịch vụ</p>
              <li>
                <SettingsSystemDaydreamOutlinedIcon className="icon" />
                <span>Quản lý thông tin dịch vụ</span>
              </li>
              <li>
                <SettingsSystemDaydreamOutlinedIcon className="icon" />
                <span>Quản lý sử dụng dịch vụ</span>
              </li>
              <p className="title">Quản lý khác</p>
              <Link to="/customer" style={{ textDecoration: "none" }}>
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Người dùng</span>
                </li>
              </Link>
                <li>
                  <InsertCommentIcon className="icon" />
                  <span>Quản lý trạng thái đánh giá</span>
                </li>
                <li>
                  <PinIcon className="icon" />
                  <span>Quản lý mức điểm</span>
                </li>
                <li>
                  <FiberNewIcon className="icon" />
                  <span>Quản lý tin tức</span>
                </li>
                <li>
                  <BedIcon className="icon" />
                  <span>Quản lý phụ phí</span>
                </li>
                {/* <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Người dùng</span>
                </li> */}
              {/* <p className="title">Người dùng</p> */}
              <li>
                <AccountCircleOutlinedIcon className="icon" />
                <span>Thông tin cá nhân</span>
              </li>
              <Link to="/login" style={{ textDecoration: "none" }}>

              <li>
                <LoginIcon className="icon" />
                <span>Login</span>
              </li>
              </Link>
            </ul>
          </div>
          {/* <div className="bottom">
            <div
              className="colorOption"
              onClick={() => dispatch({ type: "LIGHT" })}
            ></div>
            <div
              className="colorOption"
              onClick={() => dispatch({ type: "DARK" })}
            ></div>
          </div> */}
          </div>
    )
}
export default SlideBar;