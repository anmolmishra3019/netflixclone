import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Row from "@/components/Row";
import Footer from "@/components/Footer";
import { mockData } from "@/lib/mockData";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Banner />

      <section className="-mt-8 sm:-mt-12 md:-mt-20 lg:-mt-32 relative z-20">
        <Row title="Netflix Originals" movies={mockData.originals} isLargeRow />
        <Row title="Trending Now" movies={mockData.trending} />
        <Row title="Top Rated" movies={mockData.topRated} />
        <Row title="Action Thrillers" movies={mockData.action} />
        <Row title="Comedies" movies={mockData.comedy} />
        <Row title="Horror" movies={mockData.horror} />
      </section>

      <Footer />
    </main>
  );
}
