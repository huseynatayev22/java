var drp=document.querySelector(".dropare .drop")

drp.addEventListener("dragover",function(e){
    e.preventDefault()
    this.classList.add("active");
})
drp.addEventListener("dragleave",function(){
    this.classList.remove("active");
})
drp.addEventListener("drop",function(e){
    e.preventDefault()
    this.classList.remove("active");

    FillTable(e.dataTransfer.files)
})

function FillTable(images){
    for(var img of images){
        if(img.type.match("image*")){
            const tr=document.createElement("tr");
            const reader=new FileReader();
            reader.onload=function(fl){
                const imgetd=document.createElement("td")

                const myimg=document.createElement("img")
                myimg.src=fl.target.result
                myimg.width=200;
                myimg.height=200;

                imgetd.appendChild(myimg);
                tr.insertBefore(imgetd,tr.firstChild)



            }
            reader.readAsDataURL(img);
            document.querySelector(".maintable tbody").appendChild(tr)



        }
    }
}

