import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ListaParticipantes from './ListaParticipantes';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

describe('uma lista vazia de participantes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test('rendeniza uma lista vazia', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  });
});

describe('uma lista preenchida de participantes', () => {
  const participantes = ['Alice', 'Bob', 'Charlie'];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test('rendeniza uma lista com os participantes', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participantes.length);
    itens.forEach((item, index) => {
      expect(item).toHaveTextContent(participantes[index]);
    });
  });
});
