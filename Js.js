function avg() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const num5 = parseFloat(document.getElementById("num5").value);
    const errorText = document.querySelector(".err");

    errorText.textContent = "";
    document.querySelector(".result2").textContent = "";

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        errorText.textContent = "Vui lòng nhập đầy đủ 5 số hợp lệ.";
        return;
    }

    const avg = (num1 + num2 + num3 + num4 + num5) / 5;
    document.querySelector(".result2").textContent = `Trung bình 5 số trên là: ${avg.toFixed(2)}`;
}
// bai 3
function changeMoney() {
    const mon = parseFloat(document.getElementById("usd").value);
    const errorText = document.querySelector(".errMon");
    errorText.textContent = "";
    document.querySelector(".result3").textContent = "";

    if (isNaN(mon)) {
        errorText.textContent = "Chưa nhập giá trị hoặc giá trị không hợp lệ.";
        return;
    }

    if (mon < 0) {
        errorText.textContent = "Tiền phải là số dương.";
        return;
    }

    const change = mon * 23500;

    document.querySelector(".result3").textContent = `${new Intl.NumberFormat("vn-VN").format(change)} VNĐ`;
    console.log(mon);
}
// bai 4
function tinhCVDT() {
    const chieudai = parseFloat(document.getElementById("dai").value);
    const chieurong = parseFloat(document.getElementById("rong").value);
    const errorText = document.querySelector(".err4");
    errorText.textContent = "";
    document.querySelector(".result3").textContent = "";

    if (isNaN(chieudai) || isNaN(chieurong)) {
        errorText.textContent = "Chưa nhập giá trị hoặc giá trị không hợp lệ.";
        return;
    }

    if (chieurong < 0 || chieudai < 0) {
        errorText.textContent = "Nhập giá trị dương.";
        return;
    }

    const cv = (chieudai + chieurong) * 2;
    const dt = chieudai * chieurong;

    document.querySelector(".cv").textContent = `Chu vi: ${cv}`;
    document.querySelector(".dt").textContent = `Diện tích: ${dt}`;
}

// bai 5
function tong2so() {
    const num = document.getElementById("num").value.trim();
    const errorText = document.querySelector(".err5");
    const resultElement = document.querySelector(".tong");

    errorText.textContent = "";
    resultElement.textContent = "";
    if (num === "" || isNaN(num) || num.length !== 2) {
        errorText.textContent = "Vui lòng nhập một số có 2 chữ số.";
        return;
    }
    const digits = num.toString().split("");

    const sum = parseInt(digits[0]) + parseInt(digits[1]);

    resultElement.textContent = `Tổng của các chữ số là: ${sum}`;
    console.log(digits[0], digits[1]);
}
