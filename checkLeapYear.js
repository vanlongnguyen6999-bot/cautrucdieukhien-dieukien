function checkLeapYear(){
    let nam = Number(document.getElementById("nam").value);
    if(nam % 400 === 0){
        document.getElementById("ketqua").innerText = nam + " la nam nhuan";
    }
    else if(nam % 100 === 0){
        document.getElementById("ketqua").innerText = nam + " khong la nam nhuan";
    }
    else if(nam % 4 === 0){
        document.getElementById("ketqua").innerText = nam + " la nam nhuan";
    }
    else{
        document.getElementById("ketqua").innerText = nam + " khong phai la nam nhuan";
    }
}