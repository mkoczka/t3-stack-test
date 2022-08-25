import { ContentTokensLayout } from "components/content-tokens-layout";
import type { NextPage } from "next";
import { useState } from "react";
import { trpc } from "utils/trpc";
import { FieldValues, useForm } from "react-hook-form";

type FormValues = {
  name: string;
};

const ContentColorsPage: NextPage = () => {
  const { data } = trpc.useQuery(["colors.getAll"]);
  const ctx = trpc.useContext();

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "Color default",
    },
  });

  const mutationCreate = trpc.useMutation(["colors.create"], {
    onSuccess() {
      ctx.invalidateQueries(["colors.getAll"]);
    },
  });

  const mutationDelete = trpc.useMutation(["colors.delete"], {
    onSuccess() {
      ctx.invalidateQueries(["colors.getAll"]);
    },
  });

  const onSubmit = async (data: FormValues) => {
    mutationCreate.mutate({
      name: data.name,
    });
  };

  return (
    <ContentTokensLayout title="Colors">
      <>
        {data?.map((color) => (
          <div className="flex p-2 my-2 rounded-md bg-slate-400" key={color.id}>
            {color.name}

            <button
              onClick={() => mutationDelete.mutate({ id: color.id })}
              className="ml-auto"
            >
              Delete
            </button>
          </div>
        ))}

        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <input className="p-2 border border-gray-300" {...register("name")} />

          <button className="p-2 border border-blue-800 mx-2 rounded-md bg-blue-500 text-white">
            Add color
          </button>
        </form>
      </>
    </ContentTokensLayout>
  );
};

export default ContentColorsPage;
