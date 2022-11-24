import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { getListSeat } from "../../reducers/actions/BookTicket";
import {
  SET_ISMOBILE,
  INIT_DATA,
  RESET_DATA_BOOKTICKET,
  GET_LISTSEAT_SUCCESS,
} from "../../reducers/constants/BookTicket";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { DISPLAY_MOBILE_BOOKTICKET } from "../../constants/config";
import Modal from "./Modal";
import usersApi from "../../api/usersApi";
import bookingApi from "../../api/bookingApi";

export default function Index() {
  // const { isLazy } = useSelector((state) => state.lazyReducer);
  // const {
  //   loadingGetListSeat,
  //   refreshKey,
  //   timeOut,
  //   isMobile,
  //   danhSachPhongVe: { danhSachGhe },
  //   errorGetListSeatMessage,
  // } = useSelector((state) => state.bookTicketReducer);
  // const listSeat = useSelector((state)=>state.bookTicketReducer)
  // console.log("listSeatdssj sj j", listSeat.danhSachPhongVe);

  // const { currentUser } = useSelector((state) => state.authReducer);

  // console.log("currentUser", currentUser);

  // const [user, setUser]= useState('');
  // const [userDetail, setUserDetail]= useState();
  // const [listGhe, setListGhe]= useState([]);

  // const param = useParams();
  // console.log(param);
  // const dispatch = useDispatch();
  // const mediaQuery = useMediaQuery(DISPLAY_MOBILE_BOOKTICKET);
  // const loading = isLazy || loadingGetListSeat;

  
  // useEffect(() => {

  //   bookingApi.getDanhSachPhongVe(param.maLichChieu)
  //   .then((response) => {
  //     console.log("Lấy danh sách ghế API: ",response);
  //     setListGhe(response.data)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });


  //   usersApi.getThongTinTaiKhoan()
  //   .then((response) => {
  //     console.log("Thông tin TK: ",response.data);
  //     // setData((data) => ({ ...data, startRequest: false }));
  //     // setBranch(response?.data?.content);
  //     // const cumRapChieuData= response?.data?.content?.reduce(
  //     //   (colect, item) => {
  //     //     console.log(item);
  //     //     return [...colect, item];
  //     //   },
  //     //   []
  //     // );
  //     // const rapRender = cumRapChieuData
  //     // const rapRender = cumRapChieuData.map((item) => item)
  //     // setData((data) => ({
  //     //   ...data,
  //     //   rapRender,
  //     //   cumRapChieuData,
  //     // }));
  //     setUser(response.data?.username)

  //     console.log(user);
  //     usersApi.getChiTietTaiKhoan(user)
  //     .then((response) => {
  //       console.log("Thông tin TK chi tiết hơn: ", response);
  //       setUserDetail(response.data)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  
  //     console.log(userDetail);

  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });



 
  // },[])

  // console.log("listSeat: ",listGhe);
  // useEffect(() => {
  //   // lấy thongTinPhim và danhSachGhe
  //   console.log("danhSachGhedanhSachGhe",danhSachGhe);
  //   let initCode = 64;
  //   const danhSachGheEdit = danhSachGhe?.map((seat, i) => {
  //     // thêm label A01, thêm flag selected: false
  //     if (i % 16 === 0) initCode++;
  //     // const txt = String.fromCharCode(initCode);
  //     // const number = ((i % 16) + 1).toString().padStart(2, 0);
  //     return { ...seat, label: seat.name, selected: false };
  //   });

  //   console.log("danhSachGheEdit: ", danhSachGheEdit);
  //   dispatch({
  //     type: INIT_DATA,
  //     payload: {
  //       listSeat: danhSachGheEdit,
  //       // maLichChieu: thongTinPhim?.maLichChieu,
  //       maLichChieu: param.maLichChieu,
  //       taiKhoanNguoiDung: userDetail?.username,
  //       email: userDetail?.name,
  //       phone: "0376621299",
  //     },
  //   });
  //   console.log(listGhe);
    
  //   dispatch(getListSeat(param?.maLichChieu));
  //   return () => {
  //     // xóa dữ liệu khi đóng hủy component
  //     dispatch({ type: RESET_DATA_BOOKTICKET });
  //   };
  // }, []);

  // useEffect(() => {
  //   // sau khi lấy được danhSachPhongVe thì khởi tạo số ghế
  //   // console.log("danhSachGhedanhSachGhe",danhSachGhe);
  //   // let initCode = 64;
  //   // const danhSachGheEdit = danhSachGhe?.map((seat, i) => {
  //   //   // thêm label A01, thêm flag selected: false
  //   //   if (i % 16 === 0) initCode++;
  //   //   // const txt = String.fromCharCode(initCode);
  //   //   // const number = ((i % 16) + 1).toString().padStart(2, 0);
  //   //   return { ...seat, label: seat.name, selected: false };
  //   // });

  //   // console.log("danhSachGheEdit: ", danhSachGheEdit);
  //   // dispatch({
  //   //   type: INIT_DATA,
  //   //   payload: {
  //   //     listSeat: danhSachGheEdit,
  //   //     // maLichChieu: thongTinPhim?.maLichChieu,
  //   //     maLichChieu: param.maLichChieu,
  //   //     taiKhoanNguoiDung: userDetail?.username,
  //   //     email: userDetail?.name,
  //   //     phone: "0376621299",
  //   //   },
  //   // });
  //   // console.log(listGhe);
  // }, [danhSachGhe, userDetail, timeOut]);

  // useEffect(() => {
  //   dispatch({ type: SET_ISMOBILE, payload: { isMobile: mediaQuery } });
  // }, [mediaQuery]);

  // if (errorGetListSeatMessage) {
  //   return <div>{errorGetListSeatMessage}</div>;
  // }
  // return (
  //   <div style={{ display: loading ? "none" : "block" }}>
  //     {isMobile ? (
  //       <Mobile key={refreshKey} />
  //     ) : (
  //       <Desktop key={refreshKey + 1} />
  //     )}
  //     <Modal />
  //   </div>
  // );

  const { isLazy } = useSelector((state) => state.lazyReducer);
  const {
    loadingGetListSeat,
    refreshKey,
    timeOut,
    isMobile,
    danhSachPhongVe: { danhSachGhe },
    errorGetListSeatMessage,
  } = useSelector((state) => state.bookTicketReducer);
  const { currentUser } = useSelector((state) => state.authReducer);
  const param = useParams();
  const dispatch = useDispatch();
  const mediaQuery = useMediaQuery(DISPLAY_MOBILE_BOOKTICKET);
  const loading = isLazy || loadingGetListSeat;

  const [seat, setSeat] = useState([])

  useEffect(() => {
    // lấy thongTinPhim và danhSachGhe
    // dispatch(getListSeat(param.maLichChieu));
    bookingApi.getDanhSachPhongVe(param.maLichChieu)
    .then((response) =>{
      console.log(response.data);
      setSeat(response.data);
      dispatch({
        type: GET_LISTSEAT_SUCCESS,
        payload: { data: response.data }
      })
    })
    .catch((err) => {
      console.log(err);
    })
    // return () => {
    //   // xóa dữ liệu khi đóng hủy component
    //   dispatch({ type: RESET_DATA_BOOKTICKET });
    // };
  }, []);

  useEffect(() => {
    // sau khi lấy được danhSachPhongVe thì khởi tạo data
    let initCode = 64;
    const danhSachGheEdit = seat?.map((seat, i) => {
      // thêm label A01, thêm flag selected: false
      if (i % 16 === 0) initCode++;
      const txt = String.fromCharCode(initCode);
      const number = ((i % 16) + 1).toString().padStart(2, 0);
      return { ...seat, label: txt + number, selected: false };
    });
    dispatch({
      type: INIT_DATA,
      payload: {
        listSeat: danhSachGheEdit,
        maLichChieu: param?.maLichChieu,
        taiKhoanNguoiDung: "5",
        email: "test@gmail.com",
        phone: "0376621299",
      },
    });
  }, [seat, currentUser, timeOut]);

  useEffect(() => {
    dispatch({ type: SET_ISMOBILE, payload: { isMobile: mediaQuery } });
  }, [mediaQuery]);

  if (errorGetListSeatMessage) {
    return <div>{errorGetListSeatMessage}</div>;
  }
  return (
    <div style={{ display: loading ? "none" : "block", backgroundColor:"white" }}>
      {isMobile ? (
        <Mobile key={refreshKey} />
      ) : (
        <Desktop key={refreshKey + 1} />
      )}
      <Modal />
    </div>
  );
}
