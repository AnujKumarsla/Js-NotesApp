console.log('Hello');

function RanBetween(x,y){
    return (x+(y-x)* Math.random());
}

for(let i=0;i<50;i++){
    x=RanBetween(24,35)
    console.log(Math.ceil(x));}