import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';
import Sorteio from './Sorteio';
import { useResultadoDoSorteio } from '../../state/hooks/useResultadoDoSorteio';
import { act } from 'react-dom/test-utils';

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

jest.mock('../../state/hooks/useResultadoDoSorteio', () => {
  return {
    useResultadoDoSorteio: jest.fn(),
  };
});

describe('Na pagina de sorteio', () => {
  const participantes = ['Alice', 'Bob', 'Charlie'];

  const resultado = new Map<string, string>([
    ['Alice', 'Bob'],
    ['Bob', 'Charlie'],
    ['Charlie', 'Alice'],
  ]);

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
  });
  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    const opcoes = screen.queryAllByRole('option');
    expect(opcoes).toHaveLength(participantes.length + 1);
  });

  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    const select = screen.getByPlaceholderText('Selecione o seu nome');

    fireEvent.change(select, { target: { value: participantes[0] } });

    const botao = screen.getByRole('button');

    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole('alert');

    expect(amigoSecreto).toBeInTheDocument();
  });
  test.skip('esconde o amigo secreto sorteado depois de 5 segundos', async () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    fireEvent.change(select, { target: { value: participantes[1] } });

    const button = screen.getByRole('button');
    fireEvent.click(button);
    act(() => {
      jest.runAllTimers();
    });
    const alerta = screen.queryByRole('alert');
    expect(alerta).not.toBeInTheDocument();
  });
});
