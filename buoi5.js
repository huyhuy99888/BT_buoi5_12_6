//  Bài 2: Viết chương trình nhập vào thông tin tiêu thụ điện (Tên,kw). 
/*
input:
    - Cho người dùng nhập vào tên,số KW 
Xuly:
    - Tạo biến tenKhachHang, soDienSuDung, soTienPhaiDong
    - Nếu 0 < soDienSuDung <= 50 thì chỉ trả 500đ/kw
    - Nếu  50 < soDienSuDung <= 100 thì phải đóng soTienPhaiDong = (50 * 500) + (soDienSuDung - 50) * 650;
    - Nếu (200 < soDienSuDung <= 350) thì phải đóng  soTienPhaiDong = (50 * 500) + (50 * 650) + (100 * 850) + (soDienSuDung - 200) * 1100;
    - Nếu (350 < soDienSuDung) thì phải đóng soTienPhaiDong = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soDienSuDung - 350) * 1300;
Output:
    Xuất ra kết quả
*/
document.getElementById('btnKetQua').onclick = function () {
    var tenKhachHang = document.getElementById('tenKhachHang').value;
    var soDienSuDung = document.getElementById('soDienSuDung').value;

    var soTienPhaiDong;
    if (soDienSuDung != parseInt(soDienSuDung) || tenKhachHang == "" || soDienSuDung == "" || soDienSuDung <= 0) {

        document.getElementById('tenKhachHang').value = "";
        document.getElementById('soDienSuDung').value = "";
        alert("xin vui lòng nhập định dạng lại");
    } else {

        if (0 < soDienSuDung <= 50) {
            soTienPhaiDong = soDienSuDung * 500;
        } else {
            if (50 < soDienSuDung <= 100) {
                soTienPhaiDong = (50 * 500) + (soDienSuDung - 50) * 650;
            } else {
                if (100 < soDienSuDung <= 200) {
                    soTienPhaiDong = (50 * 500) + (50 * 650) + (soDienSuDung - 100) * 850;
                } else {
                    if (200 < soDienSuDung <= 350) {
                        soTienPhaiDong = (50 * 500) + (50 * 650) + (100 * 850) + (soDienSuDung - 200) * 1100;
                    } else {
                        if (350 < soDienSuDung) {
                            soTienPhaiDong = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soDienSuDung - 350) * 1300;
                        }
                    }
                }
            }
        }
    }
    console.log(tenKhachHang + ' : ' + ' Số tiền cần đóng :' + soTienPhaiDong + ' ' +'VNĐ')
}


// Bài 1: Quản lí sinh viên
/*
input:
    - Người dùng nhập vào số điểm ba môn và điểm chuẩn,điểm khu vực + điểm đối tượng(nếu có)
Xuly:
    - Nếu người dùng nhập vào là dạng String hay là bỏ trống thì sẽ alert('Vui lòng nhập lại định dạng số'),
    đồng thời sẽ reset lại các giá trị nhập vào.
    - Nếu (diemChuan >= 0 && diemChuan <= 34.5 && diemToan >= 0 && diemToan <= 10 && diemNguVan >= 0 && diemNguVan <= 10 && diemTiengAnh >= 0 && diemTiengAnh <= 10) 
    thì sẽ cho ra kết quả console.Sai thì sẽ kiểm tra từng giá trị người nhập vào cho như theo khai quy định ko,nếu ko thì sẽ reset lại,để cảnh báo người dùng
    nhập sai yêu cầu.
Output:
    - Xuất kết quả mà người dùng nhập vào đúng.
*/

document.getElementById('btnKetQuaThi').onclick = function () {
    var diemChuan = document.getElementById('diemChuan').value;
    var diemToan = document.getElementById('diemToan').value;
    var diemNguVan = document.getElementById('diemNguVan').value;
    var diemTiengAnh = document.getElementById('diemTiengAnh').value;
    var khuVucUuTien = Number(document.getElementById('khuVucUuTien').value);
    var doiTuongUuTien = Number(document.getElementById('doiTuongUuTien').value);


    if (isNaN(diemToan) || isNaN(diemNguVan) || isNaN(diemTiengAnh) || isNaN(diemChuan) || diemChuan == "" || diemToan == "" || diemNguVan == "" || diemTiengAnh == "") {
        document.getElementById('diemChuan').value = "";
        document.getElementById('diemToan').value = "";
        document.getElementById('diemNguVan').value = "";
        document.getElementById('diemTiengAnh').value = "";
        alert('Vui lòng nhập lại giá trị');
    } else {
        if (diemChuan >= 0 && diemChuan <= 34.5 && diemToan >= 0 && diemToan <= 10 && diemNguVan >= 0 && diemNguVan <= 10 && diemTiengAnh >= 0 && diemTiengAnh <= 10) {
            diemChuan = Number(diemChuan);
            diemToan = Number(document.getElementById('diemToan').value);
            diemNguVan = Number(document.getElementById('diemNguVan').value);
            diemTiengAnh = Number(document.getElementById('diemTiengAnh').value);
            var diemTongKet = (diemToan + diemNguVan + diemTiengAnh) + khuVucUuTien + doiTuongUuTien;
        } else {
            if (diemChuan >= 0 && diemChuan <= 34.5) { }
            else {
                document.getElementById('diemChuan').value = "";
                alert('Giá trị \'Nhập điểm chuẩn:\' phải nằm giữa 0 - 34.5')
                diemChuan = null;
            }
            if (diemToan >= 0 && diemToan <= 10) {
                diemToan = Number(document.getElementById('diemToan').value);
            } else {
                document.getElementById('diemToan').value = "";
                diemToan = null;
                alert('Giá trị \'Nhập điểm Toán:\' phải nằm giữa 0 - 10')
                console.log(diemToan);
            }
            if (diemNguVan >= 0 && diemNguVan <= 10) {
                diemNguVan = Number(document.getElementById('diemNguVan').value);
            } else {
                document.getElementById('diemNguVan').value = "";
                diemNguVan = null;
                alert('Giá trị \'Nhập điểm Văn:\' phải nằm giữa 0 - 10')
            }
            if (diemTiengAnh >= 0 && diemTiengAnh <= 10) {
                diemTiengAnh = Number(document.getElementById('diemTiengAnh').value);
            } else {
                document.getElementById('diemTiengAnh').value = "";
                alert('Giá trị \'Nhập điểm Tiếng anh:\' phải nằm giữa 0 - 10')
                diemTiengAnh = null;
            }

        }

    }

    console.log(diemTongKet);
    if (diemTongKet >= diemChuan) {
        console.log('Xin chúc mừng bạn đã đỗ.');
    } else {
        console.log('Rất tiếc bạn đã trượt.');
    }
}



