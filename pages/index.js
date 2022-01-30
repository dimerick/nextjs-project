import { Container } from 'semantic-ui-react';
import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({countries}) {
  return (
    <>
	<Container>
	<h1>Web Mappers</h1>
	{console.log(countries)}
	{
		countries.map((c) => (
			<p>{c.code}-{c.name}-{c.emoji}</p>
		))
	}
	</Container>

    </>

  )
}

export async function getServerSideProps() {
    const { data } = await client.query({
      query: gql`
        query Countries {
          countries {
            code
            name
            emoji
          }
        }
      `,
    });

    return {
      props: {
        countries: data.countries.slice(0, 100),
      },
   };
}
