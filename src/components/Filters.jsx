import { useId } from 'react'
import { FilterContext } from '../context/FilterContext'
import { useContext } from 'react'
import './filters.css'
function Filters() {
    const minPriceId = useId()
    const categoryId = useId()

    const { minPrice, changeMinPrice, changeCategory } = useContext(FilterContext)

    function handleMinPrice(event) {
        changeMinPrice(event.target.value)
    }
    function handleCategory(event) {
        changeCategory(event.target.value)
    }
    
    return (
        <section className="filters-container">
            <section className="filter-single">
                <label htmlFor={minPriceId}>Min price</label>
                <input
                type="range"
                name={minPriceId}
                id={minPriceId}
                className="min-price-input"
                value={minPrice}
                onChange={handleMinPrice}
                max="1000"
                />
                <p>{minPrice}</p>
            </section>
            <section className="filter-single">
                <label htmlFor={categoryId}>Categoria</label>
                <select id={categoryId} onChange={handleCategory}>
                    <option value="all">All</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="furniture">Furniture</option>
                    <option value="groceries">Groceries</option>
                </select>
            </section>
        </section>
    )
}
export { Filters }