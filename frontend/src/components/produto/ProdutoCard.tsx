import { useState, useEffect } from "react";
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
  let [quantidade, setQuantidade] = useState(1);
  let [precoTotal, setPrecoTotal] = useState(1 * produto.preco);

  useEffect(() => {
    setPrecoTotal(quantidade * produto.preco);
  }, [quantidade]);

  const increaseQtd = () => {
    if (quantidade < produto.estoque) setQuantidade((quantidade += 1));
  };

  const decreaseQtd = () => {
    if (quantidade > 1) setQuantidade((quantidade -= 1));
  };

  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Typography gutterBottom variant="h4" component="div">
            {produto.nome}
          </Typography>
          <ButtonGroup
            size="small"
            variant="contained"
            aria-label="Basic button group"
          >
            <Button onClick={increaseQtd} variant="contained" size="small">
              <AddIcon />
            </Button>
            <Button onClick={decreaseQtd} variant="contained" size="small">
              <RemoveIcon />
            </Button>
          </ButtonGroup>
        </div>

        <Typography variant="body2" color="text.secondary">
          Preço: {produto.preco} <br />
          Estoque: {produto.estoque} <br />
          Quantidade: {quantidade} <br />
          Preço Total: {precoTotal}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
