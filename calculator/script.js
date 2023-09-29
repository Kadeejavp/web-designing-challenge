function buttonClick(val){
    document.getElementById("screen").value+=val
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var input=document.getElementById("screen").value
    var result=eval(input)
    document.getElementById("screen").value=result
}