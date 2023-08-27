//task 1
let Number = [8, 5, 7, 3, 6, 4, 1, 0];
function SelcSort (Number){
let n= Number.length;
for ( i=0;i<n-1;i++){
    let iMin=i ;
    for(j=i+1;j<n;j++ ){
        if(Number[j] < Number[iMin]){
            iMin=j;
        }
    }
    if (iMin !== i) {
        let temp = Number[i];
        Number[i] = Number[iMin];
        Number[iMin] = temp;
      }
    
    
    return Number;
}}
let FinalList = SelcSort(Number);
console.log(FinalList);

//buble
function bubbleSort(Number) {
    let n= Number.length;
    for(let i = 0 ; i < n; i++){
        for (let j = 1 ; j < n; j++){
            if( Number[j] > Number[j -1]){
                let temp = Number[j];
                Number[j] = Number[j -1]
                Number[j -1] = temp
            }
        }
    }
    return Number
}
let FinalList1 = bubbleSort(Number);
console.log(FinalList1);
//insertion
function insertionSort(Number){
    let n= Number.length;
    for(let i = 0; i < n; i++){
        currentNumber = Number[i]
        let j = i - 1
        while(j >= 0 && Number[j] > currentNumber){
            Number[j +1] = Number[j];
            j--
        }
        Number[j + 1] = currentNumber
    }
    return Number
}
let FinalList2 = insertionSort(Number);
console.log(FinalList2);
//linear
function linearSearch(Number, value){
    let existItem = false ;
     for(let i = 0; i < Number.length; i++){
        if( Number[i] == value) {
            existItem = true
        }
     }
     return existItem ? "Item found !" : "Not found !"
}
let FinalList3 = linearSearch(Number, 1);
console.log(FinalList3);
//Matrix

let matrix = [
    [4, 9, 6],
    [8, 4, 2],
    [6, 1, 3], ];
    function countZeros(matrix) {
        let cnt = 0;
        let n = matrix.length;
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
              cnt++;
            }
          }
        }
      
        return count;
      }
let Resultat= countZeros(matrix);
console.log(Resultat);





