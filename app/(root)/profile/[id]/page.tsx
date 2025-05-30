import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const Profile = async ({params} : ParamsWithSearch) => {
    const { id } = await params;
  return (
    <div className="wrapper page">
        <Header subHeader="amit@mail.com" title="Amit" userImg="/assets/images/dummy.jpg" />
        <section className="video-grid">
        {dummyCards.map((card) =>(
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </div>
  )
}
export default Profile