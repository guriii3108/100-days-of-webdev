import { useCallback, useState,useEffect, useRef } from "react"
const App = () => {
  const [length, setLength] = useState(8); //minimum length 
  const [numberAllowed, setNumberAllowed] = useState(false); //number allowded or not
  const [charAllowed, setCharAllowed] = useState(false) //for character alloweded or not
  const [password, setPassword] = useState() //input field of pass..(main)


  //useRef hook
  const passwordRef=useRef(null)


  const passwordGen=useCallback(()=>{
    let pass =''//empty password
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';//data jisse pass aayega
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$%^&*-+"

    for (let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length + 1) //generate random number //isme only index aaya hai... for character at that index.. below line
      pass += str.charAt(char)  //concatinate the calues in pas... dont use only = use with +
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select() //select the text when clicked on copy
    window.navigator.clipboard.writeText(password) //main window object .... we have clipboard option
  }
  ,[password])



  useEffect(()=>{passwordGen()},[length,numberAllowed,charAllowed,passwordGen])

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 p-4">
      <div className="absolute top-0 inset-x-0 h-12 pointer-events-none">
        <div className="mx-auto mt-3 h-1 w-48 rounded-full bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-pink-500/60 blur-[1px]"></div>
      </div>
      <div className="absolute top-6 text-center">
        <h1 className="text-3xl md:text-4xl tracking-tight font-semibold drop-shadow-sm">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Password Generator</span>
        </h1>
        <p className="text-xs md:text-sm text-zinc-400 mt-1">Create strong, unique passwords instantly</p>
      </div>
      <div className="w-full max-w-lg mx-auto rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-zinc-800/50 to-zinc-900/40 backdrop-blur-md px-4 py-5 shadow-2xl shadow-black/30">
        <div className=" gap-2 sm:gap-3 flex rounded-xl mb-4"> 
          <input 
          ref={passwordRef}
          type="text" 
          value={password}
          placeholder="Your secure password"
        className="outline-none overflow-x-auto w-full py-2.5 px-3 rounded-xl bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border border-white/10 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 transition"
        readOnly
        />
        <button onClick={copyPasswordToClipboard}
         className="shrink-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:from-blue-600 active:to-indigo-600 cursor-pointer px-4 py-2 rounded-xl border border-white/10 transition shadow-md shadow-blue-900/30 hover:shadow-blue-900/40">
          📋 Copy
        </button>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex items-center gap-3">
            <input type="range" 
            min={8}
            max={100}
            value={length} 
            className="cursor-pointer w-full accent-blue-500"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-200">{length}</span>
            <label className="ml-auto text-zinc-300">Length</label>
          </div>

           <div className="flex items-center gap-2">
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            className="size-4 accent-blue-500"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }} /> <label htmlFor="numberInput" className="text-zinc-200">Numbers</label>
           </div>

           <div className="flex items-center gap-2">
            <input type="checkbox" 
            defaultChecked={charAllowed}
            id="characterInput"
            className="size-4 accent-blue-500"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }} /><label htmlFor="characterInput" className="text-zinc-200">Symbols</label>
           </div>
        </div>
      </div>
    </div>
  )
}

export default App