import styled from 'styled-components';
import ExerciseList from "@/components/ExerciseList";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;


export default function ExercisesPage() {
  return (
    <>
      <ExerciseList />
    </>
    )
  ;
}
