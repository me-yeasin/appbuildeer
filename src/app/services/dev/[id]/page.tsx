import ServiceScreen from "@/screens/service/service_screen";

const DevServicePage = ({ params }: { params: { id: string } }) => {
  return <ServiceScreen searchParams={params.id} />;
};

export default DevServicePage;
