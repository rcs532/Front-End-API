import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const CursoCard = (props) => {
	const { id, title, image, description, price, teacher } = props;

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia component="img" height="140" image={image} />
			<CardContent>
				<Typography gutterBottom variant="h4" component="div">
					{title}
				</Typography>
				<Typography variant="h6" color="text">
					{teacher}
				</Typography>
				<Typography variant="body4" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Typography size="small" gutterBottom variant="p" component="div">
					{price}
				</Typography>
				<NavLink to={`/cursos/${id}`} style={{ textDecoration: "none" }}>
					<Button size="small">Ver detalles</Button>
				</NavLink>
			</CardActions>
		</Card>
	);
};

export default CursoCard;
