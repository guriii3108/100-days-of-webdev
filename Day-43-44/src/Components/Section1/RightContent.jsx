import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div id="right" className='h-full p-4 w-2/3 flex flex-nowrap overflow-auto rounded-2xl gap-3'>
      {props.card.map((elem,idx)=>{
            return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent