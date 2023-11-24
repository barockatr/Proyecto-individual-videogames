import api from '../api'; // Importa tu cliente de API o utiliza fetch directamente

export const fetchGameDetail = (gameId) => {
  return async (dispatch) => {
    try {
      // Realiza una llamada a la API para obtener los detalles del videojuego con el ID proporcionado
      const response = await api.get(`/games/${gameId}`);
      const gameDetail = response.data; 

      // Despacha la acción para actualizar el estado con los detalles del videojuego
      dispatch({ type: 'FETCH_GAME_DETAIL_SUCCESS', payload: gameDetail });
    } catch (error) {
      // Maneja cualquier error de la llamada a la API
      dispatch({ type: 'FETCH_GAME_DETAIL_ERROR', payload: error.message });
    }
  };
};