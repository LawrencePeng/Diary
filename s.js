const arr = [1,3,2,5,4]
const tmp = []
for (let i = 0; i < arr.length; i++) {
	tmp[i] = i;
}

tmp.sort((a, b) => {
	return arr[a] < arr[b]
})

console.log(tmp)
