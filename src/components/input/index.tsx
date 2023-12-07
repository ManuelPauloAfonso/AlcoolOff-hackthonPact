import { InputFile } from "./style";

type TypeInput = {
  title: string;
};

export default function Input({ title }: TypeInput) {
  return <InputFile placeholder={title} />;
}
