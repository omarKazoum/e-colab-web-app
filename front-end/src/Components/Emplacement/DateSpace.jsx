export default function DateSpace({openspaceName,date,setDate}) {
    console.log('date fromparent',date)
    return (
        <section className="flex justify-around text-2xl">
            <div className="bg-white">
                <p>
                    {openspaceName}
                </p>
            </div>
            <div className="bg-white ">
                <p>
                    <input type="date" value={date} onChange={(e)=>{setDate(new Date(e.target.value))}}/>
                </p>
            </div>
        </section>
    )
}