import { Redirect } from "react-router-dom"

export const isLoggedIn = (usuario, componente, ruta) => {
    return usuario ? componente : <Redirect to={ruta} />;
}