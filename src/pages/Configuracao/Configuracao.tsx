import Card from '../../components/Card';
import Formulario from '../../components/Formulario/Formulario';
import ListaParticipantes from '../../components/ListaParticipantes/ListaParticipantes';
import Rodape from '../../components/Rodape/Rodape';

const Configuracao = () => {
  return (
    <Card>
      <section>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};
export default Configuracao;
