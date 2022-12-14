import "./App.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import MainNavigation from "./components/Navigation/MainNavigation";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";
import LoginPage from "./pages/LoginPage";
import ComoFunciona from "./pages/ComoFunciona";
import Profile from "./pages/Profile";
import NotificacionesProfesor from "./pages/NoficacionesProfesor";
import MisCursos from "./pages/MisCursos";
import UpdateUser from "./pages/UpdateUser";
import CursoPage from "./pages/CursoPage";
import UpdateCurso from "./pages/UpdateCurso";
import CreateCursoPage from "./pages/CreateCursoPage";
import ContratacionPage from "./pages/ContratacionPage";
import ContratacionesProfesor from "./pages/ContratacionesProfesor";
import ForgotPassword from "./pages/ForgotPassword";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";
import MisComentarios from "./pages/MisComentarios";

function App() {
	const { token, login, logout, userId, userType } = useAuth();

	let routes;
	if (token) {
		if (userType === "estudiante") {
			routes = (
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/:userId/cursos" exact>
						<MisCursos />
					</Route>
					<Route path="/cursos/:userId/:cursoId/ContratacionPage" exact>
						<ContratacionPage />
					</Route>
					<Route path="/comoFunciona" exact>
						<ComoFunciona />
					</Route>
					<Route path="/:userId/notificaciones" exact>
						<NotificacionesProfesor />
					</Route>
					<Route path="/users/:userId" exact>
						<UpdateUser />
					</Route>
					<Route path="/cursos/:cursoId" exact>
						<CursoPage />
					</Route>
					<Route path="/:userId/perfil" exact>
						<Profile />
					</Route>
					<Route path="/:userId/comentarios" exact>
						<MisComentarios />
					</Route>
					<Redirect to="/" />
				</Switch>
			);
		} else {
			routes = (
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/cursos/update/:cursoId" exact>
						<UpdateCurso />
					</Route>
					<Route path="/:userId/cursos" exact>
						<MisCursos />
					</Route>
					<Route path="/comoFunciona" exact>
						<ComoFunciona />
					</Route>
					<Route path="/cursos/nuevo" exact>
						<CreateCursoPage />
					</Route>

					<Route path="/:userId/notificaciones" exact>
						<NotificacionesProfesor />
					</Route>

					<Route path="/:userId/contrataciones" exact>
						<ContratacionesProfesor />
					</Route>
					<Route path="/users/:userId" exact>
						<UpdateUser />
					</Route>

					<Route path="/cursos/:cursoId" exact>
						<CursoPage />
					</Route>
					<Route path="/:userId/perfil" exact>
						<Profile />
					</Route>
					<Redirect to="/" />
				</Switch>
			);
		}
	} else {
		routes = (
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/comoFunciona" exact>
					<ComoFunciona />
				</Route>
				<Route path="/forgotPassword" exact>
					<ForgotPassword />
				</Route>
				<Route path="/resetPassword/:userId/:token" exact>
					<ResetPassword />
				</Route>
				<Route path="/cursos/:cursoId" exact>
					<CursoPage />
				</Route>
				<Route path="/register" exact>
					<RegisterPage />
				</Route>
				<Route path="/auth" exact>
					<LoginPage />
				</Route>
				<Redirect to="/auth" />
			</Switch>
		);
	}

	return (
		<>
			<AuthContext.Provider
				value={{
					userType: userType,
					isLoggedIn: !!token,
					token: token,
					userId: userId,
					login: login,
					logout: logout,
				}}
			>
				<Router>
					<MainNavigation />
					<main>{routes}</main>
					<Footer />
				</Router>
			</AuthContext.Provider>
		</>
	);
}

export default App;
