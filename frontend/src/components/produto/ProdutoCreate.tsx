import React, { FormEvent, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import api from "@/utils/api";

import { useRouter } from "next/router";

function ProdutoCreate() {
  const [nome, setNome] = useState<string>("");
  const [preco, setPreco] = useState<number>();
  const [estoque, setEstoque] = useState<number>();

  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const produto = { nome, preco, estoque };
    api
      .post("/produto", produto)
      .then(() => router.push("/produto"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Criação de Produto</h2>
      <form onSubmit={onSubmit}>
        <Box
          component="form"
          sx={{
            mb: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{
            mb: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            label="Preço"
            value={preco}
            onChange={(e) => setPreco(parseFloat(e.target.value))}
          />
        </Box>
        <Box
          component="form"
          sx={{
            mb: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            label="Estoque"
            value={estoque}
            onChange={(e) => setEstoque(parseInt(e.target.value))}
          />
        </Box>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default ProdutoCreate;
