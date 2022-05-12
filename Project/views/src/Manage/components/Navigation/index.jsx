import React, {useState} from "react";
import {MdOutlineSpaceDashboard} from "react-icons/md";
import {BsBoxSeam, BsPeople} from "react-icons/bs";
import {TiThMenuOutline} from "react-icons/ti";
import {RiBillLine} from "react-icons/ri";
import {GrDeliver} from "react-icons/gr";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Navigation() {
  const [openMenuProduct, setOpenMenuProduct] = useState(false);

  const [openMenuBill, setOpenMenuBill] = useState(false);

  const [openCategory, setOpenCategory] = useState(false);

  const handleMenuProduct = () => {
    setOpenMenuProduct(!openMenuProduct);
  };

  const handleMenuBill = () => {
    setOpenMenuBill(!openMenuBill);
  };

  const handleCategory = () => {
    setOpenCategory(!openCategory);
  };

  const isLogin = useSelector((state) => state.employee?.current[0]?.email_nv);

  const role = useSelector((state) => state.employee?.current[0]?.id_cv);

  return (
    <div className="h-[100vh] bg-slate-200">
      <div className="py-6">
        <p className="text-[30px] text-center font-bold bg-text-color bg-clip-text text-transparent">ShopShoes</p>
      </div>
      {isLogin ? (
        <div className="grid grid-cols-1 mt-6">
          {role === "CV01" && (
            <Link to="/manage/dashboard">
              <div className="flex gap-2 items-center px-6 py-3 border-l-4 hover:bg-white hover:border-[#000] cursor-pointer duration-300">
                <MdOutlineSpaceDashboard size={20} />
                <p>Thống kê</p>
              </div>
            </Link>
          )}

          {(role === "CV01" || role === "CV03") && (
            <>
              <div>
                <div
                  onClick={handleMenuProduct}
                  className="flex gap-2 items-center px-6 py-3 border-l-4 hover:bg-white hover:border-[#000] cursor-pointer duration-300"
                >
                  <BsBoxSeam size={20} />
                  <p>Sản phẩm</p>
                </div>
                {openMenuProduct ? (
                  <div className="pl-14 text-[14px]">
                    <Link to="/manage/product/add">
                      <p className="hover:pl-4 hover:font-semibold p-2 duration-200">Thêm sản phẩm</p>
                    </Link>
                    <Link to="/manage/product/listproducts">
                      <p className="hover:pl-4 hover:font-semibold p-2 duration-200">Danh sách sản phẩm</p>
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              {role === "CV01" && (
                <>
                  <div
                    onClick={handleCategory}
                    className="flex gap-2 items-center px-6 py-3 border-l-4 hover:bg-white hover:border-[#000] cursor-pointer duration-300"
                  >
                    <TiThMenuOutline size={20} />
                    <p>Danh mục</p>
                  </div>

                  {openCategory ? (
                    <div className="pl-14 text-[14px]">
                      <Link to="/manage/category/color">
                        <p className="hover:pl-4 hover:font-semibold p-2 duration-200">Màu sắc</p>
                      </Link>
                      <Link to="/manage/category/size">
                        <p className="hover:pl-4 hover:font-semibold p-2 duration-200">Kích thước</p>
                      </Link>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              )}

              {(role === "CV01" || role === "CV02") && (
                <div>
                  <div
                    onClick={handleMenuBill}
                    className="flex gap-2 items-center px-6 py-3 border-l-4 hover:bg-white hover:border-[#000] cursor-pointer duration-300"
                  >
                    <RiBillLine size={20} />
                    <p>Hóa đơn</p>
                  </div>
                  {openMenuBill ? (
                    <div className="pl-14 text-[14px]">
                      {role === "CV01" && (
                        <Link to="/manage/bill/import_invoice">
                          <p className="hover:pl-4 hover:font-semibold p-2 duration-200">Hóa đơn nhập</p>
                        </Link>
                      )}
                      <Link to="/manage/bill/export_invoice">
                        <p className="hover:pl-4 hover:font-semibold p-2 duration-200">Hóa đơn xuất</p>
                      </Link>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              )}

              <Link to="/manage/delivery">
                <div className="flex gap-2 items-center px-6 py-3 border-l-4 hover:bg-white hover:border-[#000] cursor-pointer duration-300">
                  <GrDeliver size={20} />
                  <p>Giao hàng</p>
                </div>
              </Link>
            </>
          )}

          {role === "CV01" && (
            <Link to="/manage/staff">
              <div className="flex gap-2 items-center px-6 py-3 border-l-4 hover:bg-white hover:border-[#000] cursor-pointer duration-300">
                <BsPeople size={20} />
                <p>Nhân viên</p>
              </div>
            </Link>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navigation;
