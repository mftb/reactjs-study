import { fireEvent, render, screen } from '@testing-library/react';
import App, { areEqual, areAnagram } from './App';

test('are equal', () => {
  expect(areEqual('batata', 'batata')).toBe(true);
  expect(areEqual('abc', '123')).toBe(false);
  expect(areEqual('abc', '')).toBe(false);
  expect(() => areEqual('abc', null)).toThrow('args cant be null');
  expect(() => areEqual(null, 'abc')).toThrow('args cant be null');
  expect(areEqual('', 'abc')).toBe(false);
  expect(areEqual('abc')).toBe(false);
  expect(() => areEqual(null)).toThrow('args cant be null');
  expect(() => areEqual(null, null)).toThrow('args cant be null');
  expect(areEqual('', '')).toBe(true);
});

test('anagrams', () => {
  expect(areAnagram('abc', 'abc')).toBe(true);
  expect(areAnagram('abc', 'cba')).toBe(true);
  expect(areAnagram('a', 'b')).toBe(false);
  expect(areAnagram('', 'b')).toBe(false);
  expect(areAnagram('c', '')).toBe(false);
  expect(() => areAnagram('c')).toThrowError();
  expect(() => areAnagram(null)).toThrowError();
  expect(() => areAnagram()).toThrowError();
  expect(() => areAnagram(null, null)).toThrowError();
});

test('renders aplication', () => {
  render(<App />);
  const titleElement = screen.getByText(/Comparações de String/i);
  expect(titleElement).toBeInTheDocument();
  const p1 = screen.getByText(/Diferente/i);
  expect(p1).toBeInTheDocument();
  const b1 = screen.getByTestId("input-submit-equal");
  expect(b1).toBeInTheDocument();
  const p2 = screen.getByText(/Anagrama/i);
  expect(p2).toBeInTheDocument();
});

test('react components', () => {
  render(<App />);

  const inputA = screen.getByTestId('input-a');
  fireEvent.change(inputA, { target:  { value: 'abc' }});
  expect(inputA).toHaveValue('abc');

  const inputB = screen.getByTestId('input-b');
  fireEvent.change(inputB, { target:  { value: 'cba' }});
  expect(inputB).toHaveValue('cba');

  const inputSubmit = screen.getByTestId('input-submit-equal');
  fireEvent.click(inputSubmit);

  expect(screen.getByTestId('output-result-equal')).toHaveTextContent('Diferente');

  const inputSubmit2 = screen.getByTestId('input-submit-anagram');
  fireEvent.click(inputSubmit2);

  expect(screen.getByTestId('output-result-anagram')).toHaveTextContent('Anagrama');
});


test('react components 2', () => {
  render(<App />);

  const inputA = screen.getByTestId('input-a');
  fireEvent.change(inputA, { target:  { value: 'abc' }});
  expect(inputA).toHaveValue('abc');

  const inputB = screen.getByTestId('input-b');
  fireEvent.change(inputB, { target:  { value: 'cb' }});
  expect(inputB).toHaveValue('cb');

  const inputSubmit = screen.getByTestId('input-submit-equal');
  fireEvent.click(inputSubmit);

  expect(screen.getByTestId('output-result-equal')).toHaveTextContent('Diferente');

  const inputSubmit2 = screen.getByTestId('input-submit-anagram');
  fireEvent.click(inputSubmit2);

  expect(screen.getByTestId('output-result-anagram')).toHaveTextContent('Não Anagrama');
});