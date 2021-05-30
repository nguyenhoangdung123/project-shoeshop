var url = "../excel/data.xlsx";
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

var arrayExcel = null;
 
oReq.onload = function(e){
    var arraybuffer = oReq.response;
    var data = new Uint8Array(arraybuffer);
    var arr = [];
    for(var i = 0; i < data.length; i++){
        arr.push(String.fromCharCode(data[i]));
    }
    var bstr = arr.join("");

    /* Call XLSX */
    var workbook = XLSX.read(bstr, {type:"binary"});

    /* DO SOMETHING WITH workbook HERE */
    var first_sheet_name = workbook.SheetNames[0];
    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    arrayExcel = XLSX.utils.sheet_to_json(worksheet,{raw:true}); 
}
oReq.send(); 
setTimeout(function(){
    var key = null;
    function getKey(){
        var url = window.location.href;
        var index = url.indexOf('=');
        key = url.slice(index + 1, url.length);
    }
    function setInfor(){
        var displayProduct = arrayExcel[Number(key) - 1];
        console.log(displayProduct);
        document.getElementById("brand-name").innerHTML = displayProduct["brand"];
        document.getElementById("display-img").src = displayProduct["img"];
    }
    getKey();
    setInfor();
}, 100);