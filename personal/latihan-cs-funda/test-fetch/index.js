// const axios = require('axios').default;
// // edit code bagusin

// let data1, data2, data3, data4, data5;

// let dataAkhir = {
//     data_count: 0,
//     data: []
// }

// function getFetch(url) {
//     axios.get(url)
//     .then((res) => {
//         if (!data1) {
//             data1 += res.data.results
//         } else if (!data2) {
//             data2 += res.data.results
//         } else if (!data3) {
//             data3 += res.data.results
//         } else if (!data4) {
//             data4 += res.data.results
//         } else if (!data5) {
//             data5 += res.data.results
//         } else {
//             return pushData()
//         }
//         if (res.data.next.length) {
//             getFetch(`${res.data.next}`)
//         } else {
//             return pushData()
//         }
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

// function pushData() {
//     var result = [];
//     for (var i = 0; i < data1.length; i++) {
//         result.push({ticker: `${data1[i].ticker}`})
//     }
//     for (var i = 0; i < data2.length; i++) {
//         result.push({ticker: `${data2[i].ticker}`})
//     }
//     for (var i = 0; i < data3.length; i++) {
//         result.push({ticker: `${data3[i].ticker}`})
//     }
//     for (var i = 0; i < data4.length; i++) {
//         result.push({ticker: `${data4[i].ticker}`})
//     }
//     for (var i = 0; i < data5.length; i++) {
//         result.push({ticker: `${data5[i].ticker}`})
//     }
//     dataAkhir.data = result
//     dataAkhir.data_count = dataAkhir.data.length
//     console.log(dataAkhir)
// }

// getFetch('https://api.asklora.ai/api-universe/universe/?page_size=25&month=null&currency=USD&fields=ticker,ticker_name,ticker_fullname,country_code,latest_price,latest_price_change,currency,stock_image,wts_rating,dlp_1m,dlp_3m,fundamentals_quality,fundamentals_value,is_decimal,industry_group_code')

const axios = require('axios').default;

let url = 'https://api.asklora.ai/api-universe/universe/?page_size=25&month=null&currency=USD&fields=ticker,ticker_name,ticker_fullname,country_code,latest_price,latest_price_change,currency,stock_image,wts_rating,dlp_1m,dlp_3m,fundamentals_quality,fundamentals_value,is_decimal,industry_group_code';

let count = 5, dataFetch = [], dataAkhir = { data_count: 0, data: [] };

getFetch(url)

function getFetch(url) {
    axios.get(url)
    .then((res) => {
        while (count) {
            if (res.data.next) {
                dataFetch = [...dataFetch, ...res.data.results]
                dataAkhir.data = dataFetch.map((val) => ({ticker: val.ticker}))
            } else {
                count = 0;
            }
            count--;
        }
        dataAkhir.data_count = dataAkhir.data.length;
        console.log(dataAkhir)
    })
    .catch((err) => {
        console.log(err)
    })
}