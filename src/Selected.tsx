

export const Selected = (prop : any) => {
    const selecWorker = prop.datas[0].filter((worker: any) => worker.name + " " + worker.apellido === prop.selec)

    return (
        <>
        {selecWorker.length !== 0 && (
                <div>
                    <h1>{selecWorker[0].name} {selecWorker[0].apellido}</h1>
                    <p>{selecWorker[0].work} especialized in {selecWorker[0].especialización}</p>
                    <p>{selecWorker[0].años_de_experiencia} years experience</p>
                </div>
            )}
        </>
    )}
