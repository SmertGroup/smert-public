import { Button, Card as NextUICard, red, Text } from "@nextui-org/react";
import { FunctionComponent } from "react";

interface ICardProps {
  title: string,
  description: string,
}
const Card : FunctionComponent<ICardProps> = ({ title, description }) => {
  return (
    <NextUICard 
    css={{
      $$cardColor: "$colors$primaryLight",
    }}
    >
      <NextUICard.Body css={{display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center"}} >
        <div>
          <Text h6 size={18}>Title</Text>
          <Text>Description</Text>
        </div>
          <Button >Habilitar</Button>
      </NextUICard.Body>
    </NextUICard>
  );
}

export default Card