import { View } from "react-native";

export function PaginationDots({ activeIndex }: { activeIndex: number }) {
  const dotSize = [10, 10, 10];
  const dotStyles = [
    {
      width: dotSize[0],
      height: dotSize[0],
      opacity: activeIndex === 0 ? 1 : 0.5,
    },
    {
      width: dotSize[1],
      height: dotSize[1],
      opacity: activeIndex === 1 ? 1 : 0.5,
    },
    {
      width: dotSize[2],
      height: dotSize[2],
      opacity: activeIndex === 2 ? 1 : 0.5,
    },
  ];

  return (
    <View
      style={{
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {dotStyles.map((style, index) => (
        <View
          key={index}
          style={{
            borderRadius: dotSize[index] / 2,
            backgroundColor: "#199A8E",
            marginHorizontal: 5,
            ...style,
          }}
        />
      ))}
    </View>
  );
}
