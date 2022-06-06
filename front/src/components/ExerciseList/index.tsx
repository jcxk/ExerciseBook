import * as apihooks from '@/lib/data';
import _ from 'lodash';
import { useState } from 'react';
import { Exercise } from '@/lib/data';

const ExerciseCardSkeleton = ({ numCards = 12 }) => {
  return (
    <>
      {_.times(numCards, (key) => {
        return (
          <div
            key={key}
            className="w-500 h-500 border-2 rounded-md mx-auto mt-20"
          >
            <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
              <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
              <div className="flex flex-col space-y-3">
                <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const ExerciseCard = ({ content, user, created_at }: Exercise) => {
  return (
    <div className="w-1/3 bg-gray-400 h-12">
      <p className="flex-1">{content}</p>
    </div>
  );
};

const ExerciseCardList = ({ exercises }: { exercises: Exercise[] }) => {
  return exercises.length > 0 ? (
    <>
      {_.map(exercises, (item) => {
        return <ExerciseCard key={item.id} {...item} />;
      })}
    </>
  ) : (
    <p>No results</p>
  );
};

export default function ExerciseList() {
  const [page, setPage] = useState(0);
  const { data, isLoading, error, isError, isFetched } =
    apihooks.useGetExercise(
      {},
      {
        axios: {
          baseURL: `http://localhost:3001`,
        },
        query: {
          keepPreviousData: true,
        },
      },
    );

  return (
    <div className="flex mb-4">
      {isError ? <div>{error?.message}</div> : ``}
      {isLoading ? (
        <ExerciseCardSkeleton numCards={11} />
      ) : (
        <ExerciseCardList exercises={data?.data?.items || []} />
      )}
    </div>
  );
}
