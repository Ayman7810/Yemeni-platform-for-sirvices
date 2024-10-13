import './ItemListFooter.css'

const ItemListFooter = (prpos) => {
  return (
    <li className="menu-item">
        <a href={prpos.href}>{prpos.text}</a>
        
    </li>
  )
}

export default ItemListFooter