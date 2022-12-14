import React from "react";
import BuscadorCursos from "../components/Cursos/BuscadorCursos";
import ComoFuncionaBanner from "../components/ComoFuncionaBanner/ComoFunciona";
import LoadingSpinner from "../components/UIElements/LoadingSpinner";
import { useQuery } from "react-query";
import * as api from "../MiAppApi";

const mainFeaturedPost = {
	title: "Teachers Market",
	description: "Teachers Market es una pagina donde puedes encontrar profesores particulares.",
	image: "https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg?w=2000",
	imageText: "imagen",
	linkText: "Conocer como funciona...",
};

const Home = () => {
	const { data, error, isError, isLoading, isSuccess } = useQuery(["cursos"], api.fetchCursos, {
		refetchOnMount: true,
		refetchOnWindowFocus: true,
	});

	if (isLoading) {
	}
	if (isError) {
		return <div>Error! {error.response.data.message}</div>;
	}
	if (isSuccess) {
		return (
			<>
				<ComoFuncionaBanner post={mainFeaturedPost} />
				<BuscadorCursos encontrados={data.cursos} />;
			</>
		);
	} else {
		return <LoadingSpinner asOverlay />;
	}
};

export default Home;
