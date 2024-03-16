
export const Autocomplete = (props : any) => {


  return (
    <>
        {
            props.data[0].map((worker : any)=>{
                const completeName = worker.name + " " + worker.apellido
                if (completeName.toLowerCase().includes(props.value.toLowerCase())){
                    return(<div key={worker.id} onClick={()=>{props.setValue(completeName)}} className="bg-white hover:bg-gray-200 cursor-pointer w-[300px] mt-[1px] ">
                        <p className=" select-none">{completeName}</p>
                    </div>)
                }
            })
        }
    </>
  )
}
