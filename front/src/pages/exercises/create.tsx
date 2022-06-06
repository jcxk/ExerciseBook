import CreateExerciseForm from "@/components/CreateExerciseForm";

export default function ExercisesCreatePage() {
  return <div>Create</div>;
}

ExercisesCreatePage.getLayout = function getLayout(page) {
  return (
      <CreateExerciseForm />
  );
};
