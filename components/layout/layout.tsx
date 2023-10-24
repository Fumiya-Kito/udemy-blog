import MainNavigation from "./main-navigation";

interface layoutProps {
  children: React.ReactNode
}

function Layout(props: layoutProps) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;