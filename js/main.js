var listNumber = [];

function isEmpty() {
    if (listNumber.length == 0) {
        alert("Mảng chưa có phần tử nào");
        return 1;
    } else {
        return 0;
    }
}

function addNum() {
    var ipNum = document.querySelector("#ipNum").value;
    if (ipNum === "") {
        alert("Xin hãy nhập số!!!");
        return;
    } else {
        listNumber.push(Number(ipNum));
        displayArray();
    }
}

function displayArray() {
    document.querySelector("#txtArray").innerHTML = listNumber.toString();
}

function calcTotal() {
    if (isEmpty()) return;
    var sum = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            sum += listNumber[i];
        }
    }
    document.querySelector("#txtTotal").innerHTML =
        "Tổng các số dương trong mảng: " + sum;
}

function countPositive() {
    if (isEmpty()) return;
    var count = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            count++;
        }
    }
    document.querySelector("#txtCountPos").innerHTML =
        "Số số dương trong mảng: " + count;
}

function findMinNum() {
    if (isEmpty()) return;
    var min = listNumber[0];
    for (let i = 1; i < listNumber.length; i++) {
        if (min > listNumber[i]) {
            min = listNumber[i];
        }
    }
    document.querySelector("#txtMinNum").innerHTML =
        "Số nhỏ nhất trong mảng: " + min;
}

function findMinPos() {
    if (isEmpty()) return;
    var min = listNumber[0];
    for (let i = 1; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            if (min < 0) {
                min = listNumber[i];
            } else if (min > listNumber[i]) {
                min = listNumber[i];
            }
        }
    }
    if (min <= 0) {
        document.querySelector("#txtMinPos").innerHTML =
            "Không có số dương nào trong mảng!";
    } else {
        document.querySelector("#txtMinPos").innerHTML =
            "Số dương nhỏ nhất: " + min;
    }
}

function findLastEven() {
    if (isEmpty()) return;
    var even = -1;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 == 0) {
            even = listNumber[i];
        }
    }
    if (even == -1) {
        document.querySelector("#txtLastEven").innerHTML =
            "Không có số chẵn nào trong mảng";
    } else {
        document.querySelector("#txtLastEven").innerHTML =
            "Số chẵn cuối cùng: " + even;
    }
}

function isValidIndex(index) {
    return index < 0 || index > listNumber.length - 1 ? 0 : 1;
}

function swapNum() {
    if (isEmpty()) return;
    var index1 = document.querySelector("#ipIndex1").value;
    var index2 = document.querySelector("#ipIndex2").value;
    if (index1 === "" || index2 === "") {
        alert("Hãy nhập vị trí hoán đổi!!!");
        return;
    } else if (!isValidIndex(index1) || !isValidIndex(index2)) {
        alert("Vị trí cần hoán đổi phải từ 0 - " + (listNumber.length - 1));
        return;
    }
    var temp = 0;
    var clone = cloneArray();
    temp = clone[index1];
    clone[index1] = clone[index2];
    clone[index2] = temp;
    document.querySelector("#txtSwap").innerHTML =
        "Mảng sau khi hoán đổi: " + clone.toString();
}

function cloneArray() {
    var clone = [];
    for (let i = 0; i < listNumber.length; i++) {
        clone.push(listNumber[i]);
    }
    return clone;
}

function sortAsc() {
    if (isEmpty()) return;
    var temp = 0;
    var clone = cloneArray();
    for (let i = 0; i < clone.length - 1; i++) {
        for (let j = 0; j < clone.length - 1 - i; j++) {
            if (clone[j] > clone[j + 1]) {
                temp = clone[j];
                clone[j] = clone[j + 1];
                clone[j + 1] = temp;
            }
        }
    }
    document.querySelector("#txtSortAsc").innerHTML =
        "Mảng sau khi sắp xếp: " + clone.toString();
}

function findFirstPrime() {
    if (isEmpty()) return;
    var firstPrime = -1;
    for (let i = 0; i < listNumber.length; i++) {
        if (isPrime(listNumber[i])) {
            firstPrime = listNumber[i];
            break;
        }
    }
    if (firstPrime == -1) {
        document.querySelector("#txtPrime").innerHTML =
            "Không có số nguyên tố nào trong mảng";
    } else {
        document.querySelector("#txtPrime").innerHTML =
            "Số nguyên tố đầu tiên: " + firstPrime;
    }
}

function isPrime(num) {
    if (num < 2) return 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return 0;
        }
    }
    return 1;
}

var listNumber2 = [];

function addNum2() {
    var ipNum = document.querySelector("#ipNum1").value;
    if (ipNum === "") {
        alert("Xin hãy nhập số!!!");
        return;
    } else {
        listNumber2.push(Number(ipNum));
        displayArray2();
    }
}

function displayArray2() {
    var content = "";
    for (let i = 0; i < listNumber2.length; i++) {
        content += listNumber2[i] + "<br>";
    }
    document.querySelector("#txtArray2").innerHTML = content;
}

function countInteger() {
    if (listNumber2.length == 0) {
        alert("Mảng chưa có phần tử nào");
        return;
    }
    var count = 0;
    for (let i = 0; i < listNumber2.length; i++) {
        if (Number.isInteger(listNumber2[i])) {
            count++;
        }
    }
    document.querySelector("#txtCountInt").innerHTML =
        "Số số nguyên trong mảng số thực: " + count;
}

function compareNum() {
    var countPos = 0;
    var countNeg = 0;
    for (let i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            countPos++;
        } else if (listNumber[i] < 0) {
            countNeg++;
        }
    }
    if (countPos > countNeg) {
        document.querySelector("#txtCompare").innerHTML =
            "Số lượng số dương nhiều hơn số âm";
    } else if (countPos == countNeg) {
        document.querySelector("#txtCompare").innerHTML =
            "Số lượng số dương bằng số âm";
    } else {
        document.querySelector("#txtCompare").innerHTML =
            "Số lượng số dương ít hơn số âm";
    }
}

document.querySelector("#btnAdd").onclick = addNum;
document.querySelector("#btnCalcTotal").onclick = calcTotal;
document.querySelector("#btnCountPos").onclick = countPositive;
document.querySelector("#btnFindMin").onclick = findMinNum;
document.querySelector("#btnFindMinPos").onclick = findMinPos;
document.querySelector("#btnFindLastEven").onclick = findLastEven;
document.querySelector("#btnSwap").onclick = swapNum;
document.querySelector("#btnSortAsc").onclick = sortAsc;
document.querySelector("#btnFirstPrime").onclick = findFirstPrime;
document.querySelector("#btnCountInt").onclick = countInteger;
document.querySelector("#btnAddNum2").onclick = addNum2;
document.querySelector("#btnCompare").onclick = compareNum;
