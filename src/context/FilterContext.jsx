import { createContext } from 'react'
import { useFilters } from '../hooks/useFilters'
const FilterContext = createContext()

function FilterContextProvider({ children }) {
    const { filteredProducts, minPrice, changeMinPrice, changeCategory } = useFilters()
    return <FilterContext.Provider value={{
        filteredProducts,
        minPrice,
        changeMinPrice,
        changeCategory
    }}>
        {children}
    </FilterContext.Provider>
}

export { FilterContext, FilterContextProvider }