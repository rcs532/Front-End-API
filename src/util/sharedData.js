export const database_Dummy = {
	dummy_users: [
		{
			id: "alu1",
			tipo: "estudiante",
			nombre: "Roberto",
			apellido: "Salinas",
			password: "12345678",
			mail: "testalu1@test.com",
			celular: "1234",
			fechaNacimiento: "2015-03-25",
			estudiosCursados: "primaria, secundaria",
			cursos: [
				{ cursoId: "curso1", estado: false }, //el estado indica true si el curso fue solicitado y aceptado
				{ cursoId: "curso2", estado: true }, //el estado indica false si el alumno lo solicito pero aun no ha sido aceptado
			],
		},
		{
			id: "alu2",
			tipo: "estudiante",
			nombre: "Roberto",
			apellido: "Salinas",
			password: "12345678",
			mail: "testalu2@test.com",
			celular: "1234",
			fechaNacimiento: "2015-03-25",
			estudiosCursados: "primaria, secundaria",
			cursos: [
				{ cursoId: "curso1", estado: false }, //el estado indica true si el curso fue aceptado por el profesor
				{ cursoId: "curso2", estado: true },
				{ cursoId: "curso4", estado: true }, //el estado indica false si el alumno lo solicito pero aun no ha sido aceptado
			],
		},
		{
			id: "profesor1",
			tipo: "profesor",
			nombre: "Maria",
			apellido: "Maria",
			password: "12345678",
			mail: "testprof1@test.com",
			celular: "1234",
			titulo: "licenciado en nada",
			experiencia: "trabaje en microsoft",
			cursos: ["curso1", "curso3", "curso4"],
		},
		{
			id: "profesor2",
			tipo: "profesor",
			nombre: "Jose",
			apellido: "Aguilar",
			password: "12345678",
			mail: "testprof2@test.com",
			celular: "1234",
			titulo: "Ingeniero en nada",
			experiencia: "trabaje en Uber",
			cursos: ["curso2"],
		},
	],
	cursos_dummy: [
		{
			idCurso: "curso1",
			estado: true, //indica si esta en estado publicado (true) o si esta despublicado (false)
			nombreCurso: "Mate101",
			image: "https://www.apwa.net/images/PWM101.jpg",
			profesor: "profesor1",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa, facilis quidem aliquam molestiae earum magnam impedit, laboriosam odio fuga corporis cupiditate! Quam repudiandae neque, debitis voluptates repellendus libero molestias?",
			alumnos: ["alu1", "alu2"],
			duracion: "1 mes",
			frecuencia: "mensual",
			tipo: "grupal",
			costo: 12.99,
			calificacion: 5, // la calificacion va a estar aca. Cuando haga un request por un curso tengo que hacer el calculo y devolverlo en el request
		},
		{
			idCurso: "curso2",
			estado: true,
			nombreCurso: "Biology101",
			image: "https://www.apwa.net/images/PWM101.jpg",
			profesor: "profesor2",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa, facilis quidem aliquam molestiae earum magnam impedit, laboriosam odio fuga corporis cupiditate! Quam repudiandae neque, debitis voluptates repellendus libero molestias?",
			alumnos: ["alu1", "alu2"],
			duracion: "2 meses",
			frecuencia: "mensual",
			tipo: "individual",
			costo: 14.99,
			calificacion: 2,
		},
		{
			idCurso: "curso3",
			estado: true,
			nombreCurso: "API101",
			image: "https://www.apwa.net/images/PWM101.jpg",
			profesor: "profesor1",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa, facilis quidem aliquam molestiae earum magnam impedit, laboriosam odio fuga corporis cupiditate! Quam repudiandae neque, debitis voluptates repellendus libero molestias?",
			alumnos: [],
			duracion: "5 dias",
			frecuencia: "semanal",
			tipo: "individual",
			costo: 2.99,
			calificacion: 1,
		},
		{
			idCurso: "curso4",
			estado: true,
			nombreCurso: "Statistics101",
			image: "https://www.apwa.net/images/PWM101.jpg",
			profesor: "profesor1",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa, facilis quidem aliquam molestiae earum magnam impedit, laboriosam odio fuga corporis cupiditate! Quam repudiandae neque, debitis voluptates repellendus libero molestias?",
			alumnos: ["alu2"],
			duracion: "3 meses",
			frecuencia: "semanal",
			tipo: "individual",
			costo: 12.99,
			calificacion: 5,
		},
	],
	comentarios_dummy: [
		{
			id: "comentario1",
			alumno: "alu1",
			curso: "curso2",
			contenido: "Curso muy bueno",
			estado: true, //indica que el profesor acepto el comentario
		},
		{
			id: "comentario2",
			alumno: "alu2",
			curso: "curso2",
			contenido: "Curso muy malo",
			estado: true,
		},
	],
	calificaciones_dummy: [
		{
			id: "comentario1",
			alumno: "alu1",
			curso: "curso2",
			valor: 5,
		},
		{
			id: "comentario2",
			alumno: "alu2",
			curso: "curso2",
			valor: 4,
		},
	],
};
