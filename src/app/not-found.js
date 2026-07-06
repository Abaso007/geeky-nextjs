import NotFound from "@layouts/404";
import { getRegularPage } from "@lib/contentParser";

const NotFoundPage = async () => {
  const data = await getRegularPage("404");

  return <NotFound data={data} />;
};

export default NotFoundPage;
