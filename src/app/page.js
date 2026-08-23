import Hero from "@/components/home/Hero";
import AvailableRooms from "@/components/home/AvailableRooms";
import WhyStudyNook from "@/components/home/WhyStudyNook";
import ListYourRoom from "@/components/home/ListYourRoom";

export default function Home() {
  return (
    <>
      <Hero />
      <AvailableRooms />
      <WhyStudyNook />
      <ListYourRoom />
    </>
  );
}