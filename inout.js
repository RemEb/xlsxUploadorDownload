var wb;// 读取完成的数据
var rABS = false; // 是否将文件读取为二进制字符串
var tmpDown; // 导出的二进制对象
let data1; // 从excel中获得的对象数组
let data2 = []; // 免测学生的对象数组
let removeData = []; // 记录免测学生的对象数组，用于后期再data1中移除免测学生
let tb = document.getElementById('data-table'); // 表格对象

/**
 * 定义remove方法，移除data中val的元素
 * @param val
 */
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

/**
 * 导入excel数据，并创建表格
 * @param obj
 */
function importf(obj) {
    let jsono;
    if (!obj.files) {
        return;
    }
    var f = obj.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        if (rABS) {
            wb = XLSX.read(btoa(fixdata(data)), {//手动转化
                type: 'base64'
            });
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }
        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        jsono = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        //document.getElementById("demo").innerHTML = JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
        data1 = jsono;
        //console.log(JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])));
        fillTable();
    };
    if (rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
}

/**
 * 文件流转BinaryString
 * @param data
 * @returns {string}
 */
function fixdata(data) {
    var o = "",
        l = 0,
        w = 10240;
    for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
}

/**
 * 导出excel
 * @param json
 * @param type
 */
function downloadExl(json, type) {
    var tmpdata = json[0];
    json.unshift({});
    var keyMap = []; //获取keys
    //keyMap =Object.keys(json[0]);
    for (var k in tmpdata) {
        keyMap.push(k);
        json[0][k] = k;
    }
    var tmpdata = [];//用来保存转换好的json
    json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
        v: v[k],
        position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
    }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
        v: v.v
    });
    var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
    var tmpWB = {
        SheetNames: ['mySheet'], //保存的表标题
        Sheets: {
            'mySheet': Object.assign({},
                tmpdata, //内容
                {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                })
        }
    };
    tmpDown = new Blob([s2ab(XLSX.write(tmpWB,
        {bookType: (type == undefined ? 'xlsx' : type), bookSST: false, type: 'binary'}//这里的数据是用来定义导出的格式类型
    ))], {
        type: ""
    }); //创建二进制对象写入转换好的字节流
    var href = URL.createObjectURL(tmpDown); //创建对象超链接
    document.getElementById("hf").href = href; //绑定a标签
    document.getElementById("hf").click(); //模拟点击实现下载
    setTimeout(function () { //延时释放
        URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
    }, 100);
}

/**
 * 字符串转字符流
 * @param s
 * @returns {ArrayBuffer}
 */
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

/**
 * 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
 */
function getCharCol(n) {
    let temCol = '',
        s = '',
        m = 0
    while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
    }
    return s
}

/**
 * 根据导入的excel，生成表格
 */
function fillTable() {
    clearTable();
    //console.log(Object.keys(data1[0]));
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
                if (document.getElementsByTagName('th')[i].innerText === '是否免测（1是）' && document.getElementById("in" + j + "x" + i).value === '1'
                    && document.getElementById("in" + j + "x" + +i).value !== "") {
                    data2.push(data1[j]);
                    removeData.push(data1[j]);
                    continue;
                }
                if (document.getElementsByTagName('th')[i].innerText === '是否免测（1是）' && document.getElementById("in" + j + "x" + i).value === '') {
                    continue;
                }
                data1[j][document.getElementsByTagName('th')[i].innerText] = document.getElementById("in" + j + "x" + i).value;
            }
        }
    }
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
            obj.value = 1;
        }
    } else {
        if (obj.value.length == 1) {
            obj.value = obj.value.replace(/[^1-9]/g, '')
        } else {
            obj.value = obj.value.replace(/\D/g, '')
        }
    }
}

/**
 * 清空表格
 */
function clearTable() {
    let rowNum = tb.rows.length;
    for (let i = 1; i < rowNum; i++) {
        tb.deleteRow(i);
        rowNum = rowNum - 1;
        i = i - 1;
    }

}

/**
 * 得到及格率
 * @returns {*[]}
 */
function getPassRate() {
    let passData = 1 - count / all;
    return passData.toFixed(2);
}

/**
 * 在data1中将免测学生删除
 */
function deleteRemoveData() {
    for (let j = 0; j < data1.length; j++) {
        for (let i = 0; i < removeData.length; i++) {
            if (data1[j] == removeData[i]) {
                data1.remove(removeData[i]);
            }
        }
    }
}

/**
 * 得到网页表格中数据的excel
 * @param data
 * @returns {Array}
 */
function getSaveData(data) {
    let saveData = [];

    for (var i = 0; i < data.length; i++) {
        //规定顺序
        saveData[i] = {
            "年级编号": "",
            "班级名称": "",
            "学籍号": "",
            "姓名": "",
            "性别": "",
            "身高": "",
            "体重": "",
            "肺活量": "",
            "50米跑": "",
            "立定跳远": "",
            "坐位体前屈": "",
            "800米跑": "",
            "1000米跑": "",
            "一分钟仰卧起坐": "",
            "引体向上": "",
        };
        //调整并且输出调整后的顺序
        for (var key in saveData[i]) {
            saveData[i][key] = data[i][key];
        }
    }
    return saveData;
}

