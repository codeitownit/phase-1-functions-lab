// Code your solution in this file!
function distanceFromHqInBlocks(customerBlockNuber){
    const scuberBlockNumber = 42;
    if (customerBlockNuber<42) {
        const result=scuberBlockNumber-customerBlockNuber;
return result;
    } else {
        const result=customerBlockNuber-scuberBlockNumber;
        return result;
    }
}
distanceFromHqInBlocks(43);


function distanceFromHqInFeet(customerBlockNumber){
    const scuberBlockNumber = 42;
    if (customerBlockNumber<scuberBlockNumber) {
        const result1 = ((scuberBlockNumber-customerBlockNumber)*264);
        return result1; 
    } else {
        const result1 = ((customerBlockNumber-scuberBlockNumber)*264);
        return result1;
    }
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination){
    
    if (destination<start) {
        const result1 = ((start-destination)*264);
        return result1; 
    } else {
        const result1 = ((destination-start)*264);
        return result1;
    }
}
distanceTravelledInFeet(34, 20);

function calculatesFarePrice(start, destination){
    let feetPerBlock=264;
    let feetTravelled=Math.abs(start-destination)*feetPerBlock;
   
    
    if (feetTravelled<=400) {
        return 0;
    } else if(feetTravelled>400&&feetTravelled<=2000 ) {
        const fareAmount=feetTravelled-400;
        const grossAmount=(fareAmount*2)/100;
        return grossAmount;
    }else if(feetTravelled>2000&& feetTravelled<2500){
        return 25;
    }else{
        
        return 'cannot travel that far';
        
    }
}
calculatesFarePrice(34,32);



