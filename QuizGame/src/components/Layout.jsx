// src/components/Layout.jsx
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Flex as="main" p={4}>
        <Outlet />
      </Flex>
    </Box>
  );
}

export default Layout;
// This component serves as a layout wrapper for the application. It includes a navigation bar and a main content area where different pages will be rendered based on the current route. The `Outlet` component from `react-router-dom` is used to render the child routes defined in the main `App` component. The `Box` and `Flex` components from Chakra UI are used for layout and styling purposes.
// The `minH` property ensures that the layout takes up at least the full height of the viewport, and the `p` property adds padding around the main content area.
// The `Navbar` component is imported and rendered at the top of the layout, providing a consistent navigation experience across different pages of the application. The `Flex` component is used to create a flexible layout for the main content area, allowing for easy alignment and spacing of child elements.
// The `Box` component is used to create a container for the entire layout, ensuring that the navigation bar and main content are properly structured and styled. The `Outlet` component is a placeholder that will be replaced with the appropriate child route component based on the current URL path. This allows for a clean and organized structure for the application, making it easy to manage different pages and their respective content.
// The `Layout` component is a functional component that serves as a wrapper for the main application layout. It uses Chakra UI's `Box` and `Flex` components to create a responsive and visually appealing layout. The `Navbar` component is included at the top, providing navigation links to different parts of the application. The `Outlet` component from `react-router-dom` is used to render the child routes, allowing for dynamic content based on the current URL path. Overall, this layout structure promotes a clean and organized approach to building the application's user interface.
