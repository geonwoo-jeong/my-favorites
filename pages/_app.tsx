import AppLayout from "../components/AppLayout";

const MyFavorites = ({ Component }) => {
  return (
    <>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default MyFavorites;
