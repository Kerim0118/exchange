document.getElementById("change").addEventListener("click",change);


function change(){

    const xhr=new XMLHttpRequest();

    xhr.open("GET","http://api.exchangeratesapi.io/v1/latest?access_key=b303ed2415723e89e4eef6b2320fd287");

    xhr.onload=function(){
        if(this.status){
            const response=JSON.parse(this.responseText);

            const rate=response.rates.TRY;
            const amount =Number(document.getElementById("amount").value)
            document.getElementById('tl').value=amount*rate;
        }
    }



xhr.send();
}