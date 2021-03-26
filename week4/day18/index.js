fetch('https://opentdb.com/api.php?amount=10')
.then((res)=>{res.json()}) // gabisa karena async , baca res.json rada lama tapi udah ngecall data dibawah
.then((data)=>{console.log(data.results)})

fetch('https://opentdb.com/api.php?amount=10')
.then(respone => respone.json())
.then(data => console.log(data.results))