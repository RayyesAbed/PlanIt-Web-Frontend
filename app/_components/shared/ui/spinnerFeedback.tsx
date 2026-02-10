import { Spinner } from "./spinner";

function SpinnerFeedback({ text }: { text: string }) {
  return (
    <>
      <Spinner className="size-12" />
      <h2>{text}</h2>
    </>
  );
}

export default SpinnerFeedback;
