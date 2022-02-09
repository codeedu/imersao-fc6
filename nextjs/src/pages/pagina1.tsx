import { GetServerSideProps, NextPage } from "next";

type Pagina1PageProps = {
    name: string;
}

const Pagina1Page: NextPage<Pagina1PageProps> = (props) => {
  return <h1>Hello World!! {props.name}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      name: "Full Cycle",
    },
  };
};

export default Pagina1Page;
