import React from "react";

import ProfileBody from "../components/Users/ProfileBody";
import { AuthContext } from "../context/auth-context";

import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { database_Dummy } from "../util/sharedData";

const dummy_users = database_Dummy.dummy_users;

const Profile = () => {
	const auth = useContext(AuthContext);
	const userId = useParams().userId;

	let identifiedUser;
	identifiedUser = dummy_users.find((u) => u.id === userId);
	//aqui voy a traer el usuario segun el id y le paso los datos a el componente

	let nombre = identifiedUser.nombre;
	let apellido = identifiedUser.apellido;
	let mail = identifiedUser.mail;
	let celular = identifiedUser.celular;

	if (auth.userType === "estudiante") {
		let fechaNacimiento = identifiedUser.fechaNacimiento;
		let estudiosCursados = identifiedUser.estudiosCursados;
		return (
			<ProfileBody
				nombre={nombre}
				apellido={apellido}
				mail={mail}
				celular={celular}
				fechaNacimiento={fechaNacimiento}
				estudiosCursados={estudiosCursados}
			/>
		);
	} else {
		let titulo = identifiedUser.titulo;
		let experiencia = identifiedUser.experiencia;
		return (
			<ProfileBody
				nombre={nombre}
				apellido={apellido}
				mail={mail}
				celular={celular}
				titulo={titulo}
				experiencia={experiencia}
			/>
		);
	}
};

export default Profile;
