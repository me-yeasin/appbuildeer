import ServiceScreen from "@/screens/service/service_screen";

const ServicesPage = ({ params }: { params: { id: string } }) => {
  return <ServiceScreen searchParams={params.id} />;
};

export default ServicesPage;
