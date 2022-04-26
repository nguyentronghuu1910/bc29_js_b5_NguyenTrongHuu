var getEleID = function(id) {
    return document.getElementById(id);
};
var currentFormat = new Intl.NumberFormat("vn-VN");

// Bài tập 1
/**
 * 
 */
document.getElementById("btnKQ1").onclick = function() {
    var mon_1 = parseInt(getEleID("mon_1").value * 1);
    var mon_2 = parseInt(getEleID("mon_2").value * 1);
    var mon_3 = parseInt(getEleID("mon_3").value * 1);
    var khuVuc = parseInt(getEleID("khuVuc").value * 1);
    var doiTuong = parseInt(getEleID("doiTuong").value * 1);
    var diemChuan = getEleID("diemChuan").value * 1;
    var diemTongKet = 0;

    diemTongKet = mon_1 + mon_2 + mon_3 + khuVuc + doiTuong;
    if (mon_1 == 0 || mon_2 == 0 || mon_3 == 0) {
        getEleID("txtFooter1").innerHTML = "Không đủ điểu kiện vì có môn 0 điểm!";
        getEleID("txtFooter1").classList.add("alert-danger");
    } else if (diemTongKet >= diemChuan) {
        getEleID("txtFooter1").innerHTML = "Chúc mừng bạn! Điểm của bạn là: " + diemTongKet;
        getEleID("txtFooter1").classList.add("alert-success");
    } else if (diemTongKet < diemChuan) {
        getEleID("txtFooter1").innerHTML = "Chúc bạn may mắn lần sau!";
        getEleID("txtFooter1").classList.add("alert-warning");
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Bài tập 2

/** 
   + Nếu soDien <= 50 => tongTien = soDien * kw_1;
   + Nếu 50 < soDien <= 100 => tongTien = (soDien - 50) * kw_2 + 50 * kw_1;
   + Nếu 100 < soDien <= 200 => tongTien = 50 * kw_1 + 50 * kw_2 + (soDien - 50 - 50) * kw_3
   + Nếu 200 < soDien <= 350 => tongTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (soDien - 50 - 50 - 100) * kw_4;
   + Nếu soDien > 350 => tongTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (soDien -50 -50 -100 -150) * kw_5;
*/
// const kw_1 = 500;
// const kw_2 = 650;
// const kw_3 = 850;
// const kw_4 = 1100;
// const kw_5 = 1300;


document.getElementById("btnKQ2").onclick = function() {
    var kw_1 = 500;
    var kw_2 = 650;
    var kw_3 = 850;
    var kw_4 = 1100;
    var kw_5 = 1300;

    var khachHang = getEleID("khachHang").value * 1;
    var soDien = getEleID("soDien").value * 1;
    var tongTien = 0;

    if (soDien <= 50) {
        tongTien = soDien * kw_1;
        //   console.log(tongTien);
    } else if (soDien > 50 && soDien <= 100) {
        tongTien = (soDien - 50) * kw_2 + 50 * kw_1;
    } else if (soDien > 100 && soDien <= 200) {
        tongTien = 50 * kw_1 + 50 * kw_2 + (soDien - 50 - 50) * kw_3;
    } else if (soDien > 200 && soDien <= 350) {
        tongTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (soDien - 50 - 50 - 100) * kw_4;
    } else if (soDien > 350) {
        tongTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (soDien - 50 - 50 - 100 - 150) * kw_5;
    }

    getEleID("txtFooter2").innerHTML = "Tên khách hàng: " + khachHang + " Tổng tiền: " + currentFormat.format(tongTien)
    "VNĐ";
}