console.log("hello world!");

const proto={
    slogan: function(){
        return "this company is the best";
    },
    changeName:function(newName){
        this.name=newName;
    }
}
const emp1=Object.create(proto,{
    name: { value : "anuj Kumarsla",writable:true},
    role: { value : "programmer"}
});
emp1.changeName("myName");
console.log(emp1);