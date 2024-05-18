import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Configuracao from './Configuracao';

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe('a página de configuração', () => {
  test('deve ser renderizada corretamente', () => {
    // implemente o teste aqui
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );
    expect(container).toMatchSnapshot();
  });

  test('deve ter um título', () => {
    // implemente o teste aqui
  });
  test('deve ter um campo para inserir o nome do participante', () => {
    // implemente o teste aqui
  });
  test('deve ter um botão para adicionar o participante', () => {
    // implemente o teste aqui
  });
  test('deve ter uma lista de participantes', () => {
    // implemente o teste aqui
  });
});
