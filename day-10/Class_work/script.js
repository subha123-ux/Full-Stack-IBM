let str="SV University";

console.log(str.length)

console.log(str[str.length-1])

str[0]="R"
console.log(str)

let arr=[1,2,3,"Subhajit",1.2,true,false,null,undefined];
console.log(arr[3])
arr[3]="Jit";
console.log(arr)
console.log(arr[arr.length-1]);

arr.push("Ranit")
console.log(arr)
arr[4]="Ranit";
console.log(arr)

arr.pop()
console.log(arr)

//object

//Object Literal
const obj={
    Subhajit:{"class":"B.Tech","Year":3,"Roll":184,"Subjiect":["DBMS","CN","NM","DM","FS"]},
    Raju:{"class":"B.Tech","Year":3,"Roll":104,"Subjiect":["DBMS","CN","NM","FS"]},
    1:25
}
console.log(obj)

console.log(obj.Subhajit.Subjiect[0])
obj["1"]="Jit";
console.log(obj)
delete obj["1"]
console.log(obj)


delete obj["Subhajit"]
console.log(obj)

obj.Virat={"class":"BCC1","Year":3,"Roll":104,"Subjiect":["DBMS","CN","NM","FS"]}
console.log(obj)

obj.Virat={"class":"ICC","Year":3,"Roll":104,"Subjiect":["DBMS","CN","NM","FS"]}
console.log(obj)



let name="Preet";
let Class="BCA"
let sub="FS"
let newObj={name,Class,sub}
console.log(newObj)


//new key word
//Constructor