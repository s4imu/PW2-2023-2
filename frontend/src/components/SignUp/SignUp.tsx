import { Box, TextField, Button } from "@mui/material";
import { useState, FormEvent } from "react";

import { SignUpDto } from "@/types/auth";

import api from "@/utils/api";

import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const credenciais: SignUpDto = {
      nome: nome!,
      email: email!,
      senha: senha!,
    };
    api.post("/signup", credenciais).then((data) => {
      router.push("/produto");
    });
  };

  return (
    <>
      <h1>Criação de Conta</h1>
      <form onSubmit={onSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Senha"
            required
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          ></TextField>
        </Box>
        <Button variant="contained" type="submit">
          Criar Conta
        </Button>
      </form>
    </>
  );
}

export default SignUp;
