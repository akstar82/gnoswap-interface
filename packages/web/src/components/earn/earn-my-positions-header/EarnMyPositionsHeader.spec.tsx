import { render } from "@testing-library/react";
import { Provider as JotaiProvider } from "jotai";
import GnoswapThemeProvider from "@providers/gnoswap-theme-provider/GnoswapThemeProvider";
import EarnMyPositionsHeader, { EarnMyPositionsHeaderProps } from "./EarnMyPositionsHeader";

describe("EarnMyPositionsHeader Component", () => {
  it("EarnMyPositionsHeader render", () => {
    const args: EarnMyPositionsHeaderProps = {
      connected: false,
      moveEarnAdd: () => { return; }
    };

    render(
      <JotaiProvider>
        <GnoswapThemeProvider>
          <EarnMyPositionsHeader {...args} />
        </GnoswapThemeProvider>
      </JotaiProvider>,
    );
  });
});