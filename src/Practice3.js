// import React, { useEffect, useState } from "react";
// let cacheData = []
// const Practice3 = () => {
//   const [data, setData] = useState([]);
//   const [input, setInput] = useState("");
//   const [cache, setCache] = useState({});

//   const api = async () => {
//     if (cache[input]) {
//       setData(cache[input]);

//       return;
//     }
//     console.log("Api called");
//     const details = await fetch(
//       "https://dummyjson.com/products/search?q=" + input
//     );

//     const response = await details.json();

//     setData(response.products);
//     setCache({ ...cache, [input]: response.products });
//   };

//   useEffect(() => {
//     api();
//   }, [input]);
// console.log(cache)
//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       {data.map((item) => {
//         return <div>{item?.title}</div>;
//       })}
//     </div>
//   );
// };

// export default Practice3;
import React, { useEffect, useRef, useState } from 'react'

const Practice3 = () => {
    const [data,setData] = useState("")
    const inputRef = useRef()
    const [input,setInput] = useState("")



    
async function getData(){
    const data = await fetch("https://fakestoreapi.com/products/")
    const response = await data.json()
    console.log(response)
}

const debouncing=(getData,time)=>{
   let timer;
    return function getting(){
        clearTimeout(timer)
       timer = setTimeout(function(){
            getData()
        },time)
        }


}

useEffect(()=>{
const data = debouncing(getData,1000)
console.log(data)
data()

},[input])
console.log(inputRef.current)
  return (
    <div>
      <input type='text' onChange={(e)=>setInput(e.target.value)} />
    </div>
  )
}

export default Practice3
