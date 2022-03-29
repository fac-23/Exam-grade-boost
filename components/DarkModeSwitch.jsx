import { useColorMode, Switch } from "@chakra-ui/react";

export default function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <Switch
      ariaLabel="click to toggle dark mode"
      colorScheme="secondary"
      isChecked={isDark}
      onChange={toggleColorMode}
      size="lg"
    />
  );
}
