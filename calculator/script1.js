var oldv=""
var newv=""
var operator=""
let operationCompleted=false
function buttonClick(val){
    if(operationCompleted){
        document.getElementById("screen").value=val
    }else{
        document.getElementById("screen").value+=val
    }
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function plusClick(){
    performCalculation()
    clearDisplay()
    operator="+"
}
function minusClick(){
    performCalculation()
    clearDisplay()
    operator="-"
}
function intoClick(){
    performCalculation()
    clearDisplay()
    operator="*"
}
function divisionClick(){
    performCalculation()
    clearDisplay()
    operator="/"
}
function equalClick(){
    newv=document.getElementById("screen").value
    newv=parseFloat(newv)
    if(operator=="+"){
        oldv+=newv
        document.getElementById("screen").value=oldv
    }else if(operator=="-"){
        oldv-=newv
        document.getElementById("screen").value=oldv
    }else if(operator=="*"){
        oldv*=newv
        document.getElementById("screen").value=oldv
    }else if(operator=="/"){
        oldv/=newv
        document.getElementById("screen").value=oldv
    }
    operator=""
    operationCompleted=true
    
}
function performCalculation(){
    if(operator==""){
        oldv=document.getElementById("screen").value
        oldv=parseFloat(oldv)
    }else{
        newv=document.getElementById("screen").value
        newv=parseFloat(newv)
        if(operator=="+"){
            oldv+=newv
        }else if(operator=="-"){
            oldv-=newv
        }else if(operator=="*"){
            oldv*=newv
        }else if(operator=="/"){
            oldv/=newv
        }
    }
    document.getElementById("screen").value=oldv


}