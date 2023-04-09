
const inp = document.querySelector("input");
const btn = document.getElementById("search");
const boxx = document.getElementById("box");


btn.addEventListener('click',()=>{
  let input =inp.value;
  console.log(input);
  // document.querySelector(".title").innerHTML = input;
  fetch(`https://api.jikan.moe/v4/anime?q=${input}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.data[1].title)
      console.log(data.data[0].images.webp)

      boxx.innerHTML = data.data.map((item,i)=>(
        
        ` <a href="${item.url}">
        <div class="boxChild">
          <img class="image"
            src=${item.images.jpg.image_url} />  
          <h2 class="title">${item.title}</h2>
          
        </div>
        </a>` 
       ))
         
        
    });
})

// const 
  /*
  define global variable to store anime data
  onclick fetch the api
  store the api data inb global var

  */
