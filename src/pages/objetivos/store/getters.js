export const getObjetivos = ({ objetivos }) => objetivos

export const getObjetivoById = (state) => (id) => {
    return state.objetivos.find(objetivo => objetivo.id === id)
}