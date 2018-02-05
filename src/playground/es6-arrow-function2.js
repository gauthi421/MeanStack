//Arrow functions no longer support arguments object and this.


const multiplier = {
arryNos:[1,6],
multiplyBy: 2,

multiply(){ return this.arryNos.map((no)=> no*this.multiplyBy)}
}
document.write("write"+ multiplier.multiply()[1]);

