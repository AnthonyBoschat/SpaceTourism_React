import { format, parseISO } from "date-fns";
import { fr } from 'date-fns/locale';

const formatDate = (isoString) => {
    const date = parseISO(isoString);
    return format(date, "dd/MM/yyyy HH:mm:ss", { locale: fr });
  };

  export default formatDate