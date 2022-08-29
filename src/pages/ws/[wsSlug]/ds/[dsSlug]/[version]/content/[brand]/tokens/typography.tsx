import { Typography } from "@prisma/client";
import { ContentTokensLayout } from "components/content-tokens-layout";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { trpc } from "utils/trpc";

const TypographyList = ({ data }: { data: Typography[] }) => (
  <>
    {data.map((typo) => (
      <div key={typo.id}>
        <h2>{typo.name}</h2>
      </div>
    ))}
  </>
);

type FormValues = {
  name: string;
};

const ContentTypographyPage: NextPage = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "Typo default",
    },
  });

  const ctx = trpc.useContext();

  const { data } = trpc.useQuery(["typography.getAll"]);

  const mutation = trpc.useMutation(["typography.create"], {
    onSuccess() {
      ctx.invalidateQueries(["typography.getAll"]);
    },
  });

  const onSubmit = async (values: FormValues) => {
    await mutation.mutate({
      name: values.name,
    });
  };

  return (
    <ContentTokensLayout title="Typography">
      {data && <TypographyList data={data} />}

      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input
          {...register("name")}
          className="p-2 rounded-sm border border-gray-600"
          name="name"
          type="text"
        />

        <button
          disabled={mutation.isLoading}
          className="p-2 text-white bg-blue-700 rounded-md"
          type="submit"
        >
          {mutation.isLoading ? "Saving..." : "Submit"}
        </button>
      </form>
    </ContentTokensLayout>
  );
};

export default ContentTypographyPage;
