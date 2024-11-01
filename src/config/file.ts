import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename); // Verifica se o arquivo existe
  } catch (error) {
    return; // Se não existir, não precisa deletar
  }

  await fs.promises.unlink(filename); // Deleta o arquivo pois ele existe
};
