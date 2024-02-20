import { PrismaClient, Usuario } from '@prisma/client';
import createUsuarioDto from './usuario.types';

const prisma = new PrismaClient();

export const createUsuario = async (
  usuario: createUsuarioDto,
): Promise<Usuario> => {
  return await prisma.usuario.create({
    data: usuario,
  });
};
