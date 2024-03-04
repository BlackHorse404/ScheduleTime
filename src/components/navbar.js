import '../styles/navbar.scss'
import { CalendarOutlined, MessageFilled , UserOutlined, FolderFilled, LogoutOutlined} from "@ant-design/icons"

export default function Navbar() {
  return (
    <>
     <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item active-menu-item">
            <a href="/" className="navbar__link" title="Thời khóa biểu">
              <CalendarOutlined style={{ fontSize: '18px'}}/>
            </a>
          </li>
          <li className="navbar__item" title="User">
            <a href="#" className="navbar__link">
              <UserOutlined style={{ fontSize: '18px'}}/>
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              <FolderFilled style={{ fontSize: '18px'}}/>
            </a>
          </li>
          <li className="navbar__item" title="Đăng xuất">
            <a href="#" className="navbar__link">
              <LogoutOutlined style={{ fontSize: '18px'}} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

