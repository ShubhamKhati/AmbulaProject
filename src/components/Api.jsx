/*Api:

Description: Renders the API component to display a random cat image from an external API.
Functionality: Fetches a random cat image using thecatapi.com API and displays it. Allows the user to click a button to fetch a new image.*/


import  {useState} from 'react';
import './Api.css'
function Api() {
    const [imgUrl,setUrl]=useState("https://cdn2.thecatapi.com/images/DZba-eH_4.jpg");
    const callImg=()=>{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json())
        .then(data=>setUrl(data[0].url));
    }
  return (
    <>
      <div className='container'>
          <div className='box'>
            <h2>Enjoy the kitty MeOw!</h2><br></br>
            <img src={imgUrl} alt="" />
            <button onClick={()=>callImg()}>ClickMe</button>
          </div>

      </div>
    </>

  )
}

export default Api