import Login from "./Login";

export default function PageHeader(props: { title: string }): JSX.Element {
  return (
    <>
      <h1>{props.title}</h1>
      <Login />
    </>
  );
}
