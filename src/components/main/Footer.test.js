/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/vue";
import Footer from "./Footer";

test("renders footer", () => {
	const { debug } = render(Footer);

	debug();
});
