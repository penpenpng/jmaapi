import { printGreet } from "@/greet";
import * as API from "@/api";

printGreet();

API.getArea().then(({ data }) => {
  console.log(data);
  console.log("fetched!");
});
