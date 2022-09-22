import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR";

export const formatedDate = (createdAt: Date) => {
  return format(createdAt, "hh:mm aa", { locale: ptBR });
}