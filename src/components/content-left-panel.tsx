import { useRouter } from "next/router";
import { trpc } from "utils/trpc";
import { MyLink } from "./my-link";

export const ContentLeftPanel = () => {
  const router = useRouter();
  const { wsSlug, dsSlug, version, brand } = router.query;

  const url = `/ws/${wsSlug}/ds/${dsSlug}/${version}/content/${brand}/tokens`;

  const { data } = trpc.useQuery(["colors.getAll"]);

  return (
    <div className="border-gray-300 border-r p-2 w-80">
      <MyLink href={`${url}/colors`}>Colors</MyLink>
      <MyLink href={`${url}/typography`}>Typography</MyLink>
      <div>Fonts</div>
      <div>Gradients</div>
      <div>Shadows</div>
      <div>--</div>
      {data?.map((color) => (
        <div className="flex p-2 my-2 rounded-md bg-slate-400" key={color.id}>
          {color.name}
        </div>
      ))}
    </div>
  );
};
