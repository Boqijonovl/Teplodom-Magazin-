// import { Link } from "react-router-dom";
// import { IoSearch } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa6";
// import "./Nav.css";import Logo from "../../assets/logo.png";
import ShopIcon from "../../assets/images/ImgNav/ShopIcon.svg";
import ProfileIcon from "../../assets/images/ImgNav/ProfileIcon.svg";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="nav py-[20px] px-[15px] lg:px-[150px] bg-[#FAFAFA]">
        <div className="container mx-auto sm:px-[10px]">
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <div className="logo-wrapper flex gap-[14px] items-center">
                <img
                  className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px]"
                  src={Logo}
                  alt="logo"
                />
                <div>
                  <h1 className="text-[18px] sm:text-[26px] logo-title font-semibold">
                    TEPLODOM
                  </h1>
                  <p className="text-[9px] sm:text-[13px] font-medium">
                    Интернет магазин <br />
                    строй материалов
                  </p>
                </div>
              </div>
            </Link>
            <div className="search flex justify-between items-center gap-[38px]">
              <div className="xl:block hidden search-input xl:flex items-center w-[345px] gap-[14px] rounded-[15px] bg-[#FFFFFF] p-[10px] ">
                <IoSearch className="w-[28px] h-[28px] text-[#B3B3B3]" />
                <input
                  className="outline-none w-[100%]"
                  type="text"
                  placeholder="Поиск..."
                />
              </div>
              <div className="like-wrapper cursor-pointer flex items-center justify-center bg-[#fff] p-[8px] sm:p-[14px] rounded-full">
                <FaRegHeart className="w-[28px] h-[28px]" />
              </div>
              <div className="shop-wrapper cursor-pointer flex items-center justify-center bg-[#fff] p-[8px] sm:p-[14px] rounded-full">
                <img src={ShopIcon} alt="ShopIcon" />
              </div>
              <button className="flex items-center gap-[16px] bg-[#fff] p-[8px] sm:p-[14px] rounded-[15px]">
                <img src={ProfileIcon} alt="ProfilIcon" />
                <p className="sm:block hidden md:block text-[19px]">Профиль</p>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
