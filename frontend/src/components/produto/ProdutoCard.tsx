import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import { Produto } from "@/types/produto";

interface ProdutoCardProps {
  produto: Produto;
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {produto.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: {produto.preco} <br />
          Estoque: {produto.estoque}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button variant="contained" size="small">
            <AddIcon />
          </Button>
          <Button variant="contained" size="small">
            <RemoveIcon />
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
