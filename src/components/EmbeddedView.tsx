import React from "react";
import { Dimensions, View } from "react-native";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

interface Props {
  url: string;
  height?: number;
}

const EmbeddedWebView: React.FC<Props> = ({ url, height = 300 }) => {
  return (
    <View style={{ width, height }}>
      <WebView
        source={{ uri: url }}
        javaScriptEnabled
        domStorageEnabled
        scalesPageToFit
        style={{ flex: 1 }}
        startInLoadingState
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
};

export default EmbeddedWebView;
