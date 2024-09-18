function tinhDiemTrungBinh() {
    var toan = parseFloat(document.getElementById("toan").value);
    var ly = parseFloat(document.getElementById("ly").value);
    var hoa = parseFloat(document.getElementById("hoa").value);
    var diemTrungBinh = (toan + ly + hoa) / 3;
    document.getElementById("ketQua").innerText = "Điểm trung bình của bạn là: " + diemTrungBinh.toFixed(2);
}