let data = [{
    "年级编号": "41",
    "班级名称": "17市场营销（2）",
    "学籍号": "1701041101",
    "姓名": "孟思艳",
    "性别": "2"
}, {
    "年级编号": "41",
    "班级名称": "17土木工程（3+4）（2）",
    "学籍号": "1706202055",
    "姓名": "吴思捷",
    "性别": "2"
}, {
    "年级编号": "41",
    "班级名称": "17土木工程（3+4）（2）",
    "学籍号": "1706202049",
    "姓名": "尤倩茹",
    "性别": "2"
}, {
    "年级编号": "41",
    "班级名称": "17市场营销（2）",
    "学籍号": "1701041115",
    "姓名": "陈静",
    "性别": "2"
}];


/**
 * 根据导入的excel，生成表格
 */
function fillTable() {
    //console.log(Object.keys(data[0]));
    let tb = document.getElementById('data-table');
    let theads = document.getElementsByTagName('th');

    for (let j = 0; j < data.length; j++) {
        let newRow = document.createElement('tr');
        for (let i = 0; i < theads.length; i++) {
            let newTd = document.createElement('td');
            //console.log(data[j][theads[i].innerText]);
            if (data[j][theads[i].innerText] != null && data[j][theads[i].innerText] != undefined) {
                newTd.innerHTML = data[j][theads[i].innerText];
            } else {
                //newTd.innerHTML = '0';
                newTd.innerHTML = "<input class='numtext' onkeyup=\"checkValue(this);\" type='text' id='in" + j + i + "'>";
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
    for (let j = 0; j < data.length; j++) {
        for (let i = 0; i < theads.length; i++) {
            if (document.getElementById("in" + j + i) !== null)
                console.log(document.getElementById("in" + j + i).value);
        }
    }
}

/**
 * 检查input输入框中值是否符合标准要求
 */
function checkValue(obj) {
    console.log(obj.value);
}
