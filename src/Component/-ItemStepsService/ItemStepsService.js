import './ItemStepsService.css'

const ItemStepsService = (prpos) => {
  return (
   <>
    <li>{prpos.step1}</li>
    <li>{prpos.step2}</li>
    <li>{prpos.step3}</li>
    <li>{prpos.step4}</li>
    <li>{prpos.step5}</li>
    </>
  )
}

export default ItemStepsService