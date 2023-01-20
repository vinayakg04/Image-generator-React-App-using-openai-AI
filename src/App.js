import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'

const App = () => {
    const VITE_Open_AI_Key = `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`
    const [prompt, setprompt] = useState("")
    const [result, setresult] = useState('')
    //initialise a configuration managemnet variable
    const configuration = new Configuration({
        apiKey: VITE_Open_AI_Key
    });

    // console.log(import.meta.env.VITE_Open_AI_Key)
    const openai = new OpenAIApi(configuration);

    const generateImage = async () => {
        const res = await openai.createImage({
            prompt: prompt,
            n: 1,//no of images we generate
            size: "1024x1024",
        });
        //The res.data.data[0].url gives us the source link for the image using AI 
        setresult(res.data.data[0].url)
    };
    return (
        <div className='app-main'>
            <h1>Generate an Image using openai API</h1>
            <input className='app-input'
                onChange={(e) => { setprompt(e.target.value) }}
                placeholder="Type something to Generate an image" />
            <button onClick={generateImage}>Generate an image</button>


            {result.length > 0 ? <img className='result-image' src={result || ""} alt='result' /> : "<> </>"}


        </div>
    )

}

export default App