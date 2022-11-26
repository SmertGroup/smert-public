import { Button, Text } from "@nextui-org/react"
import { FunctionComponent } from "react"

interface ISmertButtonProps {
  text: string,
  onPress: ()=>void,
}

const MenuButton: FunctionComponent<ISmertButtonProps> = ({ text, onPress}) => {
  return (
    <Button
      css={{
        h: '$24',
      }}
      shadow
      color='gradient'
      onPress={onPress}
    >
      <Text h6 size={15} color='white' css={{ mt: 0, textAlign: 'center' }}>
        {text}
      </Text>
    </Button>
  )
}

export default MenuButton