import React from "react";
import { Picker } from "@react-native-picker/picker";
export default function SingleSelect() {
  return (
    <Picker selectedValue={""} onValueChange={(itemValue, itemIndex) => {}}>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
}
