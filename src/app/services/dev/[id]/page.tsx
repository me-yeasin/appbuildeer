import ServiceScreen from "@/screens/service/service_screen";

const DevServicePage = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return <ServiceScreen searchParams={params.id} />;
};

export default DevServicePage;
