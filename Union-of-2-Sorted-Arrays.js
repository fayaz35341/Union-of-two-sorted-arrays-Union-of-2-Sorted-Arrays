/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    findUnion(a, b) {
        // code here
        let unionArr=[]
        let n1=a.length
        let n2=b.length 
        let i=0
        let j=0 
        while (i<n1 && j<n2){
            if (a[i]===b[j]){
                if (a[i] !== unionArr[unionArr.length-1] || unionArr.length===0){
                    unionArr.push(a[i])
                }
                i++;
                j++;
            }
            else if (a[i]<b[j]){
                if (a[i] !== unionArr[unionArr.length-1] || unionArr.length===0){
                    unionArr.push(a[i])
                }
                i++;
            }
            else{
                if (b[j] !== unionArr[unionArr.length-1] || unionArr.length===0){
                    unionArr.push(b[j])
                }
                j++;
            }
        }
        while (i<n1){
            if (a[i] !== unionArr[unionArr.length-1] || unionArr.length===0){
                unionArr.push(a[i])
            }
            i++;
        }
        while (j<n2){
            if (b[j] !== unionArr[unionArr.length-1] || unionArr.length===0){
                unionArr.push(b[j])
            }
            j++;
        }
        return unionArr
    }
}

let a[] = [1, 2, 3, 4, 5], 
let b[] = [1, 2, 3, 6, 7]
console.log(new Solution().findUnion(a, b)) 
// Output: [1, 2, 3, 4, 5, 6, 7]
