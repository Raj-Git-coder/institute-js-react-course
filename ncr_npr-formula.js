let n=5;
let r=3;
// let nfact;

// console.log(fact);

let calculateFactorial = (var_) =>
{
    let fact = 1;
    for(let i=var_; i>0; i--)
    {
        // console.log(i);
        fact*=i;
    }
    return fact;
}

let ncr_npr_FormulaCalculator = (n,r) =>
{
    if(n<r)
    {
        console.log("the set or population (n) must be greater than subset of n or sample set (r)")
    }
    else
    {
        let arr = [n,r,n-r];
        let arrFact = [];
    
        arr.forEach(element =>
        {
            // console.log(element);
            // calculateFactorial(element);
            // console.log(calculateFactorial(element));
    
            arrFact.push(calculateFactorial(element));
    
        });
        // console.log(arrFact);
        let nfact = arrFact[0];
        let rfact = arrFact[1];
        let nMinusrFact = arrFact[2];
    
        // console.log(nfact, rfact);
    
        // return nfact/(rfact*nMinusrFact), nfact/nMinusrFact;
        console.log("nCr("+n+", "+r+") = "+nfact/(rfact*nMinusrFact));
        console.log("nPr("+n+", "+r+") = "+nfact/(nMinusrFact));
    }
    


}
// console.log("ncr("+n+", "+r+") = "+ncr_npr_FormulaCalculator(n,r));
ncr_npr_FormulaCalculator(n,r);