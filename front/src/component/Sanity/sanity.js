import { createClient } from "@sanity/client";

export default createClient({
  projectId: "0q5cvqe1",
  dataset: "production",
  apiVersion: "2021-10-21", // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
});
