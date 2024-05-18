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
});
