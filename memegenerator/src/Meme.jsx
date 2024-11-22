import React from "react";
import pic from "./assets/vecteezy_picture-image-icon_22207263.png"
import memesData from "./memesData"

 export default function Meme(){
  const [memeImage,setmemeImage]=React.useState(
    {
      topText:"",
      bottomText:"",
      randomImage:"http://i.imgflip.com/1bij.jpg" 
    }
  )
  const [allMemeImages,setAllMemeImages]=React.useState([])

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setAllMemeImages(data.data.memes))
  }

  )


  function getmemeImage(){
    const memesArray=memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url=memesArray[randomNumber].url
    setmemeImage(prev=>({
      ...prev,randomImage:url
    }))
  }

  function handleChange(event){
    const{name,value}=event.target
    setmemeImage(prev=>({
      ...prev,
      [name]:value
    }))

  }

    return(
        <main>
            <div className="form">
                <div className="lable_container">
                  <label>Top text</label>
                    <input type="text" placeholder="Top text" className="input"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange} />
                  
                </div>
                <div className="lable_container">
                  <label>Bottom taxt</label>
                    <input type="text" placeholder="Bottom text" className="input"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}/>
                  
                </div>
                <button onClick={getmemeImage} className="btn">Get a new meme image 🖼</button>
              </div>
              <div className="meme">
                <img  className="meme_img" src={memeImage.randomImage}/>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
              </div>
        </main>
    )
 }