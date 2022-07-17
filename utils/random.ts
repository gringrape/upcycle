const random = ({ start, end, count }: {
    start: number;
    end: number;
    count: number;
}): number[] => {
  const numbers = Array(end - start).fill(0).map((_, i) => i);

  return numbers.sort(() => 0.5 - Math.random()).slice(0, count);
};

export default random;
