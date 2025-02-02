
import React, { useEffect, useState } from 'react'
import Axios from "axios";
import PropTypes from 'prop-types';

CheckEmptySeat.propTypes = {
  maLichChieu: PropTypes.any.isRequired,
};
export default function CheckEmptySeat(maLichChieu) {
  // console.log("isEmptySeat: ", maLichChieu);

  const [isEmptySeat, setIsEmptySeat] = useState(false) // kiểm tra có còn ghế trống không
  const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
  // useEffect(() => {
  //   let cancel = Axios.CancelToken.source(); // Axios cung cấp, để cancel gọi api khi component bị hủy(bấm chuyển cụm rạp khác)
  //   const loadData = async () => {
  //     try { // bắt lỗi khi get API, nếu có lỗi thì vào catch
  //       const response = await Axios.get(url, {
  //         cancelToken: cancel.token
  //       });
  //       console.log("response.data: ", response.data);
  //       // setData({
  //       //   thoiLuong: response.data.heThongRapChieu?.[0].cumRapChieu?.[0].lichChieuPhim?.[0].thoiLuong, // tách ra thời lượng phim
  //       //   danhGia: response.data.danhGia
  //       // });
  //     } catch (error) { // vào đây khi có lỗi get api hoặc khi cancel thành công
  //       if (Axios.isCancel(error)) { // cancel request thành công
  //         console.log("AxiosCancel: caught cancel");
  //       } else {
  //         throw error; // báo lỗi get api
  //       }
  //     }
  //   };
  //   loadData();
  //   return () => {
  //     cancel.cancel(); // unmounting thì cancel request axios
  //   };
  // }, [])

  return isEmptySeat
}
