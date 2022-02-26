import { Container } from 'semantic-ui-react';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import ReactHtmlParser from 'react-html-parser'; 
import Router from 'next/router';

export default function Home({posts}) {
  return (
    <>
	<Container>
	<h1>Web Mappers</h1>
	{console.log(posts)}
  {
		posts.map((p, i) => (
      
      <div key={i}>
      {console.log(process.env.NEXT_PUBLIC_GRAPHQL)}
			<h2>{p.attributes.Titulo}</h2>
      <div>{ ReactHtmlParser (p.attributes.Descripcion)}</div>
      <img src={process.env.NEXT_PUBLIC_GRAPHQL+p.attributes.Imagen.data.attributes.url}></img>
      </div>
		))
	}

	
	</Container>

    </>

  )
}

export async function getServerSideProps() {
  
    const { data } = await client.query({
      query: gql`
      query{
        posts{
          data{
           id 
            attributes{
              Titulo
              Descripcion
              createdAt
              Imagen{
                data{
                  attributes{
                    url
                    previewUrl
                  }
                }
              }
            }
          }
        }
      }
      `,
    });

    return {
      props: {
        posts: data.posts.data
      },
   };
}
