import React from 'react';
import { useForm } from 'react-hook-form';
import * as apihooks from '@/lib/data';

const CreateExerciseForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    const createUserDTO = {
      content: values.content,
      user_id: `656b124c-e9b5-4b19-9cf2-08161aa15e2e`,
    };

    try {
      const response = await apihooks.createExercise(createUserDTO, {
        baseURL: `http://localhost:3001`,
      });
    } catch (errors) {
      console.log(errors)
      setError("content", { type: 'custom', message: errors.response.data.message})
      //throw Array.isArray(errors) ? errors : new FormError(errors);
    }
  });
  const onError = (errors, e) => {
    console.log(errors, e, `----`);
  };

  return (
    <React.Fragment>
      <h1 className="text-center text-4xl font-semibold mt-10">
        Share Your Ideas
      </h1>
      <form
        className="max-w-xl m-auto py-10 mt-10 px-12"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <textarea
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700 h-48"
          placeholder="Add text"
          autoFocus
          {...register(`content`, {
            required: true,
            maxLength: {
              value: 100,
              message: `Too long!`,
            },
          })}
        />
        {errors.content && (
          <div className="mb-3 text-normal text-red-500">
            {errors.content.message}
          </div>
        )}
        <div className="flex">
          <div className="m-auto">
            <button
              className="mt-4 bg-white-400 hover:bg-green-600 text-grey-100 border-2 border-black py-3 px-6 font-semibold text-md rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreateExerciseForm;
