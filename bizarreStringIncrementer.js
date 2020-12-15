// Start your implementation here
bizarreStringIncrementer = (arg) =>{
    let arrString = arg.split('');
    let lastNumber= new Array();
    let numData = "";
    let numINT;
    let strRemaining = "";
    let continueousNum = false;

    for(let a in arrString)
    {
        if(!isNaN(arrString[a]))
        {
            lastNumber.push(arrString[a]);
            numData = numData + arrString[a];
        }
        else{
            numData = new Array();
        }
    }
    if(!isNaN(numData))
    {
        numINT = parseInt(numData);
        numINT = ++numINT;
    }
    for(let i=0;i<numData.length;i++){
        arrString.pop();
    }

    for(let a in arrString)
    {
        strRemaining = strRemaining.concat(arrString[a]);
    }
    if(numData.length>0){
        strRemaining  = strRemaining.concat(numINT);
    }
    else{
        strRemaining = strRemaining.concat("1");
    }


    // console.log(lastNumber);
    // console.log(numData);
    // console.log(numINT);
    console.log(strRemaining);
}

bizarreStringIncrementer('a12an');
bizarreStringIncrementer('a12an21');
