export const setLocalToken = token => localStorage.setItem('token', token)
export const getLocalToken = () => localStorage.getItem('token')
export const deleteLocalToken = () => localStorage.removeItem('token')
