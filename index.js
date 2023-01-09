const cheerio = require('cheerio')
const request = require('request')
const express = require('express')
const axios = require('axios')

const app = express()
// const website = "https://woodstock.reformationbrewery.com"



request("https://woodstock.reformationbrewery.com", (error, response, html) => {
    if(!error & response.statusCode == 200) {
        const $ = cheerio.load(html)

        $("#panel > div > section > div > div").each((i, beer) => {
            const name = $(beer)
                // .find(".beer-card__primary > h3")
                .find(".beer-card__primary > h3")
                .text()
                .replace(/\s\s+/g, "")
            // const style = $(beer)
            //     .find(".beer-card__style")
            //     .text()

                let content = []
                content.push({
                    name
                })
                app.get('/', (req, res) => {
                    res.json(content)

                })
                
        
        // console.log(name.trim())

    })

}

})


// request("https://canton.reformationbrewery.com", (error, response, html) => {
//     if(!error & response.statusCode == 200) {
//         const $ = cheerio.load(html)

//         $("#panel > div > section > div > div").each((i, beer) => {
//             const name = $(beer)
//                 // .find(".beer-card__primary > h3")
//                 .find(".beer-card__primary > h3")
//                 .text()
//                 .replace(/\s\s+/g, "\n")
//         let content = []

//         content.push({
//             name
//         })
                
        
//         // console.log(name.trim())

//     })

// }

// })




// try {
//     axios(website).then((response) => {
//       const html = response.data;
//       console.log(html)
//     })
//   } catch (error) {
//     console.log(error, error.message)
//   }

// try {
//    request("https://woodstock.reformationbrewery.com", (error, response, html) => {
//     if(!error & response.statusCode == 200) {
//         const $ = cheerio.load(html)

//         $("#panel > div > section > div").each((i, beer) => {
//             const name = $(beer)
//                 .find(".beer-card__primary > h3")
//                 .text()
//             const style = $(beer)
//                 .find('#panel > div > section > div > div > div > a > div.beer-card__primary > div > div.beer-card__style')
//                 .text()
//         console.log(name)
        
//         // let content = []

//         // content.push({
//         //     name
//         // })
//         // app.get('/', (req, res) => {
//         //     res.join(content)
//         // })

        

//     })

// }

// })
// // } catch (error) {
// //     console.log(error, error.message)
// // }



const PORT = process.env.port || 3000

app.listen(PORT, () => {
     console.log(`Server listening on PORT ${PORT}`)
 })

