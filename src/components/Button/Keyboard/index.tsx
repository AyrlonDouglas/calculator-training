import { ButtonStyle as Button } from "./style";
interface IKeyboardButton {
  keyboardKey: string;
  color?: any;
  onClick: any;
}

export default function KeyboardButton(props: IKeyboardButton) {
  const { keyboardKey, onClick } = props;
  function handleColorKey(key: string): string {
    switch (key) {
      case "/":
        return "#CE50E7";
      case "x":
        return "#F37979";
      case "-":
        return "#7CB6F7";
      case "+":
        return "#F59020";
      case "=":
        return "#16CA7F";
      default:
        return "none";
    }
  }
  return (
    <Button
      variant="contained"
      focusRipple={false}
      sx={{
        backgroundColor: handleColorKey(keyboardKey),
        "&:hover": { backgroundColor: handleColorKey(keyboardKey) },
      }}
      onClick={onClick(keyboardKey)}
    >
      {keyboardKey}
    </Button>
  );
}
