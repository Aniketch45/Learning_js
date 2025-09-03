var a,b,result;
function add()
{
    a=parseInt(document.myform.num1.value);
    b=Number(document.myform.num2.value);
    result=a+b;

    document.myform.res.value=result.toFixed(2);
}
function sub()
{
    a=parseInt(document.myform.num1.value);
    b=Number(document.myform.num2.value);
    result=a-b;

    document.myform.res.value=result.toFixed(2);
}
function mul()
{
    a=parseInt(document.myform.num1.value);
    b=Number(document.myform.num2.value);
    result=a*b;

    document.myform.res.value=result.toFixed(2);
}
function div()
{
    a=parseInt(document.myform.num1.value);
    b=Number(document.myform.num2.value);
    result=a/b;

    document.myform.res.value=result.toFixed(2);
}
