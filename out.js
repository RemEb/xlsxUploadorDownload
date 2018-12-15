var jsono = [{ //测试数据
    "保质期临期预警(天)": "adventLifecycle",
    "商品标题": "title",
    "建议零售价": "defaultPrice",
    "高(cm)": "height",
    "商品描述": "Description",
    "保质期禁售(天)": "lockupLifecycle",
    "商品名称": "skuName",
    "商品简介": "brief",
    "宽(cm)": "width",
    "阿达": "asdz",
    "货号": "goodsNo",
    "商品条码": "skuNo",
    "商品品牌": "brand",
    "净容积(cm^3)": "netVolume",
    "是否保质期管理": "isShelfLifeMgmt",
    "是否串号管理": "isSNMgmt",
    "商品颜色": "color",
    "尺码": "size",
    "是否批次管理": "isBatchMgmt",
    "商品编号": "skuCode",
    "商品简称": "shortName",
    "毛重(g)": "grossWeight",
    "长(cm)": "length",
    "英文名称": "englishName",
    "净重(g)": "netWeight",
    "商品分类": "categoryId",
    "这里超过了": 1111.0,
    "保质期(天)": "expDate"
}];
var tmpDown; //导出的二进制对象
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

function s2ab(s) { //字符串转字符流
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

// 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
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