// Start your implementation here
bizarreStringIncrementer = (arg) =>{
    let arrString = arg.split('');
    let lastNumber= new Array();
    let numData = "";
    let numINT;
    let strRemaining = "";
    for(let a in arrString)
    {
        if(!isNaN(arrString[a]))
        {
            lastNumber.push(arrString[a]);
            numData = numData + arrString[a];
        }
        else
        {
            strRemaining = strRemaining + arrString[a];
        }
    }
    if(!isNaN(numData))
    {
        numINT = parseInt(numData);
        numINT= ++numINT;
    }
    strRemaining = strRemaining + numINT;

    console.log(lastNumber);
    console.log(numData);
    console.log(numINT);
    console.log(strRemaining);
}

bizarreStringIncrementer('abc58');
