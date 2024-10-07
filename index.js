require('dotenv').config();

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)

const apiKey = '36lW5ujA0bV2qymxm2xyaPDKsFsOtNYl';
// const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}\&q=${encodeURIComponent(query)}\&limit=1\&offset=0\&rating=g\&lang=en`; 

// console.log(apiKey)

async function getImages(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}\&q=${encodeURIComponent(query)}\&limit=1\&offset=0\&rating=g\&lang=en`;
   // try {
     //   const response = await fetch(endpoint)
       // const data = await response.json()
        //let url = data.data[0].url
        //console.log(url)

    // }catch(error){
    //     console.error(error)
   //  }

   const response = await fetch(endpoint)
   const data = await response.json()
   let url = data.data[0].url 
   console.log(url)

    
}
getImages("dogs")

