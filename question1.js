//*******Question 1: ES6 Features*******
function lowerCaseWords(mixedArray = []){
    var output = [];
    return new Promise((resolve,reject) => {

        if(mixedArray){
            for(var i = 0; i < mixedArray.length; i++){
                if(typeof mixedArray[i] === 'string'){
                    output.push(mixedArray[i]);
                }
            }
            resolve(output.map(v => v.toLowerCase()))
        }
        reject("Error");
    })
}
const mixedArray = ['PIZZA',10,true,25,false,'Wings'];
lowerCaseWords(mixedArray)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
