import React from "react";

export default function Meme() {
    let url;
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText : "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    return(
        <main>
            <div className="form">
                <input 
                type="text"
                placeholder="Shut up"
                className="form--text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                 />

                <input 
                type="text" 
                placeholder="and take the money" 
                className="form--text" 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />

                <button 
                className="form--button" 
                onClick={getMemeImage}>
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src = {meme.randomImage} className="meme--Image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}