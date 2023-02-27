import { google } from 'googleapis';

export async function getServerSideProps({ query }){

  const auth = await google.auth.getClient({scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']});
  return {
    props: {
      product,
      standardprice
    }
  }
}
export default function Product({ product, standardprice}){
  return <product>
    <h2>{product}</h2>
    <div></div>
  </product>
}