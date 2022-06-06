import tw from 'tailwind-styled-components';
const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
    uppercase
`;
export default function Sample() {
  return (
    <Container>
      <div>Use the Container as any other React Component</div>
    </Container>
  );
}
