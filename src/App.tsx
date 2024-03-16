import { useFetch } from "./useFetch";
import { useState } from "react";
import {Selected} from "./Selected.tsx"
import { Autocomplete } from "./Autocomplete.tsx";

export const App = () => {
  const data : any = useFetch()

  const [value, setValue] = useState("")
  const [selected, setSelected] = useState("")

  function s (s){
    setValue(s)
  }

  return (
    <>
      <form className="flex justify-center mt-[100px] w-[100vw]" onSubmit={(e)=>{;setSelected(value);e.preventDefault()}}>
        <input className="w-[300px]" onChange={(e)=>{setValue(e.target.value)}} type="text" value={value} />
      </form>
      {
        value !== "" && (
          <div className="flex items-center flex-col">
            <Autocomplete data={data} value={value} setValue={s}/>
          </div>
        )
      }
      {
        selected !== "" && (
          <Selected datas={data} selec={selected} />
        )
      }
    </>
  )
}
