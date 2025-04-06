function ADD(){
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let txt='';
    let result=num1 + num2;
    txt+='Sum of 2 values='+result+'<br>';
    document.getElementById('demo').innerHTML=txt;

}
function SUB(){
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let txt='';
    let result=num1 - num2;
    txt+='Difference of 2 values='+result+'<br>';
    document.getElementById('demo').innerHTML=txt;
}
function MUL(){
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let txt='';
    let result=num1 * num2;
    txt+='Mul of 2 values='+result+'<br>';
    document.getElementById('demo').innerHTML=txt;
}
function DIV(){
    let num1=parseInt(document.getElementById('num1').value);
    let num2=parseInt(document.getElementById('num2').value);
    let txt='';
    let result=num1 / num2;
    txt+='Division of 2 values='+result+'<br>';
    document.getElementById('demo').innerHTML=txt;
}
    /*result=num1-num2;
    txt+='Difference of 2 values='+result+'<br>';
    result=num1*num2;
    txt+='Mul of 2 values='+result+'<br>';
    result=num1/num2;
    txt+='Division of 2 values='+result+'<br>';
    result=num1%num2;
    txt+='Mod of 2 values='+result+'<br>';
    document.getElementById('demo').innerHTML=txt;
    }

    /*function Compare(){
        let num1=parseInt(document.getElementById('num1').value);
        let num2=parseInt(document.getElementById('num2').value);
        let txt='';
        let result=num1 > num2;
        txt+=result+"<br>";
        result=num1 < num2;
        txt+="num1<num2="+result+"<br>";
        result=num1 >= num2; 
    }*/
    
