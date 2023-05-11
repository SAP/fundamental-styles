import truncatedTextExampleHtml from "./truncated-text.example.html?raw";
import disabledLinkExampleHtml from "./disabled-link.example.html?raw";
import textWithLinkExampleHtml from "./text-with-link.example.html?raw";
import textExampleHtml from "./text.example.html?raw";
export default {
  title: 'Dev/Object Attribute'
};
export const Text = () => textExampleHtml;
Text.parameters = {
  docs: {
    disable: true
  }
};
export const TextWithLink = () => textWithLinkExampleHtml;
TextWithLink.parameters = {
  docs: {
    disable: true
  }
};
export const DisabledLink = () => disabledLinkExampleHtml;
DisabledLink.parameters = {
  docs: {
    disable: true
  }
};
export const TruncatedText = () => truncatedTextExampleHtml;
TruncatedText.parameters = {
  docs: {
    disable: true
  }
};