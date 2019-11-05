import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyFavoritesDocument extends Document {
  static getInitialProps = async (ctx: DocumentContext): Promise<any> => {
    const originalRenderPage = ctx.renderPage;
    const sheet = new ServerStyleSheet();
    const initialProps = await Document.getInitialProps(ctx);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    return {
      ...initialProps,
      styles: <>{sheet.getStyleElement()}</>,
    };
  };
}

export default MyFavoritesDocument;
