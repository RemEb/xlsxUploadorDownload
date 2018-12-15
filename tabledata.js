let data1;
let data2 = [];
let removeData = [];
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

/**
 * 根据导入的excel，生成表格
 */
function fillTable() {
    //console.log(Object.keys(data1[0]));
    let tb = document.getElementById('data-table');
    let theads = document.getElementsByTagName('th');

    for (let j = 0; j < data1.length; j++) {
        let newRow = document.createElement('tr');
        for (let i = 0; i < theads.length; i++) {
            let newTd = document.createElement('td');
            //console.log(data1[j][theads[i].innerText]);
            if (data1[j][theads[i].innerText] != null && data1[j][theads[i].innerText] != undefined) {
                newTd.innerHTML = data1[j][theads[i].innerText];
            } else {
                //newTd.innerHTML = '0';
                newTd.innerHTML = "<input class='numtext' onkeyup=\"checkValue(this);\" type='text' id='in" + j + "x" + i + "'>";
            }
            newRow.appendChild(newTd);
        }
        tb.appendChild(newRow);
    }
}

/**
 * 获得table中新输入的值，并添加到原先的数据数组中
 */
function getTableValue() {
    let theads = document.getElementsByTagName('th');
    // 遍历每一个input
    for (let j = 0; j < data1.length; j++) {
        for (let i = 0; i < theads.length; i++) {
            if (document.getElementById("in" + j + "x" + +i) !== null) {
                //console.log(document.getElementById("in" + j + "x" + +i).value);
                //data1[j].push(document.getElementsByTagName('th')[i],document.getElementById("in" + j + "x" + +i).value);
                //console.log(document.getElementsByTagName('th')[i].innerText);
                //console.log(document.getElementById("in" + j + "x" + +i).value);
                if (document.getElementsByTagName('th')[i].innerText === '是否免测（1是）' && document.getElementById("in" + j + "x" + +i).value === '1') {
                    data2.push(data1[j]);
                    removeData.push(data1[j]);
                    continue;
                }
                if (document.getElementsByTagName('th')[i].innerText === '是否免测（1是）' && document.getElementById("in" + j + "x" + +i).value === '') {
                    continue;
                }
                data1[j][document.getElementsByTagName('th')[i].innerText] = document.getElementById("in" + j + "x" + +i).value;
            }
        }
    }
    for (let j = 0; j < data1.length; j++) {
        for (let i = 0; i < removeData.length; i++) {
            if (data1[j] == removeData[i]){
                data1.remove(removeData[i]);
            }
        }
    }
    //console.log(data1);
    //console.log(data2);
}

/**
 * 检查input输入框中值是否符合标准要求
 */
function checkValue(obj) {

    var index = obj.id.split('x')[1];
    if (index == 8) {
        if (/^\d+\.?\d{0,2}$/.test(obj.value)) {
            obj.value = obj.value;
        } else {
            obj.value = obj.value.substring(0, obj.value.length - 1);
            // alert("请输入正确的时间格式（精确到小数点后两位），如8.11（8秒11毫秒）！")
        }
    } else if (index == 11 || index == 12) {
        if (/^\d+\.?\d{0,2}$/.test(obj.value)) {
            obj.value = obj.value;
        } else {
            obj.value = obj.value.substring(0, obj.value.length - 1);
            // alert("精确到小数点后两位，如4.45（4分钟45秒）！")
        }
        if (obj.value.split('.')[1] > 60) {
            alert("请输入正确的时间格式，如4.45（4分钟45秒）！");
            obj.value = 0;
        }
    } else if (index == 15) {
        if (obj.value != 1 && obj.value != '') {
            alert("若免责则填1，其他不填！");
        }
    } else {
        if (obj.value.length == 1) {
            obj.value = obj.value.replace(/[^1-9]/g, '')
        } else {
            obj.value = obj.value.replace(/\D/g, '')
        }
    }
}


